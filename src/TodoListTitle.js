import React from 'react';
import './App.css';
import TodoListSelect from './TodoListSelect'


class TodoListTitle extends React.Component {
constructor(props) {
        super(props);
        //this.newTaskTitleRef = React.createRef();
}


    render = () => {
       
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">{this.props.title}</h3>
                
           </div>
     
        )

    }
}

export default TodoListTitle;