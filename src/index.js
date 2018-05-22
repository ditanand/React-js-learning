import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Item from './components/Item.js';

class List extends React.Component{
  // We can also use contructor function call to initilize value, and its first line should be to call super for Reac.componet
  constructor(){
    super();
    this.state = {
      names: [
      {fname: "Aand", lname: "kr", completed: false},
      {fname: "shadab", lname: "malik", completed: false},
      {fname: "kartikey", lname: "soni", completed: false},
      {fname: "mac", lname: "malik", completed: false},
      ]
    };
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(index){
    // console.log(this.state.names[index]);
    var copied_names = this.state.names;
    var name = copied_names[index];
    name.completed = !name.completed;
    this.setState({
      names: copied_names
    })

  }

  render(){
  	return(
      <ul>
       {
        this.state.names.map((name, index) => {
         return <Item key={name.fname} name={name} index={index} clickHandler={this.changeStatus}/>
        })
       }
      </ul>
  	)
  }
}

ReactDom.render(<List/>, document.getElementById("root"));