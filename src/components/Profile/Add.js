import { useState, useEffect, useRef, useMemo } from "react";
import ErrorModal from './../ErrorModal/ErrorModal';

const AddProfile = (props) => {

  const nameRef = useRef();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loc, setLoc] = useState("");
  const [error, setError] = useState(false);

  const nameHandler = (event) => {
    console.log(nameRef.current.value)
    if(!event.target.value.trim()){
      setError(true)
    }
    setName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const locHandler = (event) => {
    setLoc(event.target.value);
  };

  useEffect(() => {
    setName(props.dataToEdit.name);
    setAge(props.dataToEdit.age);
    setLoc(props.dataToEdit.loc);
  }, [props.dataToEdit.name, props.dataToEdit.age, props.dataToEdit.loc]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.profileFn({ name: name, age: age, loc: loc });
    setName("");
    setAge("");
    setLoc("");
  };

  return (
    <>
      <h2>Add Profile Details</h2>
      <form onSubmit={submitHandler}>
        {error && <ErrorModal errorMgs="Please enter the name" />}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          ref={nameRef}
          onChange={nameHandler}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Age"
          value={age}
          onChange={ageHandler}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Location"
          value={loc}
          onChange={locHandler}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddProfile;
