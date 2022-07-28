/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Singlebook = ({
  title,
  author,
  category,
  id,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    e.preventDefault();
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">

      <div className="book">
        <p className="category">{category}</p>
        <h2 className="bookname">{title}</h2>
        <h3 className="authorname">{author}</h3>
        <div className="acctionbuttons">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemoveBook}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="bookstatus">
        <i className="fa-solid fa-spinner" />
        <h4>75% completed</h4>
      </div>

      <div className="bookchapter">
        <h4>Current chapter:</h4>
        <h5>Chapter: 7</h5>
        <button type="button" className="progress">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

export default Singlebook;
