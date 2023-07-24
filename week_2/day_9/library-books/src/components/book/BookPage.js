import React, { useState, useEffect } from "react";

// Model imports
import { Book } from "../../models/book";

// Component imports
import BookForm from "./BookForm";
import BookTable from "./BookTable";

// Service imports
import BookService from "../../services/book-service";

export default function BookPage() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const books = await BookService.fetchBook();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreated(book) {
    setBookToEdit(null);

    const createdBook = await BookService.createBook(book);

    setBooks([...books, createdBook]);
  }

  async function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
    await BookService.deleteBook(book.id);
  }

  function onBookEdit(book) {
    setBookToEdit(book);
  }

  async function onBookUpdate(updatedBook) {
    const updated = await BookService.updateBook(updatedBook);
    const updatedBooks = books.map((book) =>
      book.id === updated.id ? updated : book
    );
    setBooks(updatedBooks);
    setBookToEdit(null);
  }
  return (
    <div className="m-5">
      <div className="card p-4">
        <BookForm
          onBookCreated={onBookCreated}
          bookToEdit={bookToEdit}
          onBookUpdate={onBookUpdate}
        />
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        />
      </div>
    </div>
  );
}
