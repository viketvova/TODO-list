import React from 'react';
import './App.css';

class TodoListSelect extends React.Component {
render = () => {


return (
  
<select>
  <option className="low">low</option>
  <option className="medium">medium</option>
  <option className="high">high</option>
</select>
);
}
}

export default TodoListSelect;