const CHECKED_STATUS = 'USER_CHECKED_CATEGORIES_STATUS';
const initialState = [];

const explanation = (
  <div className="categories">
    <p>Novel: a fictitious prose narrative of book length, typically representing</p>
    <p>   character and action with some degree of realism.</p>
    <hr />
    <p>Essay: a short piece of writing on a particular subject.</p>
    <hr />
    <p>Adventure: an exciting or very unusual experience.</p>
    <hr />
    <p>Biography: an account of the series of events making up the life of a person.</p>
    <hr />
    <p>History: the study of the past as it is described in written documents.</p>
    <hr />
    <p>Horror: a genre of fiction which is intended to, or has the capacity to frighten.</p>
    <hr />
    <p>Science Fiction: a genre of speculative fiction dealing with imaginative concepts</p>
    <p>  such as futuristic science and technology, space travel, time travel,</p>
    <p>  parallel universes, and extraterrestrial life.</p>
    <hr />
    <p>Learning: a book or other printed work containing information, instructions,</p>
    <p>   etc., as on a particular subject, for the purpose of study or reference.</p>
    <hr />
    <p>Self-Help: a book or other printed work containing information, instructions,</p>
    <p>   etc., as on a particular subject, for the purpose of study or reference.</p>
  </div>
);

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return { status: explanation };
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECKED_STATUS,
});

export default categoriesReducer;
