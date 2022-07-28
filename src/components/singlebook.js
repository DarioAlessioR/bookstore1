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
        <div className="actionbuttons">
          <button type="button" className="comment">Comments</button>
          <button type="button" className="remove" onClick={handleRemoveBook}>Remove</button>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>

      <div className="bookstatus">
        <div className="iconspinner">
          <i className="fa-solid fa-circle-notch" />
        </div>
        <div className="progress">
          <h4>96%</h4>
          <p>Completed</p>
        </div>
      </div>

      <div className="bookchapter">
        <h4>CURRENT CHAPTER:</h4>
        <h5>Chapter: 7</h5>
        <button type="button" className="progressbutton">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

export default Singlebook;

/*
<i class="fa-solid fa-circle-notch"></i>
<i className="fa-solid fa-spinner" />
*/
