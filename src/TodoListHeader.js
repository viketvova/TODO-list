import React from 'react';
import './App.css';


class TodoListHeader extends React.Component {
constructor(props) {
        super(props);

}

state ={
  error: false,
  title: ""
}

onAddTaskClick = () => {
  // let newText = this.newTaskTitleRef.current.value;
  // this.newTaskTitleRef.current.value = "";
  let newText = this.state.title;
  this.setState({
    title: ""
  })
  if(newText === ""){
    this.setState({
      error: true
    })
  }else{
      this.setState({
      error: false
    })
  }
  this.props.addTask(newText);
}
changeColorType = (e) => {
    this.setState({
      error: false,
      title: e.currentTarget.value
      })
  }
  onKeyPress = (e) => {
  if(e.key === "Enter") this.onAddTaskClick()
  }
    render = () => {
      
    let changeClassName = this.state.error === true ? "error" : "" ;
    
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onChange={this.changeColorType} 
                    className={changeClassName} 
                    onKeyPress={this.onKeyPress}
                    type="text" placeholder="New task name" 
                    value={this.state.title} />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
               
           </div>
     
        )

    }
}

export default TodoListHeader;