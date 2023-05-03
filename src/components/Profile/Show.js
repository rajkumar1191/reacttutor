import style from "./Show.module.css";
import style1 from "./Add.module.css";

const Profile = (props) => {
  const editHandler = () => {
    props.editFn(props);
  };

  const deleteHandler = () => {
    props.deleteFn();
  };

  return (
    <>
      <div
        className={`card ${
          parseInt(props.age) > 40 ? style.card : style1.card
        }`}
      >
        <h2>Profile Details</h2>
        <div className="card-body">
          <h4>Name: {props.name}</h4>
          <h4>
            Age:{" "}
            <span
              style={{ color: parseInt(props.age) > 40 ? "green" : "orange" }}
            >
              {" "}
              {props.age}
            </span>
          </h4>
          <h4>Location: {props.loc}</h4>
        </div>

        <div className="card-footer text-body-secondary">
          <button className="btn btn-primary" onClick={editHandler}>
            Edit Profile
          </button>
          <button className="btn btn-danger" onClick={deleteHandler}>
            Delete Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
