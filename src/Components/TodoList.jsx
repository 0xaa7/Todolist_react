import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TodoList = (props) => {


  return (
    <section className="todo-list">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Todo List</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((el, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{el.name}</td>
                <td>
                  <Button onClick={()=>props.onEdit(el.id, el.name)} variant="dark" id="button-addon2" >
                    Edit
                  </Button>
                  </td>
                  <td>
                  <Button onClick={()=>props.deleteCallback(el.id)} variant="dark" id="button-addon2">
                    Delete
                  </Button>
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
