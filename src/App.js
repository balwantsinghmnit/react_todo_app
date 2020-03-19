import React, { Component } from 'react'
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import {v4 as uuid} from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos:[
    ]
  };
  deleteit=(id)=>{
    this.setState({
      todos:[...this.state.todos.filter(todo=>todo.id!==id)]
    });
  }
  addTask=(newtitle)=>
  {
      const task = 
      {
        id:uuid(),
        title:newtitle
      }
      this.setState({
          todos:[...this.state.todos,task]
      });
  }
  render(){
  return (
    <div className="App">
    <Header/>
    <AddTask addTask={this.addTask}/>
    <Todos todos={this.state.todos} deleteit={this.deleteit}/>
    </div>
  );
  }
}

export default App;
