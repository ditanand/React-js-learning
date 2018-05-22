import React from 'react';

const Item = (props) => {
	return(
	  <li onClick={()=> {props.clickHandler(props.index)} } className={props.name.completed ? 'completed' : ''}>
	   {props.name.fname} {props.name.lname}
	  </li>
	)
}

export default Item;