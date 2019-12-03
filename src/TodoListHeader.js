import React from 'react';
import './App.css';


class TodoListHeader extends React.Component {
constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
}

state ={
  error: true
}

onAddTaskClick = () => {
  let newText = this.newTaskTitleRef.current.value;
  this.newTaskTitleRef.current.value = "";
  this.props.addTask(newText);
}

    render = () => {
      
    let changeClassName = this.state.error === true ? "error" : "" ;
    
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={changeClassName} ref={this.newTaskTitleRef} type="text" placeholder="New task name" />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
               
           </div>
     
        )

    }
}

export default TodoListHeader;