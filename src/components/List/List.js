import React, { Component } from "react";
import Items from "./Items";
import './List.css';

var categories = {};
var tagtype = {};
var doPromise = true;

class List extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      items: [],
      selectedOption: 'misc'
    };

    

    this.addItem = this.addItem.bind(this);
    //this.askMom = this.askMom.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  

  componentWillMount() {
    //console.log("Setting state props.items")
    this.setState({
      items: this.props.items
    })
    //this.props.sendData(this.state);
  }

  getInitialState(){
    return {
      selectedOption: 'misc'
    };
    
    //console.log("List Items:",this.state.items)
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  /*setCatState = (val) => {
      this.setState({
          categories: categories.val,
          tagtype: tagtype.val,
          items: categories.val
        });
        console.log("categories: ", categories);  
    }*/

  getItemData = (val) => {
    // do not forget to bind getData in constructor
    //console.log("val",val);
    categories.val = val; 
    //console.log("val.items",val.items);
    //console.log("categories.val",categories.val);
    tagtype.val = val.selectedOption;   
    //this.setCatState(val);      
  }

 /* logData = (data) => {
      console.log('LogData:',data)
      this.props.sendData(data);
      
      //p2.then((res) => console.log("p2:",this.state.items))
      
    }//.then sendData*/

    logData = () => {
      //console.log('LogData:',this.state)
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
      //console.log("AddItem Items:",this.state.items) 

      /*var newPromise = getPromise(this.state.items).then(function(data) {  // Line 1
        return getPromise(data);  //Line 2
      }).then(function(data){  //Line 3
        console.log("newPromise Items:",this.state.items)
      });     */
      
    e.preventDefault();
    }//.then send data?

  
  

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
    this.props.sendData(this.state);
  } 
  
  promiseData = (e) => {
    //console.log("promiseData")
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
  // Promise
    var setPromise = new Promise(
        function (resolve, reject) {
            if (doPromise) {  
                resolve(newItem); // fulfilled
            } else {
                var reason = new Error("error");
                reject(reason); // reject
            }

        }
    )

    var setData = () => {      
    setPromise
            .then((fulfilled) => {
              
                // yay, you got a new phone
                //console.log("setPromise",this.state.items);
                this.logData(this.state.items);
             // output: { brand: 'Samsung', color: 'black' }
            })
            .catch(function (error) {
                // oops, mom don't buy it
                //console.log(error.message);
             // output: 'mom is not happy'
            });
    }
    setData();
    e.preventDefault();
  }

  render() {

    

    

    return (

      <div className="ListMain">
        <div className="header">      
          <form onSubmit={this.promiseData}>
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
            <button onClick={this.promiseData} type="submit" >add</button>
          </form>
        </div>
        <Items entries={this.state.items}
                 delete={this.deleteItem}
                 sendData={this.getItemData}/>
      </div>
    );
  }
}
 
export default List;