import React, { useState, useRef } from "react";
import { Card } from "../UI/Card";
import Classes from "./AddUser.module.css";
import { Button } from "../UI/Button";
import { ErrorModal } from "./ErrorModal";

export const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

 


  const closeModalHandler = () => {
    setError(null);
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid  age (> 0)",
      });
      return;
    }
    props.onAddUsers(enteredName, enteredAge);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
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
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
