import React, { useState, useEffect } from 'react';
import { Table, Input } from 'reactstrap';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [dateFilter, setDateFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    // make API call to get all todo items
    fetch('https://todo-app-odjv.onrender.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setFilteredTodos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // filter todos based on selected filters
    let filtered = [...todos];
    if (dateFilter !== '') {
      filtered = filtered.filter((todo) => todo.date === dateFilter);
    }
    if (priorityFilter !== '') {
      filtered = filtered.filter((todo) => todo.priority === priorityFilter);
    }
    if (statusFilter !== '') {
      filtered = filtered.filter((todo) => todo.status === statusFilter);
    }
    setFilteredTodos(filtered);
  }, [dateFilter, priorityFilter, statusFilter, todos]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3>Todo List</h3>
          <hr />
          <div className="mb-3">
            <Input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />
            <Input
              type="select"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="">Select priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Input>
            <Input
              type="select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Select status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </Input>
          </div>
          <Table striped>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTodos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>{todo.date}</td>
                  <td>{todo.priority}</td>
                  <td>{todo.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
