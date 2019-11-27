import React from 'react';
import './App.css';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';
import TodoListHeader from './TodoListHeader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
        }
    state = {
        tasks: [
            { title: "JS", isDone: true, priority: "low" },
            { title: "CSS", isDone: true, priority: "high" },
            { title: "HTML", isDone: true, priority: "medium" },
            { title: "React", isDone: false, priority: "high" }
        ],
        filterValue: "Active"
    };
    onAddTaskClick = () => {
        let newInput = this.newTaskTitleRef.current.value;
        let newTask = {
            title: newInput,
            isDOne: false,
            priority: 'low'
         };
         let newTasks = [...this.state.tasks, newTask];
         this.setState ({
             tasks: newTasks
         });
         this.newTaskTitleRef.current.value = "";
         
     }
     changeFilter = (newFilterValue) => {
        this.setState({
          filterValue: newFilterValue
        });
      }
  

    render = () => {
//console.log(this.onAddTaskClick)
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader button={this.onAddTaskClick} input={this.newTaskTitleRef}/>
                    <TodoListTasks tasks={this.state.tasks.filter( el => {
                    if(this.state.filterValue === "All") {
                      return true 
                      }
                    else if(this.state.filterValue === "Active") {
                      return el.isDone === false
                    }  
                    else {
                      return el.isDone === true
                    }  
                    }
                    )} />
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;

