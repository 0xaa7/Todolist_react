import React from 'react';
import { Table } from 'react-bootstrap';

const TodoList = ({ tasks }) => {
  return (
    <section className="todo-list">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th colSpan={3}>Todo List</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((el, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{el.name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};

export default TodoList;
