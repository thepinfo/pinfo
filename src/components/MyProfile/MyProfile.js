import React from 'react';
import './MyProfile.css';
//var rows = {};
var rows = [];

class MyProfile extends React.Component {
  constructor(props){
    super();
    this.state = {
      rows: [],
      loaded: ''    
    }

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  /*getInitialState = () => {
    return {
      jobs: []
    }
  }*/

  /*setBookListState = (body) => {
        this.setState({
          rows: body.rows
        });
      }
*/
  componentWillMount = (props) => {
    fetch('http://104.236.62.203:3000/myprofile', {
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
        //this.setState({rows: body.rows});      
        console.log('rows',rows)
      }).then(function() {
        console.log('rows 2',rows)
      });

      
      //this.setState = { loaded: 'on' };
  }
    

render() {
  /*var pins = this.state.rows.map(function(rows) {
      return (
        <li key={rows.key}>{rows.name}</li>
      );
    });*/
  const { loaded, rows } = this.state;
        return (
          <div className='contentdiv'>
            
            {/*loaded==='true' 
              ? <div className='f2'>My Submissions</div>                             
              : console.log("state:", this.state)*/
            }
            {//this.state.mode === ''
              //?<div className='f2'>My Submissions</div>
              //:console.log('state',this.state)
               
                  /*rows.map((user, i) =>
                      <div eventKey=[i]>User.name[i]</div>)*/
              
            }

              <div className='equalHMRWrap eqWrap'>
                { this.state.loaded &&
                   /* rows.map((user, i) =>
                      <div id={i}>User.name[i]</div>)


                      w-60-ns w-18-m w-18-l w-60 
                      */
                                            
                      rows.map((row, i) => {
                        console.log('row',row)
                          return <div className='br3 ba b--black-10 w-100 w-50-m w-25-l shadow-5 center' key={i}>
                          <div><label className="f4 fw6 ph0 mh0">My Profile</label><br />
                          Name: {row.name}<br />
                          Email: {row.email}<br />
                          Entries: {row.entries}<br />                          
                          <br /></div>                  
                          </div>;
                      })

                }
                </div>
                { !this.state.loaded &&
            //external component passing Server data to its classes
                     <div> Loading </div> 
                }
          
            
          </div>      
        );
      }
  
}


export default MyProfile;