import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {

    render = () => {
        console.log(this.props)
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input ref={this.props.input} type="text" placeholder="New task name" />
                    <button onClick={this.props.button}>Add</button>
                </div>
            </div>
        )

    }
}

export default TodoListHeader;

