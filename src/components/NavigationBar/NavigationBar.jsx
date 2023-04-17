import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { HashRouter as Router, Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <h2 className="nav-title">Home</h2>
          <Router>
            <Link to="/" style={{ textDecoration: "none", color: "yellow" }}>
              <Button variant="inherit">Movie List</Button>
            </Link>
          </Router>
          <Router>
            <Link
              to="/addMovie"
              style={{ textDecoration: "none", color: "yellow" }}
            >
              <Button variant="inherit">Add Movie</Button>
            </Link>
          </Router>
          <Router>
            <Link
              to="/Calendar"
              style={{ textDecoration: "none", color: "yellow" }}
            >
              <Button variant="inherit">Calendar</Button>
            </Link>
            <Router>
              <Link
                to="/Request"
                style={{ textDecoration: "none", color: "yellow" }}
              >
                <Button variant="inherit">Request Movie</Button>
              </Link>
            </Router>
          </Router>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
