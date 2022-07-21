import Singlebook from "./singlebook";
import Forms from "./forms";


const Books = () => (
  <section className="booklist">
    <div className="bookline">
      <Singlebook
        title="Sapiens: A Brief History of Humankind"
        author="Yuval Noah Harari"
        categories="History, Science, Philosophy"
      />
    </div>
    <div className="bookline">
      <Singlebook
        title="Thinking, Fast and Slow"
        author="Daniel Kahneman"
        categories=" Science, Psicology"
      />
    </div>
    <div className="bookline">
      <Singlebook
        title="Meditations"
        author="Marcus Aurelius y Gregory Hays"
        categories="History, Science, Philosophy"
      />
    </div>

    <Forms />

  </section>
)

export default Books;