import React, { Component } from "react";
import Items from "./Items";
import './List.css';
 
class List extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      items: [],
      selectedOption: 'misc'
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  getInitialState = () => {
    return {
      selectedOption: 'misc'
    };
  }

  handleOptionChange =(changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  logData = () => {
      this.props.sendData(this.state);
    }

  addItem = (e) => {
    if (this._inputElement.value !== "") {
      var newItem = {
        tagtype: this.state.selectedOption,
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
          };
        });
     
        this._inputElement.value = "";
      }
     
    e.preventDefault();
    }

  
  

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  } 
  
  

  render() {
    return (
      <div className="ListMain">
        <div className="header">      
          <form onSubmit={this.addItem}>
            <label className="db fw6 lh-copy f6" htmlFor="category">Category Tagging</label>
            <div className="radio ib tagborder">
              <label>
                <input type="radio" value="misc" checked={this.state.selectedOption === 'misc'} onChange={this.handleOptionChange} />
                Misc
              </label>
            </div>
            <div className="radio ib tagborder">
              <label>
                <input type="radio" value="character" checked={this.state.selectedOption === 'character'} onChange={this.handleOptionChange} />
                Character
              </label>
            </div><br />
            <div className="radio ib tagborder">
              <label>
                <input type="radio" value="musical" checked={this.state.selectedOption === 'musical'} onChange={this.handleOptionChange} />
                Musical
              </label>
            </div>
            <div className="radio ib tagborder">
              <label>
                <input type="radio" value="cultural" checked={this.state.selectedOption === 'cultural'} onChange={this.handleOptionChange} />
                Cultural
              </label>
            </div>
            <div className="radio ib tagborder">
              <label>
                <input type="radio" value="event" checked={this.state.selectedOption === 'event'} onChange={this.handleOptionChange} />
                Event
              </label>
            </div>
            <br />
            {/*<input type="radio" name="typeoftag" value="general" checked> General </input>
            <input type="radio" name="typeoftag" value="musician"> Musician </input>
            <input type="radio" name="typeoftag" value="cultural"> Cultural </input><br />*/}
            <input ref={(a) => this._inputElement = a} 
                  placeholder="Enter as many descriptors as you can"
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75'>
            </input>
            <button type="submit" onClick={this.logData()} >add</button>
          </form>
        </div>
        <Items entries={this.state.items}
                 delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default List;