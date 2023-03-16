import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from "./pages/home";
import Login from './pages/login';
import Signup from './pages/signup';
import AdminSignup from "./pages/AdminSignup";
import AddVaccin from "./pages/AddVaccin";
import GetDose from "./pages/GetDosageDetails";
import AdminLogin from "./pages/AdminLogin";
import UserHome from "./pages/UserHome";
import SearchVaccinCenter from "./pages/SearchVaccinCenter";
import RemoveVaccinationCenter from "./pages/RemoveVaccinationCenter";
import { AuthProvider } from "./pages/components/Auth";




class App extends Component {
  render() {
    return (
      <AuthProvider>
      <Router>
        <Route exact path="/">
          <Redirect to="/Login"/>
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>
        <Route exact path="/Signup">
          <Signup/>
        </Route>
        <Route exact path="/AdminSignup">
          <AdminSignup/>
        </Route>
        <Route exact path="/Home">
          <Home/>
        </Route>
        <Route exact path="/AddVaccin">
          <AddVaccin/>
        </Route>
        <Route exact path="/GetDosageDetails">
          <GetDose/>
        </Route>
        <Route exact path="/AdminLogin">
          <AdminLogin/>
        </Route>
        <Route exact path="/UserHome">
          <UserHome/>
        </Route>
        <Route exact path="/SearchVaccinCenter">
          <SearchVaccinCenter/>
        </Route>
        <Route exact path="/RemoveVaccinationCenter">
          <RemoveVaccinationCenter/>
        </Route>
      </Router>
      </AuthProvider>
    );
  }
}

export default App;
