import React from 'react';
import logo from './img/logo.png';
import './Navigation.css';


const Navigation = ({ onRouteChange, isSignedIn, user }) => {
	if (isSignedIn) {
		return (
			<div>
				<header>		
					<img className='logoimg' alt='logo' src={logo}/>
					<nav>
						<a href="#" id="menu-icon"></a>
						<ul>
							<li><p onClick={() => onRouteChange('home')} className='f3 link dim black pointer current'>Home</p></li>
							<li><p onClick={() => onRouteChange('submitpin')} className='f3 link dim black pointer'>Submit Pin</p></li>
							<li><p onClick={() => onRouteChange('myprofile')} className='f3 link dim black pointer'>My Profile</p></li>
							<li><p onClick={() => onRouteChange('search')} className='f3 link dim black pointer'>**Search**</p></li>
							<li><p onClick={() => onRouteChange('allartists')} className='f3 link dim black pointer'>**Artists**</p></li>
							<li><p style={{color: '#FF0000'}} className='f3'>**means WIP**</p></li>					
							<li><p onClick={() => onRouteChange('signout')} className='f3 pb2 link dim black pointer'>Sign Out</p></li>
							{user.id === 1
								?<li><p onClick={() => onRouteChange('register')} className='f3 pb2 link dim black pointer'>Register</p></li>
								:<div />
							}					
						</ul>
					</nav>
				</header>
			</div>
			/*<div id='cssmenu'>
				<ul>
					<li className='active'><p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer current'>Home</p></li>			
					<li><p onClick={() => onRouteChange('submitpin')} className='f3 link dim black underline pa3 pointer'>Submit Pin</p></li>			
					<li><p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p></li>
				</ul>
			</div>*/
		);
	} else {
		return (
			<div>
				<header>		
					<img className='logoimg' alt='logo' src={logo}/>
					<nav>
						<a href="#" id="menu-icon"></a>
						<ul>
							<li><p onClick={() => onRouteChange('allartists')} className='f3 link dim black underline pa3 pointer current'>All Artists</p></li>
							<li><p onClick={() => onRouteChange('Signin')} className='f3 link dim black underline pa3 pointer current'>Sign In</p></li>												
						</ul>
					</nav>
				</header>
			</div>
			/*<nav style={{display: 'flex', justifyContent:'flex-end'}}>
				<p onClick={() => onRouteChange('Signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
			</nav>*/
		);
	}

	
	
}

export default Navigation;

/*<nav style={{display: 'flex', justifyContent:'flex-end'}}>*/