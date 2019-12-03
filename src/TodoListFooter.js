import React from 'react';
import './App.css';
//import s from './TodoListFooter.module.css';

class TodoListFooter extends React.Component {
  state = {
    isHidden: false
  }
    changeStatus = () => {
      if(this.state.isHidden === false) {
        this.setState({
        isHidden:true
        })
      }else{
        this.setState({
        isHidden:false
        })
      }
    }
    render = (props) => {
        
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (

            <div className="todoList-footer">
              {!this.state.isHidden && <div>
                <button onClick={ () => {this.props.changeFilter("All")}} 
                className={classForAll}>All</button>
                <button onClick={ () => {this.props.changeFilter("Completed")}} 
                className={classForCompleted}>Completed</button>
                <button onClick={ () => {this.props.changeFilter("Active")}} 
                className={classForActive}>Active</button>
              </div>
              }
                {!this.state.isHidden && <span onClick={this.changeStatus}>hide</span>}
                {this.state.isHidden && <span onClick={this.changeStatus}>show</span>}
            </div>
        );
    }
}

export default TodoListFooter;