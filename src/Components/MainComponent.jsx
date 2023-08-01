import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Card from 'react-bootstrap/Card';

const initialTodoList = [
  {
    id: 1,
    name: 'Wake up',
  },
  {
    id: 2,
    name: 'Go to school',
  },
  
];

const MainComponent = () => {
  const [todolist, setTodoList] = useState([]);

  const callback = (task) => {
    const newTask = { id: Date.now(), name: task };
    setTodoList((prevTodoList) => [...prevTodoList, newTask]);
  };

  return (
    <div className="container">
      <div className="col-lg">
        <Card>
          <Card.Body>
            <AddTodo callback={callback} />
            <TodoList tasks={todolist} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MainComponent;
