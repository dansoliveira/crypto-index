import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import UpdateCurrencies from "../pages/UpdateCurrencies";

function Routes() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/currencies/update'>
        <UpdateCurrencies/>
      </Route>
    </Switch>
  );
}

export default Routes;
