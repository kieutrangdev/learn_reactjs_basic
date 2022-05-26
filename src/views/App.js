import React  from "react";
import "./App.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListToDo from "./todos/ListToDo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./nav/Nav";
import Home from "./example/Home";
function App() {
  return (
   <Router>
    <div className="App">
      <Nav/>
      <header className="App-header">
       
       
    
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />


    <Switch>
          <Route path="/todo">
            <ListToDo />
          </Route>
          
          <Route path="/" exact >
            <Home />
          </Route>
        </Switch>
       
   
    </header>
    </div>
    </Router>
  );
}

export default App;
