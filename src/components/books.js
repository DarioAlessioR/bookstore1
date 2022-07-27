import { useSelector } from 'react-redux';
import Singlebook from './singlebook';
import Forms from './forms';

const Books = () => {
  const bookList = useSelector((state) => state.bookReducer);

  return (
    <section className="booklist">
      <div className="bookline">
        {bookList.map((book) => (
          <Singlebook
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            categories={book.category}
          />
        ))}
      </div>

      <Forms />

    </section>
  );
};

export default Books;
