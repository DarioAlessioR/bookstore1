const CHECKED_STATUS = 'USER_CHECKED_CATEGORIES_STATUS';
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return { status: 'Under construction...' };
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECKED_STATUS,
});

export default categoriesReducer;
