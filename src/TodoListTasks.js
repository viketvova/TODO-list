import React from 'react';
import './App.css';
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {

    render = () => {
        return (

            <div className="todoList-tasks">
                {this.props.tasks.map(el => {
            return <TodoListTask title={el.title} isDone={el.isDone} priority={el.priority}/>
        })
        }
            </div>
        );
    }
}

export default TodoListTasks;

