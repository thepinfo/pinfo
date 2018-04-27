import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import SubmitPin from './components/SubmitPin/SubmitPin';
import DisplayPin from './components/DisplayPin/DisplayPin';
import Signin from './components/Signin/Signin';
import Stats from './components/Stats/Stats';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
            params={particlesOptions}
        />
        <Navigation />
        <Signin />
        <Logo />
        <Stats />
        <SubmitPin
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <DisplayPin imageUrl={this.state.imageUrl} />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
