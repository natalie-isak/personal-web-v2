"""
INTERFACE — copy these method signatures into your solution and fill in the bodies.

Implement everything in this file. The test suites import `LibrarySystem` from here.
"""


class LibrarySystem:
    """A toy library lending system."""

    # ------------------------------------------------------------------
    # LEVEL 1
    # ------------------------------------------------------------------

    def add_book(self, book_id: str, title: str, author: str, copies: int) -> bool:
        """Register a new book in the catalog holding `copies` physical copies.

        Returns True if the book was added.
        Returns False if `book_id` is already in the catalog, or if `copies < 1`
        (in which case nothing is added).
        """
        raise NotImplementedError

    def add_copies(self, book_id: str, count: int) -> int:
        """Add `count` more physical copies of an existing book.

        `count` is always >= 1.
        Returns the new TOTAL number of copies of that book (borrowed + on shelf),
        or None if `book_id` is not in the catalog.
        """
        raise NotImplementedError

    def available_copies(self, book_id: str) -> int:
        """Return how many copies of `book_id` are currently on the shelf
        (total copies minus copies currently checked out).

        Returns None if `book_id` is not in the catalog.
        """
        raise NotImplementedError

    def borrow(self, member_id: str, book_id: str) -> bool:
        """Check out one copy of `book_id` to `member_id`.

        Returns True on success.
        Returns False if the book is not in the catalog, if no copy is currently
        available, or if this member already has a copy of this book checked out.
        Members are created implicitly the first time they appear.
        """
        raise NotImplementedError

    def return_book(self, member_id: str, book_id: str) -> bool:
        """Return the copy of `book_id` that `member_id` has checked out.

        Returns True on success.
        Returns False if the book is not in the catalog or if this member does not
        currently have a copy of it checked out.
        """
        raise NotImplementedError
