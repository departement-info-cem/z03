"""Contrôles de non-régression de la distribution R8, sans dépendances."""
import importlib.util
from pathlib import Path
import shutil
import tempfile
import unittest
from zipfile import ZipFile

spec = importlib.util.spec_from_file_location("r8", Path(__file__).resolve().parents[1] / "preparer-rencontre8.py")
r8 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(r8)


class ArchivesR8(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.generated = r8.generate(r8.REPO)

    def folder(self, parent):
        folder = Path(parent)
        for name, data in self.generated.items():
            (folder / name).write_bytes(data)
        return folder

    def test_determinisme_et_sources_inchangees(self):
        inputs = [r8.REPO / "web/static/files" / p for p in ("420905_lab4", "rencontre8/classes-attributs")]
        before = {p: p.read_bytes() for root in inputs for p in root.rglob("*") if p.is_file()}
        self.assertEqual(self.generated, r8.generate(r8.REPO))
        self.assertEqual(before, {p: p.read_bytes() for p in before})

    def test_archives_versionnees_crc_et_separation(self):
        r8.validate(r8.REPO / "web/static/files/rencontre8", self.generated)

    def test_archive_absente_ou_divergente_refusee(self):
        with tempfile.TemporaryDirectory() as parent:
            folder = self.folder(parent)
            name = next(iter(self.generated))
            (folder / name).write_bytes(b"divergence")
            with self.assertRaises(ValueError):
                r8.validate(folder, self.generated)
            (folder / name).unlink()
            with self.assertRaises(ValueError):
                r8.validate(folder, self.generated)

    def test_document_interne_refuse_meme_si_zip_valide(self):
        with tempfile.TemporaryDirectory() as parent:
            folder = self.folder(parent)
            generated = self.generated.copy()
            name = next(iter(generated))
            with ZipFile(folder / name, "a") as archive:
                archive.writestr("exercice1/notes-enseignant.md", "interne")
            generated[name] = (folder / name).read_bytes()
            with self.assertRaisesRegex(ValueError, "contenu invalide"):
                r8.validate(folder, generated)

    def test_source_crlf_et_document_interne(self):
        with tempfile.TemporaryDirectory() as parent:
            repository = Path(parent)
            for relative in ("420905_lab4", "rencontre8/classes-attributs"):
                shutil.copytree(r8.REPO / "web/static/files" / relative,
                                repository / "web/static/files" / relative)
            for file in repository.rglob("*"):
                if file.is_file() and file.suffix in {".html", ".css", ".js"}:
                    file.write_bytes(file.read_bytes().replace(b"\r\n", b"\n").replace(b"\n", b"\r\n"))
            self.assertEqual(self.generated, r8.generate(repository))
            (repository / "web/static/files/420905_lab4/lab4_exercice2/notes-enseignant.md").write_text("interne")
            with self.assertRaisesRegex(ValueError, "Inventaire non autorisé"):
                r8.generate(repository)

    def test_corrige_identique_au_depart_refuse(self):
        with tempfile.TemporaryDirectory() as parent:
            folder = self.folder(parent)
            generated = self.generated.copy()
            name = "rencontre8-evenements-styles-corriges.zip"
            generated[name] = generated["rencontre8-evenements-styles.zip"]
            (folder / name).write_bytes(generated[name])
            with self.assertRaisesRegex(ValueError, "identiques"):
                r8.validate(folder, generated)


if __name__ == "__main__":
    unittest.main()
