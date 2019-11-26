import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    render = () => {
        console.log(this.props)

        return (
            <div className="todoList-task">
                <input type="checkbox"
                    checked={this.props.isDone} />
                <span>{`${this.props.title}: ${this.props.priority}`}</span>
            </div>
        );
    }
}

export default TodoListTask;