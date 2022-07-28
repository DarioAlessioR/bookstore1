import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => (state.categoriesReducer.status));

  const check = () => {
    dispatch(checkStatus());
  };

  return (
    <section className="categories">
      <button type="button" onClick={check}>Check status</button>
      <h2>{status}</h2>
    </section>
  );
};

export default Categories;

/* Code used for fetching the API to get the app Id (to create account):
const postId = async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/', {
    method: 'POST',
  });
  const data = await response.text();
  console.log(data);
  return data;
};
postId();

Id retorned for Dario Alessio project:
id = dlfFL7qUFyyxQFXdVAYi
*/
