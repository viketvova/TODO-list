import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    state = {
        edit: false
    }
    activateEditMode = () => {
        this.setState({
            edit: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            edit: false
        })
    }
    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    onIsDoneChecked = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }
    render = () => {
        
        let classNameChanger = "";
        if (this.props.task.priority === "high" && this.props.task.isDone === true) {
            classNameChanger = "todoList-task high done";
        } else if (this.props.task.priority === "high" && this.props.task.isDone === false) {
            classNameChanger = "todoList-task high";
        }
        if (this.props.task.priority === "low" && this.props.task.isDone === true) {
            classNameChanger = "todoList-task low done";
        } else if (this.props.task.priority === "low" && this.props.task.isDone === false) {
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
                {this.state.edit
                    ? <input onBlur={this.deactivateEditMode}
                        onChange={this.onTitleChanged}
                        autoFocus={true}
                        value={this.props.task.title} />
                    : <span onClick={this.activateEditMode}>{this.props.task.id} -
                    {this.props.task.title}: {this.props.task.priority}</span>
                }
                {/* <span>{`${this.props.task.id} - ${this.props.task.title}: ${this.props.task.priority}`}</span> */}
            </div>
        );
    }
}

export default TodoListTask;