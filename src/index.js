import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Helloworld extends React.Component{
  // We can also use contructor function call to initilize value, and its first line should be to call super for Reac.componet
  constructor(){
    super();
    this.name = "Anand"
  }
  render(){
  	return(
	  	<section className="foo">
          {this.name}
	  	</section>
  	)
  }
}

ReactDom.render(<Helloworld/>, document.getElementById("root"));