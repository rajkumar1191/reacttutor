const BookList = (props) => {
    // console.log(props)
  let bookName = "You live only once";
  let bookPrice = 154;
  let bookAuthor = "Maxine";

  return (
    <>
      <div className="col-lg-4">
        <h1>{props.bookName}</h1>
        <h3>{props.bookPrice}</h3>
        <h5>{props.bookAuthor}</h5>
      </div>
    </>
  );
};

export default BookList;
