import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    onIsDoneChecked = (e) => {

        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }
    render = () => {
        let classNameChanger = "";
        if (this.props.task.priority === "high" && this.props.task.isDone === true) {
            classNameChanger = "todoList-task high done";
        } else if (this.props.task.priority === "high" && this.props.task.isDone === false){
            classNameChanger = "todoList-task high";
        }
        if (this.props.task.priority === "low" && this.props.task.isDone === true) {
            classNameChanger = "todoList-task low done";
        } else if (this.props.task.priority === "low" && this.props.task.isDone === false){
            classNameChanger = "todoList-task low";
        }
        if (this.props.task.priority === "medium" && this.props.task.isDone === true) {
            classNameChanger = "todoList-task medium done";
        } else if (this.props.task.priority === "medium" && this.props.task.isDone === false) {
            classNameChanger = "todoList-task medium";
        }


        return (
            <div className={classNameChanger}>
                <input type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDoneChecked} />
                <span>{`${this.props.task.id} - ${this.props.task.title}: ${this.props.task.priority}`}</span>
            </div>
        );
    }
}

export default TodoListTask;