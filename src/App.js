// import logo from "./logo.svg";
// import './App.css';
import { useState } from "react";
import BookList from "./components/Books/BookList/BookList";
import BookForm from "./components/Books/BooksForm/BookForm";

import Profile from "./components/Profile/Show";
import AddProfile from "./components/Profile/Add";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";

// fragments
function App() {
  const [name, setName] = useState("Raj");
  const [age, setAge] = useState("31");
  const [loc, setLoc] = useState("Chennai");
  const [editData, setEditData] = useState({});

  // let array = [
  //   {
  //     bookName: "You live only once",
  //     bookPrice: 154,
  //     bookAuthor: "Maxine",
  //     id: "13",
  //   },
  //   {
  //     bookName: "Harry Portor",
  //     bookPrice: 150,
  //     bookAuthor: "Maxine",
  //     id: "21",
  //   },
  //   {
  //     bookName: "Ninja",
  //     bookPrice: 104,
  //     bookAuthor: "Maxine",
  //     id: "32",
  //   },
  // ];
  // const [arrayVal, setArrayVal] = useState([]);

  // const getBookDetails = (bookData) => {
  //   setArrayVal([...arrayVal, bookData]);
  // };

  const getProfileFromChild = (data) => {
    setName(data.name);
    setAge(data.age);
    setLoc(data.loc);
  };

  const getEditData = (data) => {
    const { name, age, loc } = data;
    setEditData({ name: name, age: age, loc: loc });
  };

  const getDeleteData = () => {
    setName("");
    setAge("");
    setLoc("");
  };

  return (
    <>
    <Dashboard />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <h1>Welcome to tutorial</h1>
          }
        ></Route>
        <Route
          path="/add"
          exact
          element={
            <AddProfile dataToEdit={editData} profileFn={getProfileFromChild} />
          }
        ></Route>
        <Route
          path="/profile"
          exact
          element={
            <Profile
              deleteFn={getDeleteData}
              editFn={getEditData}
              name={name}
              age={age}
              loc={loc}
            />
          }
        ></Route>
      </Routes>
      

      {/* <div>Books</div> */}

      {/* <BookForm bookFn={getBookDetails} /> */}
      {/* <BookList bookName="You live only once" bookPrice="154" bookAuthor="Maxine" />
      <BookList bookName="Harry Portor" bookPrice="150" bookAuthor="Maxine" />
      <BookList bookName="Ninja" bookPrice="104" bookAuthor="Maxine" /> */}
      {/*<div className="container text-center">
        <div className="row">
           {arrayVal.map((book, index) => {
            return (
              <BookList
                key={book.id}
                bookName={book.bookName}
                bookPrice={book.bookPrice}
                bookAuthor={book.bookAuthor}
              />
            );
          })}
        </div>
      </div> */}
      {/* <BookList
        bookName={array[1].bookName}
        bookPrice={array[1].bookPrice}
        bookAuthor={array[1].bookAuthor}
      />
      <BookList
        bookName={array[2].bookName}
        bookPrice={array[2].bookPrice}
        bookAuthor={array[2].bookAuthor}
      /> */}
    </>
  );
}

export default App;
