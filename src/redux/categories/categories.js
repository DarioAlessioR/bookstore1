const CHECKED_STATUS = 'USER_CHECKED_CATEGORIES_STATUS';
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return 'Under construction...';
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: CHECKED_STATUS,
});

export default { categoriesReducer, checkStatus };