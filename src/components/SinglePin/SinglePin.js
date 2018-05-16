import React from 'react';
import edit from './pencil.png';
import del from './delete.png';
import './SinglePin.css';
//var rows = {};
var pin = [];
var back = 0;

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

console.log("back", back);
class SinglePin extends React.Component {
  constructor(props){
    super();
    this.state = {
      pin: [],
      loaded: ''    
    }

    //this.componentWillMount = this.componentWillMount.bind(this);
  }

  

 /* getInitialState = () => {
    return {
      jobs: []
    }
  }*/

  /*setBookListState = (body) => {
        this.setState({
          rows: body.rows
        });
      }*/

  componentWillMount = (props) => {
    fetch('http://104.236.62.203:3000/singlepin', {
      method: 'post',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({
        pinid: this.props.pin
      })
    })
      .then(function(response) {
        return response.json()
      }).then((body) => {
        console.log('body',body);
        console.log('this',this.state);
        this.setState({
                    pin: body.rows,
                    loaded: true
                });
        pin = body.rows;   
        //this.setState({rows: body.rows});      
        console.log('pin',pin[0])
      }).then(function() {
        console.log('rows 2',pin)
      });

      
      //this.setState = { loaded: 'on' };
  }
  
  delClick = (e,row) => {
    e.stopPropagation();    
    let that = this;
    let delConfirm = window.confirm('Are you sure you want to delete?');
    if(delConfirm == true){
      let now = Date.now();      
      fetch('http://104.236.62.203:3000/deletepin', {
          method: 'put',
          headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
          body: JSON.stringify({
            pinid: row.id
          })
        })        
        .then(function(response) {
          return response.json()
          
        }).then(function(body) {
          console.log(body);
          //that.forceUpdate();
          console.log(that.state)
        });        
        alert(that.props.route);
        if(that.props.route == 'home'){
          console.log('routing to MySubmissions')
          setTimeout(function() { this.props.onRouteChange('mysubmissions'); }.bind(this), 500);
        }else{
          setTimeout(function() { this.props.onRouteChange('home'); }.bind(this), 500);
        }
        
        
    }else{

    }    
    
  }  
  editClick = (e) => {
    alert('Edit');
    e.stopPropagation();
  }  
/*pincardClick = (e) => {
  alert('pincard click')
}

handleClick = (e, row) => {
    // access to e.target here
    if( isMobile.any() ){
     alert('Mobile')
    }else{
     console.log(row.id);
    }        
}*/


render() {
  /*var pins = this.state.rows.map(function(rows) {
      return (
        <li key={rows.key}>{rows.name}</li>
      );
    });*/  

  const { loaded, pin } = this.state;
        return (
          <div className='css-table'>            
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
                   /* 
                    <br/>
                          {row.backimgname != ''
                            ?<div>Back<br /><img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.backimgname + '.jpg'} /></div>
                            :<div></div>
                          }
                          <br/>
                          {row.glow==='on'
                            ?<div>Glow<br /><img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.glowimgname + '.jpg'} /></div>
                            :<div></div>
                          }
                          <br/>
                          {row.uv==='on'
                            ?<div>UV<br /><img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.uvimgname + '.jpg'} /></div>                             
                            :<div></div>                            
                          }       
                          <br />

                      */                      
                      pin.map((row, i) => {
                        console.log('row',row)
                          return <div className='equalHMR eq wcontrol r3 ba b--black-10 w-50 mv2 shadow-5 center inline' key={i}>
                          <div className='center top-row'>
                          <label className='fw6 b'>Name</label>
                          <div className='icons'><img src={del} onClick={((e) => this.delClick(e, row))} className='fr icon' href='' /><img onClick={this.editClick} src={edit} className='fr icon' href='' /></div></div>
                          {row.name}<br />
                          <label className='fw6 b'>Artist</label> <br /> {row.artist}<br />                          
                          <label className='fw6 b'>Publisher</label> <br /> {row.producer}<br />                          
                          <label className='fw6 b'>Variant</label> <br /> {row.variant}<br />                          
                          <label className='fw6 b'>Year</label> <br /> {row.year}<br />                          
                          <label className='fw6 b'>Pin #:</label> {row.pinno != ''
                            ?row.pinno
                            :'None '
                          } <br />                            
                          <label className='fw6 b'>Max #:</label> {row.maxno != ''
                            ?row.maxno
                            :'None '
                          }       <br />                          
                          <label className='fw6 b'>About</label><br /> {row.about}<br />                          
                          <img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.imgname + '.jpg'} />
                           <br/>
                          {row.backimgname != ''
                            ?<div className='fw6'>Back<br /><img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.backimgname + '.jpg'} /></div>
                            :<div></div>
                          }
                          
                          {row.glow==='on'
                            ?<div className='fw6'>Glow<br /><img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.glowimgname + '.jpg'} /></div>
                            :<div></div>
                          }
                          
                          {row.uv==='on'
                            ?<div className='fw6'>UV<br /><img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.uvimgname + '.jpg'} /></div>                             
                            :<div></div>                            
                          }       
                          <br />                 
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


export default SinglePin;