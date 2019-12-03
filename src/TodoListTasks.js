import React from 'react';
import './App.css';
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {

    render = () => {
        return (

            <div className="todoList-tasks">
                {this.props.tasks.map(task => {
            return <TodoListTask task={task}
            changeStatus={this.props.changeStatus} />
        })
        }
            </div>
        );
    }
}

export default TodoListTasks;

