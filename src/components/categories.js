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
