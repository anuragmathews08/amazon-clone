import React, { useEffect } from "react";
import "./App.css";

import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Checkout from "./component/Checkout/Checkout";
import Login from "./component/Login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./Store/StateProvider";
import { auth } from "./firebase";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }

  }, [dispatch]);
  

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
