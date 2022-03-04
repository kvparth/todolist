import { useState } from 'react';
import './App.css';
import { Addtodo } from './MyComponent/AddTodo';
import Footer from './MyComponent/footer';
import Header from './MyComponent/Header';
import Todos from './MyComponent/todos';


function App() {
  const onDelete=(todo)=>{
    console.log("delete"+todo);
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }
  const [todos,setTodos]=useState([])
  const addtodo=(title,desc)=>{
    let sno=todos[todos.length-1]+1
    const mytdo={
      sno: sno,
      title:title,
      descripition:desc
    }
    setTodos([...todos,mytdo]);
  }
  return (
    <>
    <Header title='TODO LISIS'/>
    <Addtodo Addtodo={addtodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
