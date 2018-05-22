import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import SubmitPin from './components/SubmitPin/SubmitPin';
//import ImageUploader from 'react-image-upload';
//import DisplayPin from './components/DisplayPin/DisplayPin';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import MySubmissions from './components/MySubmissions/MySubmissions';
import MyProfile from './components/MyProfile/MyProfile';
import Search from './components/Search/Search';
import SinglePin from './components/SinglePin/SinglePin';
import EditPin from './components/EditPin/EditPin';
import AllArtists from './components/AllArtists/AllArtists';
import SingleArtist from './components/SingleArtist/SingleArtist';
//import Stats from './components/Stats/Stats';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    }
  }
}

const initialState = {
      input: '',
      imageUrl: '',
      route: 'Signin',
      isSignedIn: false,
      singlePinId: '',
      singleArtist:'',
      edit: {
        name: '',
        artist: '',
        producer: '',
        year: '',
        day: '',
        month: '',
        variant: '',
        pinno: '',
        maxno: '',
        open: '',
        glow: '',
        uv: '',
        mod: '',
        soldout:'',
        damaged:'',
        about: '',
        categories: [],
        items: [],
        tagtype: '',
        file: '',
        backfile: '',
        glowfile: '',
        uvfile: '',
        imgURL:'',
        backURL:'',
        glowURL:'',
        uvURL:'',
        nsfw: '',
        drop: '',
        submitted: ''
      },
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }

} 

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
  }

  loadPin = (data) => {
    //console.log('loadPin', data)
    this.setState({singlePinId: data})
  }

  loadArtist = (data) => {
    //console.log('loadArtist', data)
    this.setState({singleArtist: data})
  }
  /*componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log)
  }*/

  /**
-   * Calculate & Update state of new dimensions
-   */
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  /*onButtonSubmit = () => {
    fetch('http://104.236.62.203:3000/image', {
        method: 'put',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id
        })
    })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, { entries: count}))
      })
  }*/

  onRouteChange = (route) => {
    //console.log('route',route)
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } else if (route === 'submitpin') {
      this.setState({isSignedIn: true})
    }

    this.setState({route: route})
  }

  setEdit = (row) => {
    this.setState({edit: {
        name: row.name,
        artist: row.artist,
        producer: row.producer,
        year: row.year,
        month: row.month,
        day: row.day,
        nsfw: row.nsfw,
        drop: row.drop,
        variant: row.variant,
        pinno: row.pinno,
        maxno: row.maxno,
        glow: row.glow,
        uv: row.uv,
        soldout: row.soldout,
        damaged: row.damaged,
        categories: row.categories,
        about: row.about,
        userid: row.id,
        imgname: row.imgname,
        backimgname: row.backname,
        glowimgname: row.glowname,
        uvimgname: row.uvname,        
        /*file: file,
        backfile: backfile,
        glowfile: glowfile,
        uvfile: uvfile,
        imgURL: imgURL,
        backURL: backURL,
        glowURL: glowURL,
        uvURL: uvURL,*/
        submitted: row.now,
    }})
     setTimeout(function() { 
      console.log('edit state', this.state.edit) 
      console.log('app state', this.state) 
      this.onRouteChange('editpin')
       }.bind(this), 500);
    
  }


  

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        {/*<Particles className='particles'
            params={particlesOptions}
        />*/}
        <div className='top'>
          {/*<Logo /> */} 
          <Navigation isSignedIn={isSignedIn} user={this.state.user} onRouteChange={this.onRouteChange} />
        </div>
        {route==='home' 
          ? <div className='contentdiv'> <MySubmissions route={this.state.route} user={this.state.user} setEdit={this.setEdit} loadPin={this.loadPin} onRouteChange={this.onRouteChange} />
          
            {/*isSignedIn==='true'
              ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              :<div>Hi</div>*/
            }           
              {/*<SubmitPin
                user={this.state.user}
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
              />*/}
              
              {/*
                
                <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              */}
            </div>
          : (
              route === 'Signin' 
              ? <div  className='contentdiv'><Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /></div>
              : <div />
            )
        }
        {route==='mysubmissions' 
          ? <div className='contentdiv'> <MySubmissions user={this.state.user} setEdit={this.setEdit} route={this.state.route} loadPin={this.loadPin} onRouteChange={this.onRouteChange} />
          
            {/*isSignedIn==='true'
              ?<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              :<div>Hi</div>*/
            }           
              {/*<SubmitPin
                user={this.state.user}
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
              />*/}
              
              {/*
                
                <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              */}
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
        {route==='submitpin' 
          ? <div className='submitdiv center'>
              <SubmitPin
                user={this.state.user}
                onInputChange={this.onInputChange} 
                /*onButtonSubmit={this.onButtonSubmit}*/
                onRouteChange={this.onRouteChange}
              />
              
              {/*<DisplayPin imageUrl={imageUrl} />
              <FaceRecognition />
                <Stats name={this.state.user.name} entries={this.state.user.entries}/>
              
              */}
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
        {route==='signout' 
          ? <div className='contentdiv'>
              <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              
              {/*<DisplayPin imageUrl={imageUrl} />
              <FaceRecognition />
                <Stats name={this.state.user.name} entries={this.state.user.entries}/>
              
              */}
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
        {route==='register' 
          ? <div className='contentdiv'>
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              
              {/*<DisplayPin imageUrl={imageUrl} />
              <FaceRecognition />
                <Stats name={this.state.user.name} entries={this.state.user.entries}/>
              
              */}
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
        {route==='myprofile' 
          ? <div className='contentdiv'>
              <MyProfile user={this.state.user} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              
              {/*<DisplayPin imageUrl={imageUrl} />
              <FaceRecognition />
                <Stats name={this.state.user.name} entries={this.state.user.entries}/>
              
              */}
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
        {route==='search' 
          ? <div className='contentdiv'>            
              
              
                 <Search user={this.state.user} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />              
              
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
        {route==='singlepin' 
          ? <div className='contentdiv center'>
              <SinglePin
                pin={this.state.singlePinId}
                route={this.state.route}
                onRouteChange={this.onRouteChange}
              />
              
              {/*<DisplayPin imageUrl={imageUrl} />
              <FaceRecognition />
                <Stats name={this.state.user.name} entries={this.state.user.entries}/>
              
              */}
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
        {route==='editpin' 
          ? <div className='contentdiv center'>
              <EditPin
                pin={this.state.edit}
                route={this.state.route}
                onRouteChange={this.onRouteChange}
              />
              
              {/*<DisplayPin imageUrl={imageUrl} />
              <FaceRecognition />
                <Stats name={this.state.user.name} entries={this.state.user.entries}/>
              
              */}
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
        {route==='allartists' 
          ? <div className='contentdiv center'>
              <AllArtists
                loadArtist={this.loadArtist}
                artist={this.state.singleArtist}
                onRouteChange={this.onRouteChange}
              />
              
              {/*<DisplayPin imageUrl={imageUrl} />
              <FaceRecognition />
                <Stats name={this.state.user.name} entries={this.state.user.entries}/>
              
              */}
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
        {route==='singleartist' 
          ? <div className='contentdiv center'>
              <SingleArtist
                artist={this.state.singleArtist}
                loadPin={this.loadPin}
                onRouteChange={this.onRouteChange}
              />
              
              {/*<DisplayPin imageUrl={imageUrl} />
              <FaceRecognition />
                <Stats name={this.state.user.name} entries={this.state.user.entries}/>
              
              */}
            </div>
          : (
              route === 'home' 
              ? <div />
              : <div />
            )
        }
      </div>
    );
  }
}

export default App;
