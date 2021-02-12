import "./App.css";
import UserList from "./userlist";
import UserListTab from "./userlisttab";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/userlist" />
      </Route>
      <Route path="/userlist">
        <UserList />
      </Route>
      <Route path="/userlisttab">
        <UserListTab />
      </Route>
    </BrowserRouter>
  );
};

export default App;
