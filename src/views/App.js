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
import Child from "./example/Child";
import AddComponent from "./example/AddComponent";
import ListUsers from "./user/ListUsers";
import DetailUser from "./user/DetailUser";
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
          <Route path="/about">
            <AddComponent />
          </Route>
          <Route path="/user" exact>
            <ListUsers />
          </Route>
          <Route path="/user/:id">
            <DetailUser />
          </Route>
          {/* <Route path="/job">
            <Child />
          </Route> */}
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
