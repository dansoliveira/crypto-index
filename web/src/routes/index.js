import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import UpdateCurrencies from "../pages/UpdateCurrencies";

function Routes() {
  return (
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <PrivateRoute path='/' exact>
        <Home/>
      </PrivateRoute>
      <PrivateRoute path='/currencies/update'>
        <UpdateCurrencies/>
      </PrivateRoute>
    </Switch>
  );
}

export default Routes;
