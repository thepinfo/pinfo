import React, { Component } from "react";
import './Items.css';
var listItems = null;
class TodoItems extends Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
  
  /*logData() {
      console.log('LogData from List:',this.props.entries)
      this.props.sendData(this.props.entries);
    }*/
  componentWillMount = () => {
    var listEntries = this.props.entries;
    console.log("list entries",listEntries);
    listItems = listEntries.map(this.createTasks);
  }

  delete = (key) => {
    this.props.delete(key);
  }

  createTasks = (item) => {
    return <li key={item.key}>{item.tagtype} - {item.text}<input type='button' value='x' className='del' onClick={() => this.delete(item.key)} /></li>
  }
 
  render() {
    
    //console.log('LisEntries:',listEntries)
    //console.log('ListItems:',listItems)
    //this.logData()        
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;