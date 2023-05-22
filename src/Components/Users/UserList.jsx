import React from "react";
import Classes from "./UsersList.module.css";
import { Card } from "../UI/Card";
export const UserList = (props) => {
  return (
    <Card className={Classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} Years Old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
