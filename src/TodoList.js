import React from 'react';
import './App.css';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';
import AddNewItemForm from './AddNewItemForm';
import TodoListTitle from './TodoListTitle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.newTaskTitleRef = React.createRef();
  }

  //nextTaskId = 0;

  state = {
    tasks: [],
    filterValue: "All",
    nextTaskId: 0
  };

  componentDidMount() {
    this.restoreState();
  }
  saveState = () => {
    let stateAsString = JSON.stringify(this.state);
    localStorage.setItem("our-state-" + this.props.id, stateAsString)
  }
  restoreState = () => {
  let state = {
        tasks: [],
        filterValue: "All"
    };
  let stateAsString = localStorage.getItem("our-state-" + this.props.id);
  if(stateAsString != null) {
    state = JSON.parse(stateAsString);
  }
  this.setState(state)
  }

  addItem = (newText) => {
    let newTask = {
      id: this.state.nextTaskId,
      title: newText,
      isDone: false,
      priority: 'low'
    };
    this.nextTaskId++;
    let newTasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: newTasks,
      nextTaskId: this.state.nextTaskId + 1,
    },
    () => {this.saveState()}
    );
  }

  changeFilter = (newFilterValue) => {
    this.setState({
      filterValue: newFilterValue
    });
  }
  changeStatus = (taskId, isDone) => {
    this.changeTask(taskId, {isDone: isDone})
  }

  changeTitle = (taskId, title) => {
    this.changeTask(taskId, {title: title})
  }

  changeTask = (taskId, obj) => {
    let newTasks = this.state.tasks.map(t => {
      if (t.id !== taskId) {
        return t;
      }
      else {
        return { ...t, ...obj }
      }
    })
    this.setState({
      tasks: newTasks
    })
  }

  render = () => {

    return (
      <div className="App">
        <div className="todoList">
        <div className="todoList-header">
                    <TodoListTitle title={this.props.title} />
                    <AddNewItemForm addItem={this.addItem} select={this.select}/>
                  </div>
          <TodoListTasks changeStatus={this.changeStatus}
            changeTitle={this.changeTitle}
            tasks={this.state.tasks.filter(el => {
              if (this.state.filterValue === "All") {
                return true
              }
              else if (this.state.filterValue === "Active") {
                return el.isDone === false
              }
              else {
                return el.isDone === true
              }
            }
            )} />
          <TodoListFooter changeFilter={this.changeFilter}
            filterValue={this.state.filterValue} />
        </div>
      </div>
    );
  }
}

export default App;