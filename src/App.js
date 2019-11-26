import React from 'react';
import './App.css';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';
import TodoListHeader from './TodoListHeader';

class App extends React.Component {
    
    tasks = [
        { title: "JS", isDone: true, priority: "low"},
        { title: "CSS", isDone: true, priority: "high"},
        { title: "HTML", isDone: true, priority: "medium"},
        { title: "React", isDone: false, priority: "high"}
    ];
    
    filterValue = "Active";

    render = () => {
        
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

