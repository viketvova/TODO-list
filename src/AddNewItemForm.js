import React from 'react';
import './App.css';
import Select from './TodoListSelect'


class AddNewItemForm extends React.Component {
constructor(props) {
        super(props);
        //this.newTaskTitleRef = React.createRef();
}

state ={
  error: false,
  title: "",
  select: "high"
}

onaddItemClick = () => {
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

  this.props.addItem(newText);
  
}
changeColorType = (e) => {
  this.setState({
    error: false,
    title: e.currentTarget.value
    })

}
onKeyPress = (e) => {
  if(e.key === "Enter") this.onaddItemClick()
  }

    render = () => {
      
    let changeClassName = this.state.error === true ? "error" : "" ;
    
        return (
            <div className="todoList-header">
                
                <div className="todoList-newTaskForm">
                    <input onChange={this.changeColorType} 
                    onKeyPress={this.onKeyPress} 
                    className={changeClassName} 
                    ref={this.newTaskTitleRef} 
                    type="text" placeholder="New item name" 
                    value={this.state.title} />
                <Select change={() => { this.props.select(this.state.select)}} />
                    <button onClick={this.onaddItemClick} >Add</button>
                </div>
               
           </div>
     
        )

    }
}

export default AddNewItemForm;