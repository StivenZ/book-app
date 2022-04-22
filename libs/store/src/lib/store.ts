import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./modules/books/bookReducers";

export const store = configureStore({
  reducer: { books: bookReducer }
});