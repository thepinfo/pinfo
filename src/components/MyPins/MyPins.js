import React from 'react';
import './MyPins.css';

class MyPins extends React.Component {
  constructor(props){
    super();
    this.state = {
      pins: []   
    }
  }

  

  render() {
  	return (
  		<div>
        <div className='f2'>My Pins</div>
      </div>      
  	);
  }
}


export default MyPins;