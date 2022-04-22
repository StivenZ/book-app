import { createAction } from "@reduxjs/toolkit"

type BookTypes = {
  name: string,
  id: number
};

export const addBook = createAction<BookTypes>("addBook");
export const deleteBook = createAction<BookTypes>("deleteBook");