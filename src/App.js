import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

// react-router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Components
import Home from "./pages/Home";
import Pagenotfound from "./pages/Pagenotfound";
import Signin from "./pages/Signin";
import Signup from "./pages/Singup";

import FirebaseConfig from "./Config/FirebaseConfig";

// User Context
import { UserContext } from "./Context/UserContext";

// Header and Footer
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

// initialize firbase
firebase.initializeApp(FirebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
