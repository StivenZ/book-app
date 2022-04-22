import React from 'react';
import { useSelector } from "react-redux"

const Library = () => {

  const deleteBookHandler = (id: number) => {
    //
  }

  const books = useSelector((state: any) => state.books.books);

  const booksTable = books.map((book: any) => (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.rating}</td>
    </tr>
  ))

  return (
    <div className='library'>
      <h2>Library</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
          <th></th>
        </tr>
        <tr>
          <td>Dune</td>
          <td>F. Herbert</td>
          <td>10</td>
          <td>
            <button className='delete'>x</button>
          </td>
        </tr>
        {booksTable}
      </table>
    </div>
  );
};

export default Library;