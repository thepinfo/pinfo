import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent:'flex-end'}}>
				<p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>			
				<p onClick={() => onRouteChange('submitpin')} className='f3 link dim black underline pa3 pointer'>Submit Pin</p>			
				<p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display: 'flex', justifyContent:'flex-end'}}>
				<p onClick={() => onRouteChange('Signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
			</nav>
		);
	}
	
}

export default Navigation;