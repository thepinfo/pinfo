/*import React from 'react';



const List = props => (
render() {
  	return (
  <ul>
    {
    	console.log(props)
      this.items.map((item, index) => <li key={index}>{item} <button align="right" onClick={this.deleteTagHandler}>X</button></li>)
    }
  </ul>
);
}



export default List;
*/

import React from 'react';
import './List.css';

//const List = props => (
class List extends React.Component {
	constructor(props){
    super();
    this.state = {		
      tag: '',
      categories: []
	}
	}

	


	clicked = (index) => {
        this.props.clicked(index);
    }

	/*clicked = () => {
		alert('clicked');
		console.log('clicked');
	}*/

	/*this.props.items.map(item => (
                    <li key={item.id}>{item.text}<button onClick={this.clicked}>Delete</button></li>
                ))*/

	render(){
		return(				
			<label className="db fw6 lh-copy f6" htmlFor="category">Category Tagging</label>
    		<input value={this.state.tag} onChange={this.onTagChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="text" name="category" id="category" placeholder="Add descriptive tags" />
	        <input onClick={this.onAddTag} type='button' value='Add Tag' className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" />
		  
		  //<ul>
		    //{
		      //this.props.items.map((item, index) => <li key={index}>{item}  <input type='button' value='X' onClick={this.clicked()} /></li>)
		    
		    //}
		  //8</ul>
		);
	}	
}
export default List;