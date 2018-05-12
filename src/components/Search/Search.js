//Show form to query database, seperate component to display results

import React from 'react';
import './Search.css';
//var rows = {};
var rows = [];

class Search extends React.Component {
  constructor(props){
    super();
    this.state = {
      rows: [],
      loaded: ''    
    }

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  getInitialState = () => {
    return {
      jobs: []
    }
  }

  setBookListState = (body) => {
        this.setState({
          rows: body.rows
        });
      }


  componentWillMount = (props) => {
  	console.log("User: ",this.props.user.id);
    fetch('http://104.236.62.203:3000/search', {
      method: 'post',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({
        userid: this.props.user.id
      })
    })
      .then(function(response) {
        return response.json()
      }).then((body) => {
        console.log('body',body);
        console.log('this',this.state);
        this.setState({
                    rows: body.rows ,
                    loaded: true
                });
        rows = body.rows;     
        console.log('rows',rows)
      }).then(function() {
        console.log('rows 2',rows)
      });
  }
    

render() {  
  const { loaded, rows } = this.state;
        return (
          <div className='css-table'>
            {<div className='f2 pa2'>All Submissions</div>}         

              <div className='equalHMRWrap eqWrap'>
                { this.state.loaded &&                                     
                      rows.map((row, i) => {
                        console.log('row',row)
                          return <div className='equalHMR eq wcontrol r3 ba b--black-10 mv2 mw6 shadow-5 center inline' key={i}>
                          Name: {row.name}<br />
                          Artist: {row.artist}<br />                          
                          <img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.imgname + '.jpg'} />
                          <br/>
                          {row.backimgname != null
                            ?<div>Back<br /><img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.backimgname + '.jpg'} /></div>
                            :<div></div>
                          }
                          
                          {row.glow==='on'
                            ?<div>Glow<br /><img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.glowimgname + '.jpg'} /></div>
                            :<div></div>
                          }
                          
                          {row.uv==='on'
                            ?<div>UV<br /><img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.uvimgname + '.jpg'} /></div>                             
                            :<div></div>                            
                          }       
                          <br />                  
                          </div>;
                      })

                }
                </div>
                { !this.state.loaded &&
                     <div> Loading </div> 
                }
          
            
          </div>      
        );
      }
  
}


export default Search;