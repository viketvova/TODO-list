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

    nextTaskId = 4;

    state = {
        tasks: [
            { id:0, title: "JS", isDone: true, priority: "low" },
            { id:1, title: "CSS", isDone: true, priority: "high" },
            { id:2, title: "HTML", isDone: true, priority: "medium" },
            { id:3, title: "React", isDone: false, priority: "high" }
        ],
        filterValue: "All",

    };

    addTask = (newText) => {
      let newTask = {
        id: this.nextTaskId,
        title: newText,
        isDone: false,
        priority: 'low'
      };
      this.nextTaskId++;
      let newTasks = [...this.state.tasks, newTask];
      this.setState ({
             tasks: newTasks
         });
    }

    changeFilter = (newFilterValue) => {
      this.setState({
        filterValue: newFilterValue
      });
    }
    changeStatus = (taskId, isDone) => {
      let newTasks = this.state.tasks.map(t => {
        if(t.id !== taskId) {
          return t;
        }
        else {
          return {...t, isDone: isDone}
        }
      })
      this.setState({
        tasks: newTasks
      })
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask} />
                    <TodoListTasks changeStatus={this.changeStatus} tasks={this.state.tasks.filter( el => {
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
                    <TodoListFooter changeFilter={this.changeFilter} 
                    filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;