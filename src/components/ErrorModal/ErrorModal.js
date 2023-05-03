const ErrorModal = (props) => {
  return (
    <>
      <div>
        <h2>Error</h2>

        <div className="card-footer text-body-secondary" style={{color:'red'}}>{props.errorMgs}</div>
      </div>
    </>
  );
};

export default ErrorModal;
