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

  const editCallback = (id,name) => {
    const newTaskName = prompt("Updated task name", name);
    const allTask = Object.assign([], todolist);
    
    const position  = allTask.findIndex(el=>el.id === id);
    allTask[position] ={
      id:id,
      name:newTaskName
    };

    setTodoList(allTask);

  }

  const deleteCallback = (id) => {
    setTodoList((prevTodoList) => prevTodoList.filter((task) => task.id !== id));
  };


  return (
    <div className="container">
      <div className="col-lg">
        <Card>
          <Card.Body>
            <AddTodo callback={callback} />
            <TodoList tasks={todolist} deleteCallback={deleteCallback} onEdit={editCallback} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MainComponent;
