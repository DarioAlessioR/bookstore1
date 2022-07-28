import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

const Form = () => {
  const initialFormState = {
    title: '',
    author: '',
    category: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: [e.target.value],
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    const newBook = {
      key: uuidv4(),
      id: uuidv4(),
      title: formState.title[0],
      author: formState.author[0],
      category: formState.category[0],
    };

    dispatch(postBook(newBook));
  };

  return (
    <form onSubmit={submitBookToStore} className="form-container">
      <h2>ADD NEW BOOK</h2>
      <div className="form-input">
        <input
          name="title"
          type="text"
          onChange={handleChange}
          placeholder="Book Title"
          required
        />
        <input
          name="author"
          type="text"
          onChange={handleChange}
          placeholder="Book Author"
          required
        />
        <select
          name="category"
          id="categories"
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="Novel">Novel</option>
          <option value="Essay">Essay</option>
          <option value="History">History</option>
          <option value="Biography">Biography</option>
          <option value="Litterature">Litterature</option>
        </select>

        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
