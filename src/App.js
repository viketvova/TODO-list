import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddNewItemForm from './AddNewItemForm';

class App extends React.Component {
    constructor(props) {
        super(props);
      }
  state = {
    todolists: [{
      title: "Who r u?",
      id: 0
    },
    {
      title: "What to do?",
      id: 1
    }],
  }
 


    render = () => {
    const todolists = this.state.todolists.map(tl => 
      <TodoList id={tl.id} title={tl.title} />)
        return (
          <>
            <div>
              <AddNewItemForm addTodoList={this.addTodoList} />
            </div>
            <div className="App">
               {todolists}
             
            </div>
        </>
        );
    }
}

export default App;