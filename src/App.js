import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";

import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
