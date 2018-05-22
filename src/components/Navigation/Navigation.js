import React from 'react';
import logo from './img/logo.png';
import './Navigation.css';


const Navigation = ({ onRouteChange, isSignedIn, user }) => {
	if (isSignedIn) {
		return (
			<div>
				<header className='navheader'>
				<table>
				<tr>
						<img onClick={() => onRouteChange('home')} className='logoimg' alt='logo' src={logo}/>
					<td className='centernavtd'>				
						<nav>						
							<ul className='nopad'>								
								<li><p onClick={() => onRouteChange('allartists')} className='link dim black pointer'>Artists</p></li>
								<li><p onClick={() => onRouteChange('home')} className='link dim black pointer current'>Home</p></li>
								<li><p onClick={() => onRouteChange('search')} className='link dim black pointer'>Search</p></li>
							</ul>
						</nav>
					</td>
					<td className='rightnavtd'>
						<nav className='hidenav rightnav'>
							<a href="#" id="menu-icon"></a>
							<ul className='nopad'>							
								<li className='hideli'><p onClick={() => onRouteChange('submitpin')} className='link dim black pointer nopad'>Submit Pin</p></li>
								<li className='hideli'><p onClick={() => onRouteChange('myprofile')} className='link dim black pointer nopad'>My Profile</p></li>
								{user.id === 1
									?<li className='hideli'><p onClick={() => onRouteChange('register')} className='pb2 link dim black pointer nopad'>Register</p></li>
									:<div style={{display:'none'}} />
								}				
								<li className='hideli'><p onClick={() => onRouteChange('signout')} className='pb2 link dim black pointer nopad'>Sign Out</p></li>
													
							</ul>
						</nav>
					</td>
					</tr>
					</table>
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
				<header className='navheader'>						
					<img onClick={() => onRouteChange('home')} className='logoimg' alt='logo' src={logo}/>
					<nav className='centernav'>						
						<ul className='nopad'>
							<li><p onClick={() => onRouteChange('allartists')} className='link dim black underline pointer current'>Artists</p></li>
							<li><p onClick={() => onRouteChange('Signin')} className='link dim black underline pointer current'>Sign In</p></li>
							<li><p onClick={() => onRouteChange('search')} className='link dim black pointer'>Search</p></li>												
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