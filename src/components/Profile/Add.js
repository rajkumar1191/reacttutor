import { useState, useEffect, useRef, useReducer } from "react";
import ErrorModal from "./../ErrorModal/ErrorModal";

const ageReducer = (state, action) => {
  if (action?.type === "INPUT_CHANGE") {
    return {
      value: action.value,
      isValid: parseInt(action.value) > 18 ? true : false,
    };
  }

  if (action?.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: parseInt(state.value) > 18 ? true : false,
    };
  }

  return {
    value: 0,
    isValid: false,
  };
};

const AddProfile = (props) => {

  console.log(props)
  const nameRef = useRef();

  const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [ageValid, setAgeValid] = useState(false);

  const [ageState, dispatchAge] = useReducer(ageReducer, {
    value: 0,
    isValid: false,
  });

  const [loc, setLoc] = useState("");
  const [error, setError] = useState(false);
  const [errorMgs, setErrorMgs] = useState("");

  const nameHandler = (event) => {
    console.log(nameRef.current.value);

    setName(event.target.value);
  };
  const ageHandler = (event) => {
    dispatchAge({ value: event.target.value, type: "INPUT_CHANGE" });
    // setAge(event.target.value);
  };

  const ageValidHandler = () => {
    // parseInt(event.target.value) > 18 ? setAgeValid(true) : setAgeValid(false);
    dispatchAge({ type: "INPUT_BLUR" });
  };

  const locHandler = (event) => {
    setLoc(event.target.value);
  };

  useEffect(() => {
    setName(props.dataToEdit.name);
    dispatchAge({ value: props.dataToEdit.age, type: "INPUT_CHANGE" });
    setLoc(props.dataToEdit.loc);
  }, [props.dataToEdit.name, props.dataToEdit.age, props.dataToEdit.loc]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!name) {
      setError(true);
      setErrorMgs("Please enter the name");
    } else if (!ageState.value) {
      setError(true);
      setErrorMgs("Please enter age");
    } else if (!loc) {
      setError(true);
      setErrorMgs("Please enter the location");
    } else {
      let obj = { name: name, age: ageState.value, loc: loc };
      // props.profileFn({ name: name, age: ageState.value, loc: loc });
      fetchPhotosHandler(obj);
      setName("");
      dispatchAge();
      setLoc("");
    }
  };

  const fetchPhotosHandler = (data) => {
    fetch("https://arasee-2db37-default-rtdb.firebaseio.com/contacts.json", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };

  const closeModalHandler = () => {
    setError(false);
    setErrorMgs("");
  };

  return (
    <>
      <h2>Add Profile Details</h2>
      <form onSubmit={submitHandler}>
        {error && (
          <ErrorModal errorMgs={errorMgs} onclickEvt={closeModalHandler} />
        )}
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
          value={ageState.value}
          onChange={ageHandler}
          onBlur={ageValidHandler}
          style={{
            border: ageState.isValid ? "3px solid green" : "3px solid red",
          }}
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
