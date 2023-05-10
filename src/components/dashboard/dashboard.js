import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div>
        <h2>Dashboard</h2>

        <div className="card-footer text-body-secondary">
          <Link to="/">Dashboard</Link>
        </div>
        <div className="card-footer text-body-secondary">
          <Link to="/add">Add</Link>
        </div>
        <div className="card-footer text-body-secondary">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="card-footer text-body-secondary">
          <Link to="/gallery">Gallery</Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
