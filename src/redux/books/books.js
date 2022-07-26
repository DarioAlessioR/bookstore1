const ADDED_BOOK = 'USER_ADDED_BOOK';
const REMOVED_BOOK = 'USER_REMOVED_BOOK';
const initialState = [
  {
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    categories: 'History, Science, Philosophy',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    categories: ' Science, Psicology',
  },
  {
    title: 'Meditations',
    author: 'Marcus Aurelius y Gregory Hays',
    categories: 'History, Science, Philosophy',
  }];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [...state, action.payload];

    case REMOVED_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

const addBook = (payload) => ({
  type: ADDED_BOOK,
  payload,
});

const removeBook = (id) => ({
  type: REMOVED_BOOK,
  id,
});

export default { bookReducer, addBook, removeBook };
