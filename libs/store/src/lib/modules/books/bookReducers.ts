import { createReducer } from "@reduxjs/toolkit";
import { addBook, deleteBook } from "./bookActions";

type BookType = {
  name: string
  id: number
};

type BookProp = {
  books: BookType[]
};

const initialState: BookProp = {
  books: []
};

export const bookReducer = createReducer(initialState, (builder) => {
  builder.addCase(addBook, (state, action) => {
    state.books.push(action.payload);
  })
  .addCase(deleteBook, (state, action) => {
    state.books = state.books.filter((book) => book.id !== action.payload.id);
  });
})