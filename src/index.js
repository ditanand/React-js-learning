import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class List extends React.Component{
  // We can also use contructor function call to initilize value, and its first line should be to call super for Reac.componet
  constructor(){
    super();
    // state is component specific
    this.state = {
      names: ['anand', 'kartikey', 'shadab']
    }
  }
  render(){
  	return(
      <ul>
       {
        this.state.names.map(function(name){
         return <Item key={name} firstname={name} lastname="kumar" />
        })
       }
      </ul>
  	)
  }
}

class Item extends React.Component{
  render(){
    return(
      <li>
       {this.props.firstname} {this.props.lastname}
      </li>
    )
  }
}

ReactDom.render(<List/>, document.getElementById("root"));