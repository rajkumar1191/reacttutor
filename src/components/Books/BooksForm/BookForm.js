import { useState } from "react";
import "./BookForm.css";

const BookForm = (props) => {
  // let bookName = "";
  // let bookPrice = 0;
  // let bookAuthor = "";

  const [bookName, setBookName] = useState("");
  const [bookPrice, setBookPrice] = useState(0);
  const [bookAuthor, setBookAuthor] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [priceErrorMessage, setPriceErrorMessage] = useState("");
  const [authorErrorMessage, setAuthorErrorMessage] = useState("");

  const nameHandler = (event) => {
    setBookName(event.target.value);
  };

  const priceHandler = (event) => {
    setBookPrice(parseInt(event.target.value));
  };

  const authorHandler = (event) => {
    setBookAuthor(event.target.value);
  };

  const nameBlurHandler = (event) => {
    if (!event.target.value) {
      setNameErrorMessage("Please enter book name");
    } else {
      setNameErrorMessage("");
    }
  };

  const priceBlurHandler = (event) => {
    if (!event.target.value) {
      setPriceErrorMessage("Please enter book price");
    } else {
      setPriceErrorMessage("");
    }
  };

  const authorBlurHandler = (event) => {
    if (!event.target.value) {
      setAuthorErrorMessage("Please enter book author");
    } else {
      setAuthorErrorMessage("");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!bookName) {
      setNameErrorMessage("Please enter book name");
      return false;
    } else {
      setNameErrorMessage("");
    }
    if (!bookPrice && (bookPrice === 0 || bookPrice === "0")) {
      setPriceErrorMessage("Please enter book price");
      return false;
    } else {
      setPriceErrorMessage("");
    }
    if (!bookAuthor) {
      setAuthorErrorMessage("Please enter book author");
      return false;
    } else {
      setAuthorErrorMessage("");
    }

    const bookDataObj = {
      bookName: bookName,
      bookPrice: bookPrice,
      bookAuthor: bookAuthor,
      id: Math.random(),
    };

    props.bookFn(bookDataObj);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={nameHandler}
          onBlur={nameBlurHandler}
        />
        <span className="error">{nameErrorMessage}</span>
        <br />
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          onChange={priceHandler}
          onBlur={priceBlurHandler}
        />
        <span className="error">{priceErrorMessage}</span>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Author Name"
          onChange={authorHandler}
          onBlur={authorBlurHandler}
        />
        <span className="error">{authorErrorMessage}</span>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
