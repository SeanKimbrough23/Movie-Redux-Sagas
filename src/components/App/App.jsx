import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import AddMovies from "../AddMovies/AddMovies";
import NavigationBar from "../NavigationBar/NavigationBar";
import EditMoviePage from "../EditMoviePage/EditMoviePage";
import MovieDetails from "../MovieDetails/MovieDetails";
import Calendar from "../Calendar/Calendar";
import RequestMovie from "../RequestMovie/RequestMovie";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/Request">
          <RequestMovie />
        </Route>

        {/* Details page */}
        <Route path="/details/:id">
          <MovieDetails />
        </Route>
        {/* Add a Movie Page */}
        <Route path="/addMovie">
          <AddMovies />
        </Route>
        {/* Edit page */}
        <Route path="/edit/:id">
          <EditMoviePage />
        </Route>
        <Route path="/Calendar">
          <Calendar />
        </Route>
      </Router>
    </div>
  );
}

export default App;
