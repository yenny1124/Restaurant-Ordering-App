import "./booktable.css";

export default function BookTable() {
  return (
    <main className="book-table-page">
      <div className="book-table-content">
        <form className="book-table-form">
          <div>
            <label className="book-table-input-label" htmlFor="phoneNumber">
              Phone Number
              <br />
            </label>
            <input
              type="text"
              className="book-table-input"
              id="phoneNumber"
            ></input>
          </div>
          <div>
            <label className="book-table-input-label">
              Email
              <br />
            </label>
            <input type="text" className="book-table-input"></input>
          </div>
          <div>
            <label className="book-table-input-label">
              Party Size
              <br />
            </label>
            <input type="number" className="book-table-input"></input>
          </div>
          <div>
            <label className="book-table-input-label">
              Date
              <br />
            </label>
            <input type="date" className="book-table-input"></input>
          </div>
          <div>
            <label className="book-table-input-label">
              Time
              <br />
            </label>
            <input type="time" className="book-table-input"></input>
          </div>
          <input type="submit" className="submit-button"></input>
        </form>
      </div>
      <div className="book-table-content">
        Google Maps embed or some image content should go here
      </div>
    </main>
  );
}
