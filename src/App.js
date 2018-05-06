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
  /*componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log)
  }*/

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
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
  }

  onRouteChange = (route) => {
    console.log('route',route)
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } else if (route === 'submitpin') {
      this.setState({isSignedIn: true})
    }

    this.setState({route: route})
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
            params={particlesOptions}
        />
        <div className='top'>
          <Logo />  
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        </div>
        {route==='home' 
          ? <div> <MySubmissions user={this.state.user} />
          {console.log(this.state.isSignedIn)}
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
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <div />
            )
        }
        {route==='submitpin' 
          ? <div>
              <SubmitPin
                user={this.state.user}
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
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
          ? <div>
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
          ? <div>
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
      </div>
    );
  }
}

export default App;
