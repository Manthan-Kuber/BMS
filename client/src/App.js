import logo from "./logo.svg";
import "./App.css";
import Home from "./components/HomeComponent";
import LogIn from "./components/LogInComponent";
import SignUp from "./components/SignUpComponent";
import Main from "./components/MainComponent";
import {
  BrowserRouter,
  Switch,
  Router,
  Redirect,
  Route,
} from "react-router-dom";

function App() {
  return (
        <Main />
  );
}


export default App;
