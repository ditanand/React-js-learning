import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Hello extends React.Component{
	render(){
		return(
			<h1>Hello</h1>
	    )
	}
}

class World extends React.Component{
	render(){
		return(
		  <p>world</p>
		)
	}
}

class Helloworld extends React.Component{
  render(){
  	return(
	  	<section className="foo">
	  	  <Hello/>
	  	  <World/> 
	  	</section>
  	)
  }
}

ReactDom.render(<Helloworld/>, document.getElementById("root"));