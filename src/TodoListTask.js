import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    onIsDoneChecked = (e) => {
        
        this.props.changeStatus(this.props.task, e.currentTarget.checked)
      }
    render = () => {
        let classNameChanger = "";
        if(this.props.task.priority === "high") classNameChanger = "todoList-task high";
        if(this.props.task.priority === "low") classNameChanger = "todoList-task low";
        if(this.props.task.priority === "medium") classNameChanger = "todoList-task medium";

        return (
            <div className={classNameChanger}>
                <input type="checkbox" 
                    checked={this.props.task.isDone} 
                    onChange={this.onIsDoneChecked} />
                <span>{`${this.props.task.title}: ${this.props.task.priority}`}</span>
            </div>
        );
    }
}

export default TodoListTask;