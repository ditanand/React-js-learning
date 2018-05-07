import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Helloworld extends React.Component{
  getSum(){
  	return (2 + 2)
  }

  getName(){
  	return "Anand";
  }
  render(){
  	return(
	  	<section className="foo">
         {this.getName()}
         <br/>
         {this.getSum()}
	  	</section>
  	)
  }
}

ReactDom.render(<Helloworld/>, document.getElementById("root"));