const ADDED_BOOK = 'USER_ADDED_BOOK';
const REMOVED_BOOK = 'USER_REMOVED_BOOK';
const initialState = [];

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
