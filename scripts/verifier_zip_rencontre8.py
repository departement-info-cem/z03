#!/usr/bin/env python3
"""Validate the four committed R8 ZIP files without regenerating them."""
import argparse
import sys
from pathlib import Path
from zipfile import BadZipFile, ZipFile

ROOT = Path(__file__).resolve().parents[1]
GROUPS = {"evenements-styles": 4, "classes-attributs": 2}


def validate_folder(folder):
    errors = []
    for group, count in GROUPS.items():
        archives = {}
        for corrected in (False, True):
            suffix = "-corriges" if corrected else ""
            filename = f"rencontre8-{group}{suffix}.zip"
            path = folder / filename
            try:
                with ZipFile(path) as z:
                    names = z.namelist()
                    if z.testzip() is not None:
                        raise ValueError("CRC invalide")
                    if not names or len(names) != len(set(names)):
                        raise ValueError("archive vide ou chemins dupliques")
                    for name in names:
                        p = Path(name.replace("\\", "/"))
                        if (name.startswith("/") or "\\" in name or
                                ".." in p.parts or not name.strip() or
                                (p.parts and ":" in p.parts[0])):
                            raise ValueError(f"chemin dangereux : {name}")
                        lowered = name.lower()
                        if any(term in lowered for term in ("notes-enseignant", "corrige-interne", ".env", ".git/")):
                            raise ValueError(f"document interne : {name}")
                    members = {name: z.read(name) for name in names if not name.endswith("/")}
                    for i in range(1, count + 1):
                        prefix = f"exercice{i}/"
                        for required in ("index.html", "css/styles.css", "js/script.js"):
                            if prefix + required not in members:
                                raise ValueError(f"manquant : {prefix + required}")
                    archives[corrected] = members
                    print(f"OK : {path}")
            except (OSError, BadZipFile, ValueError) as exc:
                errors.append(f"{path}: {exc}")
        if len(archives) == 2:
            student, solutions = archives[False], archives[True]
            for i in range(1, count + 1):
                key = f"exercice{i}/js/script.js"
                if student[key] == solutions[key]:
                    errors.append(f"{group}/{key}: depart et corrige identiques")
    if errors:
        raise ValueError("\n".join(errors))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--build-dir", type=Path, help="Verify ZIPs copied into Docusaurus build")
    args = parser.parse_args()
    validate_folder(ROOT / "web/static/files/rencontre8")
    if args.build_dir:
        validate_folder(args.build_dir / "files/rencontre8")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except ValueError as exc:
        print(f"ERREUR : {exc}", file=sys.stderr)
        sys.exit(1)
