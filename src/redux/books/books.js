const ADDED_BOOK = 'USER_ADDED_BOOK';
const REMOVED_BOOK = 'USER_REMOVED_BOOK';
const initialState = [
  {
    key: '1',
    id: '1',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    categories: 'History, Science, Philosophy',
  },
  {
    key: '2',
    id: '2',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    categories: ' Science, Psicology',
  },
  {
    key: '3',
    id: '3',
    title: 'Meditations',
    author: 'Marcus Aurelius & Gregory Hays',
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

export const addBook = (payload) => ({
  type: ADDED_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVED_BOOK,
  id,
});

export default bookReducer;
