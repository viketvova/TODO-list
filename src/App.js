import React from 'react';
import './App.css';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';
import TodoListHeader from './TodoListHeader';

class App extends React.Component {
    render = () => {
        let tasks = [
            { title: "JS", isDone: true },
            { title: "CSS", isDone: true },
            { title: "HTML", isDone: true },
            { title: "React", isDone: false }
        ]
        
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={tasks}/>
                    <TodoListFooter />
                </div>
            </div>
        );
    }
}

export default App;

