"""Non-regression tests for committed R8 ZIP validation."""
import importlib.util
import tempfile
import unittest
from pathlib import Path
from zipfile import ZipFile, ZIP_STORED

spec = importlib.util.spec_from_file_location("r8_zip", Path(__file__).resolve().parents[1] / "verifier_zip_rencontre8.py")
r8 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(r8)


class ArchivesR8(unittest.TestCase):
    def test_archives_versionnees_crc_et_separation(self):
        r8.validate_folder(r8.ROOT / "web/static/files/rencontre8")

    def test_archive_absente_refusee(self):
        with tempfile.TemporaryDirectory() as tmp:
            with self.assertRaises(ValueError):
                r8.validate_folder(Path(tmp))

    def test_documents_internes_refuses(self):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "rencontre8-evenements-styles.zip"
            with ZipFile(path, "w", ZIP_STORED) as archive:
                archive.writestr("exercice1/notes-enseignant.md", "prive")
            with self.assertRaisesRegex(ValueError, "document interne"):
                r8.validate_folder(Path(tmp))

    def test_chemins_dangereux_refuses(self):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "rencontre8-evenements-styles.zip"
            with ZipFile(path, "w") as archive:
                archive.writestr("../secret.txt", "x")
            with self.assertRaisesRegex(ValueError, "chemin dangereux"):
                r8.validate_folder(Path(tmp))


if __name__ == "__main__":
    unittest.main()
