import React from "react";
import Signup from "./Signup";
import Dashboard from "./Dashboard"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import PrivateRoute from "./PrivateRoute"



function App() {
  // console.log(process.env.);
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
              </Route>
              <Route exact path="/update-profile" element={<PrivateRoute />}>
                <Route exact path="/update-profile" element={<UpdateProfile />} />
              </Route>
              {/* NEVER USE PRIVATE ROUTE LIKE THIS BELOW */}
              {/* <PrivateRoute exact path="/" element={<Dashboard />}></PrivateRoute> */}
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
