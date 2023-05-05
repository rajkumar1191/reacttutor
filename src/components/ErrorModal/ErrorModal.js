import "./ErrorModal.css";
import ReactDOM from "react-dom";

const ErrorModal = (props) => {
  const onClickHandler = () => {
    props.onclickEvt();
  };
  /* create portal */

  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="dialog">
        <button
          type="button"
          class="btn-close float-end"
          aria-label="Close"
          onClick={onClickHandler}
        ></button>
        <h2>Error</h2>
        <div style={{ color: "red" }}>{props.errorMgs}</div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ErrorModal;
