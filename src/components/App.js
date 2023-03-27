import React from 'react';
import DeleteTodo from './Todo/Delete';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AddTodo from './Todo/AddTodo';
import TodoList from './Todo/TodoList';
import UpdateTodo from './Todo/updatetodo';
import Login from './Authentication/Login';
import Navbar from './Navbar';
import Register from './Authentication/Signup';
import Home from './Home';
import Footer from './Todo/Footer';

//import TodoPage from './TodoPage';
//import TodoForm from './TodoForm';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Footer/>
    

    <Routes>
      <Route path= "/" element={<Home/>}/>
    <Route path="/login" element={<Login />} />
    <Route path ="/Register" element={<Register />} />
    <Route path ="/Todo" element={<AddTodo/>} />
    <Route path ="/todolist" element={<TodoList/>} />
    <Route path ="/update" element={<UpdateTodo/>} />
    <Route path ="/delete" element={<DeleteTodo/>} />
    


    </Routes>
    </BrowserRouter>
  )
}