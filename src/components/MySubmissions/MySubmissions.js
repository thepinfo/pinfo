import React from 'react';
import edit from './pencil.png';
import del from './delete.png';
import './MySubmissions.css';
//var rows = {};
var rows = [];
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
class MyPins extends React.Component {
  constructor(props){
    super();
    this.state = {
      rows: [],
      loaded: '',
      now: '' 
    }

    this.componentWillMount = this.componentWillMount.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
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
    fetch('http://104.236.62.203:3000/mysubmissions', {
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
    
pincardClick = (e) => {
  alert('pincard click')
}

forceUpdateHandler(){
    this.forceUpdate();
  };

handleClick = (e, row) => {
    // access to e.target here
    if( isMobile.any() ){
     alert('Mobile')
    }else{
     console.log(row.id);
    }

    console.log(this.props)
    this.props.loadPin(row.id);
    this.props.onRouteChange('singlepin');        
}

delClick = (e, row) => {
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
    alert('Edi');
    this.props.onRouteChange('edit');
    e.stopPropagation();
}  

render() {
  /*var pins = this.state.rows.map(function(rows) {
      return (
        <li key={rows.key}>{rows.name}</li>
      );
    });*/  

  const { loaded, rows } = this.state;
        return (
          <div className='css-table'>
            {<div className='f2 pa2'>My Pin Submissions</div>}
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
                      rows.map((row, i) => {
                        console.log('row',row)
                          return <div className='equalHMR eq wcontrol r3 ba b--black-10 mv2 mw6 shadow-5 center inline pincard' id='pincard' value={row.id} onClick={((e) => this.handleClick(e, row))} key={i}>
                          <div className='center top-row'>
                          <label className='fw6 b'>Name</label>
                          <div className='icons'><img onClick={((e) => this.delClick(e, row))} src={del} className='fr icon' href='' /><img onClick={this.editClick} src={edit} className='fr icon' href='' /></div></div>
                          {row.name}<br />
                          Artist: {row.artist}<br />                          
                          <img className='cardimg' src={'http://104.236.62.203:3000/public/' + row.imgname + '.jpg'} />
                                            
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


export default MyPins;