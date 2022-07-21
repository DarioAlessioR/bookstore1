const Forms = () => (
  <section className="form">
    <h2>ADD NEW BOOK</h2>
    <div className="formcontainer">
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Author" required />
      <button type="button">Add book</button>
    </div>
  </section>
);

export default Forms;
