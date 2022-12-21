// import { Router } from "react-router"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login.js"
import Header from "./components/Header.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>  
        <Header/>
      </Router>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
