import React, { useState } from "react";
import { Card } from "../UI/Card";
import Classes from "./AddUser.module.css";
import { Button } from "../UI/Button";
import { ErrorModal } from "./ErrorModal";

export const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");
  const [error, setError] = useState();

  const userNameChnageHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const userAgeChnageHandler = (e) => {
    setEnteredUserage(e.target.value);
  };

  const closeModalHandler = () => {
    setError(null);
  };
  const addUserHandler = (e) => {
    e.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
     
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return;
    }

    if (enteredUserage <= 0) {
  
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid  age (> 0)'
      })
      return;
    }
    console.log(enteredUsername, enteredUserage);

    props.onAddUsers(enteredUsername, enteredUserage);
    setEnteredUsername("");
    setEnteredUserage("");
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={closeModalHandler}
        />
      )}
      <Card className={Classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={userNameChnageHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredUserage}
            onChange={userAgeChnageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
