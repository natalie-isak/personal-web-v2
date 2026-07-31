"""LEVEL 1 — self-contained runnable checks.

Paste your LibrarySystem class in the marked block below, then:  python3 level1_runnable.py
Runs top to bottom, prints every check, does not stop at the first failure.
"""

# ==============================================================
# PASTE YOUR CODE HERE
# ==============================================================

from library_system import LibrarySystem  # delete this line if you paste your class above

# ==============================================================
# CHECKS
# ==============================================================

_p = _f = 0


def check(label, actual, expected):
    global _p, _f
    ok = actual == expected and type(actual) is type(expected)
    if ok:
        _p += 1
        print(f"  pass  {label}")
    else:
        _f += 1
        print(f"  FAIL  {label}   -> got {actual!r}, expected {expected!r}")


print("\n-- add_book basics")
lib = LibrarySystem()
check('add_book("b1","Dune","Herbert",3)', lib.add_book("b1", "Dune", "Herbert", 3), True)
check('add_book("b2","Emma","Austen",1)', lib.add_book("b2", "Emma", "Austen", 1), True)
check('add_book("b1",...) duplicate id', lib.add_book("b1", "Something Else", "Nobody", 5), False)
check('available_copies("b1")', lib.available_copies("b1"), 3)
check('available_copies("b2")', lib.available_copies("b2"), 1)

print("\n-- add_book rejects copies < 1")
lib = LibrarySystem()
check("add_book with copies=0", lib.add_book("b1", "Dune", "Herbert", 0), False)
check("add_book with copies=-2", lib.add_book("b1", "Dune", "Herbert", -2), False)
check("nothing was added", lib.available_copies("b1"), None)
check("add_book with copies=1 now works", lib.add_book("b1", "Dune", "Herbert", 1), True)
check('available_copies("b1")', lib.available_copies("b1"), 1)

print("\n-- available_copies on unknown book")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 3)
check('available_copies("ghost")', lib.available_copies("ghost"), None)

print("\n-- add_copies")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 2)
check('add_copies("b1",3) returns new total', lib.add_copies("b1", 3), 5)
check('available_copies("b1")', lib.available_copies("b1"), 5)
check('add_copies("b1",1) returns new total', lib.add_copies("b1", 1), 6)
check('add_copies("ghost",4)', lib.add_copies("ghost", 4), None)

print("\n-- borrow decrements availability")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 2)
check('borrow("m1","b1")', lib.borrow("m1", "b1"), True)
check('available_copies("b1")', lib.available_copies("b1"), 1)
check('borrow("m2","b1")', lib.borrow("m2", "b1"), True)
check('available_copies("b1")', lib.available_copies("b1"), 0)

print("\n-- borrow fails when shelf is empty")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 1)
check('borrow("m1","b1")', lib.borrow("m1", "b1"), True)
check('borrow("m2","b1") no copies left', lib.borrow("m2", "b1"), False)
check('available_copies("b1")', lib.available_copies("b1"), 0)

print("\n-- same member cannot hold two copies of one book")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 5)
check('borrow("m1","b1")', lib.borrow("m1", "b1"), True)
check('borrow("m1","b1") again', lib.borrow("m1", "b1"), False)
check('available_copies("b1")', lib.available_copies("b1"), 4)

print("\n-- borrow unknown book")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 1)
check('borrow("m1","ghost")', lib.borrow("m1", "ghost"), False)

print("\n-- return_book")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 1)
check('borrow("m1","b1")', lib.borrow("m1", "b1"), True)
check('available_copies("b1")', lib.available_copies("b1"), 0)
check('return_book("m1","b1")', lib.return_book("m1", "b1"), True)
check('available_copies("b1")', lib.available_copies("b1"), 1)
check('return_book("m1","b1") twice', lib.return_book("m1", "b1"), False)

print("\n-- return without borrowing")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 2)
lib.borrow("m1", "b1")
check('return_book("m2","b1") never borrowed', lib.return_book("m2", "b1"), False)
check('return_book("m1","ghost") unknown book', lib.return_book("m1", "ghost"), False)
check('available_copies("b1")', lib.available_copies("b1"), 1)

print("\n-- borrow again after returning")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 1)
check('borrow("m1","b1")', lib.borrow("m1", "b1"), True)
check('return_book("m1","b1")', lib.return_book("m1", "b1"), True)
check('borrow("m1","b1") again', lib.borrow("m1", "b1"), True)
check('available_copies("b1")', lib.available_copies("b1"), 0)

print("\n-- add_copies returns TOTAL, not available")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 1)
check('borrow("m1","b1")', lib.borrow("m1", "b1"), True)
check('available_copies("b1")', lib.available_copies("b1"), 0)
check('add_copies("b1",2) -> total 3', lib.add_copies("b1", 2), 3)
check('available_copies("b1") -> 2', lib.available_copies("b1"), 2)
check('return_book("m1","b1")', lib.return_book("m1", "b1"), True)
check('available_copies("b1") -> 3', lib.available_copies("b1"), 3)

print("\n-- one member holding several books")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 1)
lib.add_book("b2", "Emma", "Austen", 1)
lib.add_book("b3", "Ulysses", "Joyce", 1)
check('borrow("m1","b1")', lib.borrow("m1", "b1"), True)
check('borrow("m1","b2")', lib.borrow("m1", "b2"), True)
check('borrow("m1","b3")', lib.borrow("m1", "b3"), True)
check('available_copies("b1")', lib.available_copies("b1"), 0)
check('available_copies("b2")', lib.available_copies("b2"), 0)
check('available_copies("b3")', lib.available_copies("b3"), 0)
check('return_book("m1","b2")', lib.return_book("m1", "b2"), True)
check('available_copies("b1")', lib.available_copies("b1"), 0)
check('available_copies("b2")', lib.available_copies("b2"), 1)
check('available_copies("b3")', lib.available_copies("b3"), 0)

print("\n-- several members, independent holds")
lib = LibrarySystem()
lib.add_book("b1", "Dune", "Herbert", 3)
check('borrow("m1","b1")', lib.borrow("m1", "b1"), True)
check('borrow("m2","b1")', lib.borrow("m2", "b1"), True)
check('borrow("m3","b1")', lib.borrow("m3", "b1"), True)
check('borrow("m4","b1") shelf empty', lib.borrow("m4", "b1"), False)
check('return_book("m2","b1")', lib.return_book("m2", "b1"), True)
check('available_copies("b1")', lib.available_copies("b1"), 1)
check('borrow("m4","b1") now works', lib.borrow("m4", "b1"), True)
check('available_copies("b1")', lib.available_copies("b1"), 0)

print("\n-- same title/author, different ids do not collide")
lib = LibrarySystem()
check('add_book("b1","Dune","Herbert",1)', lib.add_book("b1", "Dune", "Herbert", 1), True)
check('add_book("b2","Dune","Herbert",2)', lib.add_book("b2", "Dune", "Herbert", 2), True)
check('borrow("m1","b1")', lib.borrow("m1", "b1"), True)
check('available_copies("b1")', lib.available_copies("b1"), 0)
check('available_copies("b2")', lib.available_copies("b2"), 2)

print(f"\n{'=' * 46}\n{_p} passed, {_f} failed  ({_p + _f} checks)\n")
