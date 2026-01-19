import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy groceries"
    },
    {
      sno: 2,
      title: "Prepare for the meeting",
      desc: "You have a meeting scheduled at 10 AM"
    },
    {
      sno: 3,
      title: "Workout",
      desc: "Don't forget to do your daily workout"
    }
  ]);
  
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => {return e !== todo;}));
  }
  return (
   <>
   <Header title="MyTodoList" searchBar={false} />
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer />
   </>
  );
}

export default App;
