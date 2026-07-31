"""LEVEL 1 test suite.  Run:  python3 test_level1.py"""

import traceback

from library_system import LibrarySystem

TESTS = []


def test(fn):
    TESTS.append(fn)
    return fn


@test
def test_add_book_basic():
    lib = LibrarySystem()
    assert lib.add_book("b1", "Dune", "Herbert", 3) is True
    assert lib.add_book("b2", "Emma", "Austen", 1) is True
    assert lib.add_book("b1", "Something Else", "Nobody", 5) is False
    assert lib.available_copies("b1") == 3
    assert lib.available_copies("b2") == 1


@test
def test_add_book_rejects_nonpositive_copies():
    lib = LibrarySystem()
    assert lib.add_book("b1", "Dune", "Herbert", 0) is False
    assert lib.add_book("b1", "Dune", "Herbert", -2) is False
    assert lib.available_copies("b1") is None
    assert lib.add_book("b1", "Dune", "Herbert", 1) is True
    assert lib.available_copies("b1") == 1


@test
def test_available_copies_unknown_book():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 3)
    assert lib.available_copies("ghost") is None


@test
def test_add_copies():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 2)
    assert lib.add_copies("b1", 3) == 5
    assert lib.available_copies("b1") == 5
    assert lib.add_copies("b1", 1) == 6
    assert lib.add_copies("ghost", 4) is None


@test
def test_borrow_decrements_availability():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 2)
    assert lib.borrow("m1", "b1") is True
    assert lib.available_copies("b1") == 1
    assert lib.borrow("m2", "b1") is True
    assert lib.available_copies("b1") == 0


@test
def test_borrow_fails_when_none_available():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 1)
    assert lib.borrow("m1", "b1") is True
    assert lib.borrow("m2", "b1") is False
    assert lib.available_copies("b1") == 0


@test
def test_borrow_same_book_twice_by_same_member():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 5)
    assert lib.borrow("m1", "b1") is True
    assert lib.borrow("m1", "b1") is False
    assert lib.available_copies("b1") == 4


@test
def test_borrow_unknown_book():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 1)
    assert lib.borrow("m1", "ghost") is False


@test
def test_return_book():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 1)
    assert lib.borrow("m1", "b1") is True
    assert lib.available_copies("b1") == 0
    assert lib.return_book("m1", "b1") is True
    assert lib.available_copies("b1") == 1
    assert lib.return_book("m1", "b1") is False


@test
def test_return_without_borrowing():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 2)
    lib.borrow("m1", "b1")
    assert lib.return_book("m2", "b1") is False
    assert lib.return_book("m1", "ghost") is False
    assert lib.available_copies("b1") == 1


@test
def test_borrow_again_after_returning():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 1)
    assert lib.borrow("m1", "b1") is True
    assert lib.return_book("m1", "b1") is True
    assert lib.borrow("m1", "b1") is True
    assert lib.available_copies("b1") == 0


@test
def test_add_copies_counts_total_not_available():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 1)
    assert lib.borrow("m1", "b1") is True
    assert lib.available_copies("b1") == 0
    assert lib.add_copies("b1", 2) == 3
    assert lib.available_copies("b1") == 2
    assert lib.return_book("m1", "b1") is True
    assert lib.available_copies("b1") == 3


@test
def test_member_holds_several_books():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 1)
    lib.add_book("b2", "Emma", "Austen", 1)
    lib.add_book("b3", "Ulysses", "Joyce", 1)
    assert lib.borrow("m1", "b1") is True
    assert lib.borrow("m1", "b2") is True
    assert lib.borrow("m1", "b3") is True
    assert lib.available_copies("b1") == 0
    assert lib.available_copies("b2") == 0
    assert lib.available_copies("b3") == 0
    assert lib.return_book("m1", "b2") is True
    assert lib.available_copies("b1") == 0
    assert lib.available_copies("b2") == 1
    assert lib.available_copies("b3") == 0


@test
def test_two_members_independent_holds():
    lib = LibrarySystem()
    lib.add_book("b1", "Dune", "Herbert", 3)
    assert lib.borrow("m1", "b1") is True
    assert lib.borrow("m2", "b1") is True
    assert lib.borrow("m3", "b1") is True
    assert lib.borrow("m4", "b1") is False
    assert lib.return_book("m2", "b1") is True
    assert lib.available_copies("b1") == 1
    assert lib.borrow("m4", "b1") is True
    assert lib.available_copies("b1") == 0


@test
def test_titles_and_authors_do_not_collide():
    lib = LibrarySystem()
    assert lib.add_book("b1", "Dune", "Herbert", 1) is True
    assert lib.add_book("b2", "Dune", "Herbert", 2) is True
    assert lib.borrow("m1", "b1") is True
    assert lib.available_copies("b1") == 0
    assert lib.available_copies("b2") == 2


def main():
    passed = 0
    for fn in TESTS:
        try:
            fn()
        except Exception:
            print(f"FAIL  {fn.__name__}")
            print("      " + traceback.format_exc().strip().replace("\n", "\n      "))
        else:
            passed += 1
            print(f"pass  {fn.__name__}")
    print(f"\n{passed}/{len(TESTS)} passed")


if __name__ == "__main__":
    main()
