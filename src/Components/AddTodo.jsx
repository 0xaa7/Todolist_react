import React, { useState } from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';

const AddTodo = (props) => {
  const [currentState, setCurrentState] = useState('');

  const onChangeHandler = (e) => {
    setCurrentState(e.target.value);
  };

  const onSaveHandler = () => {
    props.callback(currentState);
  };

  return (
    <section id="add-todo">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add Task"
          aria-label="Add Task"
          aria-describedby="basic-addon2"
          onChange={onChangeHandler}
        />
        <Button onClick={onSaveHandler} variant="dark" id="button-addon2">
          Add Task
        </Button>
      </InputGroup>
    </section>
  );
};

export default AddTodo;
