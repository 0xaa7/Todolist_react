import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TodoList = ({ tasks }) => {
  return (
    <section className="todo-list">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Todo List</th>
            <th colspan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((el, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{el.name}</td>
                <td>
                <Button variant="dark" id="button-addon2" >Edit</Button>
                </td>
                <td>
                <Button variant="dark" id="button-addon2" >Delete</Button>
                </td>
               
              </tr>
            );
          })}
          
        </tbody>
      </Table>
    </section>
  );
};

export default TodoList;
