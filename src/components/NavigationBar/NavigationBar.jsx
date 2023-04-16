import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { HashRouter as Router, Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <h2 className="nav-title">Home</h2>
          <Router>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Button variant="inherit">Movie List</Button>
            </Link>
          </Router>
          <Router>
            <Link
              to="/addMovie"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button variant="inherit">Add Movie</Button>
            </Link>
          </Router>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;