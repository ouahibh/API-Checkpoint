import "./style.css";
import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import API from "./api";
import { Link } from "react-router-dom";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    API.get("users")
      .then((res) => {
        setListOfUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"main"}>
      <h1>User List</h1>
      <div className={"contenairCard"}>
        {listOfUser &&
          listOfUser.map((user) => (
            <Card
              className={"myCard"}
              style={{
                backgroundColor: "silver",
                borderRadius: "3rem .5rem 3rem",
              }}
            >
              <h3>name : {user.name} </h3>
              <h3>username : {user.username} </h3>
              <h3>email : {user.email} </h3>
              <h3>website : {user.website} </h3>
            </Card>
          ))}
      </div>
      <div>
        <Link to="/userlisttab">
          <h3>Afficher liste sur le tableau</h3>
        </Link>
      </div>
    </div>
  );
};

export default UserList;
