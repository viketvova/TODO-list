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

    render = () => {
//console.log(this.onAddTaskClick)
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader button={this.onAddTaskClick} input={this.newTaskTitleRef}/>
                    <TodoListTasks tasks={this.state.tasks} />
                    <TodoListFooter filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;

