import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    render = () => {
        let classNameChanger = "";
        if(this.props.priority === "high") classNameChanger = "todoList-task high";
        if(this.props.priority === "low") classNameChanger = "todoList-task low";
        if(this.props.priority === "medium") classNameChanger = "todoList-task medium";

        return (
            <div className={classNameChanger}>
                <input type="checkbox" 
                    checked={this.props.isDone} />
                <span>{`${this.props.title}: ${this.props.priority}`}</span>
            </div>
        );
    }
}

export default TodoListTask;