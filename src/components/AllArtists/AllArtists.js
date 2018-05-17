import React from 'react';
import './AllArtists.css';
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

//console.log("back", back);
class AllArtists extends React.Component {
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
    fetch('http://104.236.62.203:3000/allartists', {
      method: 'post',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({
        //userid: this.props.user.id
      })
    })
      .then(function(response) {
        return response.json()
      }).then((body) => {
        //console.log('body',body);
        //console.log('this',this.state);
        this.setState({
                    rows: body.rows ,
                    loaded: true
                });
        rows = body.rows;   
        //this.setState({rows: body.rows});      
        //console.log('rows',rows)
      }).then(function() {
        //console.log('rows 2',rows)
      });

      
      //this.setState = { loaded: 'on' };
  }
    
pincardClick = (e) => {
  alert('pincard click')
}

handleClick = (e, row) => {
    // access to e.target here
    if( isMobile.any() ){
     alert('Mobile')
    }else{
     //console.log(row.artist);
    }

    //console.log(this.props)
    this.props.loadArtist(row.artist);
    this.props.onRouteChange('singleartist');        
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
            {<div className='f2 pa2'>All Artists</div>}
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
                          return <div className='equalHMR eq artistwcontrol r3 ba b--black-10 mv2 shadow-5 center inline pincard' id='pincard' value={row.artist} onClick={((e) => this.handleClick(e, row))} key={i}>
                          <label className='f3 b'>{row.artist}</label>
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


export default AllArtists;