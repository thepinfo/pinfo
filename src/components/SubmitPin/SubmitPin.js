import React from 'react';
import List from '../List/List';
import Items from "../List/Items";
import FileUpload from '../FileUpload/FileUpload';
import './SubmitPin.css';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

var categories = {};
var tagtype = {};
var file = null;
var imgname = '';
var data = null;
var backfile = null;
var backdata = null;
var backname = '';
var glowfile = null;
var glowdata = null;
var glowname = '';
var uvfile = null;
var uvdata = null;
var uvname = '';
var imgURL = '';
var backURL = '';
var glowURL = '';
var uvURL = '';
var now = '';

class SubmitPin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'form',
      name: '',
      artist: '',
      producer: '',
      year: '',
      variant: '',
      pinno: '',
      maxno: '',
      open: '',
      glow: '',
      uv: '',
      mod: '',
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
      uvURL:''
    }
    this.getListData = this.getListData.bind(this);
    this.getImgData = this.getImgData.bind(this);
    this.getBackImgData = this.getBackImgData.bind(this);
    this.getGlowImgData = this.getGlowImgData.bind(this);
    this.getUvImgData = this.getUvImgData.bind(this);    
    console.log('User:',this.props.user);    
  }


  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onArtistChange = (event) => {
    this.setState({artist: event.target.value})
  }

  onProducerChange = (event) => {
    this.setState({producer: event.target.value})
  }

  onYearChange = (event) => {
    this.setState({year: event.target.value})
  }

  onVariantChange = (event) => {
    this.setState({variant: event.target.value})
  }

  onPinNoChange = (event) => {
    this.setState({pinno: event.target.value})
  }

  onMaxNoChange = (event) => {
    this.setState({maxno: event.target.value})
  }

  onOpenChange = (event) => {
    this.setState({open: event.target.value})
  }

  
  onGlowChange = (event) => {
    this.setState({glow: event.target.value})
    var glowbox = document.getElementById("glow");
  	var glowimg = document.getElementById("glowimg");    
	glowimg.style.display = glowimg.style.display === 'none' ? '' : 'none';
  }

  onUvChange = (event) => {
    this.setState({uv: event.target.value})
    var uvbox = document.getElementById("uv");
  	var uvimg = document.getElementById("uvimg");    
	uvimg.style.display = uvimg.style.display === 'none' ? '' : 'none';
  }

  onModChange = (event) => {
    this.setState({mod: event.target.value})
  }

  onAboutChange = (event) => {
    this.setState({about: event.target.value})
  }

  onTagChange = (event) => {
    this.setState({tag: event.target.value})
  }//deprecated?

	
  onAddTag = (event) => {
    event.preventDefault();
    this.setState({
    	tag: '',
      	categories: [...this.state.categories, this.state.tag]
    });
    console.log('logging categores',this.state.categories)
  }

  /*checked(){
  	console.log("Glow",this.state.glow)
  	if(this.state.glow == 'on'){
  		document.getElementById("glow").checked = true;
  	}
  }*/

  
	/*clicked = (index) => {
		console.log(index);
	}*/
  	setCatState = (val) => {
  		this.setState({
        	categories: categories.val,
        	tagtype: tagtype.val,
        	items: categories.val
        });
        console.log("categories: ", categories); 	
  	}

	getListData = (val) => {
		// do not forget to bind getData in constructor
		//console.log("val",val);
		categories.val = val.items;	
		//console.log("val.items",val.items);
		//console.log("categories.val",categories.val);
		tagtype.val = val.selectedOption;		
		this.setCatState(val);			
	}

	getImgData(val){
	    // do not forget to bind getData in constructor
	    //console.log(val);
	    file = val;    
	    console.log("Image: ", file);
    	this.setState({
        	file: file
        });   
	}

	getBackImgData(val){
	    // do not forget to bind getData in constructor
	    //console.log(val);
	    backfile = val;    
	    console.log("Image: ", backfile);
    	this.setState({
        	backfile: backfile
        });   
	}

	getGlowImgData(val){
	    // do not forget to bind getData in constructor
	    //console.log(val);
	    glowfile = val;    
	    console.log("glowImage: ", glowfile);
    	this.setState({
        	glowfile: glowfile
        });   
	}

	getUvImgData(val){
	    // do not forget to bind getData in constructor
	    //console.log(val);
	    uvfile = val;    
	    console.log("uvImage: ", uvfile);
    	this.setState({
        	uvfile: uvfile
        });   
	}


onSubmitClick = () => {
	now = Date.now();
  		imgname = this.props.user.id + '-' + now;
  		console.log('name: ',imgname);
  		data = new FormData();
	    data.append('file', file);
	    data.append('filename', imgname);
	    imgURL = URL.createObjectURL(file);

	    if(backfile != null){
	  		backname = this.props.user.id + '-back-' + now;
	  		console.log('backname: ',backname);
	  		backdata = new FormData();
		    backdata.append('file', backfile);
		    backdata.append('filename', backname);
		    backURL = URL.createObjectURL(backfile);
		}

		if(glowfile != null){
		    glowname = this.props.user.id + '-glow-' + now;
	  		console.log('glowname: ',glowname);
	  		glowdata = new FormData();
		    glowdata.append('file', glowfile);
		    glowdata.append('filename', glowname);
		    glowURL = URL.createObjectURL(glowfile);
		}

	    if(uvfile != null){
		    uvname = this.props.user.id + '-uv-' + now;
	  		console.log('uvname: ',uvname);
	  		uvdata = new FormData();
		    uvdata.append('file', uvfile);
		    uvdata.append('filename', uvname);
		    uvURL = URL.createObjectURL(uvfile);
		}
      	
      	
        this.setState({
        	categories: categories.val,
        	tagtype: tagtype.val,
        	file: file,
        	backfile: backfile,
        	glowfile: glowfile,
        	uvfile: uvfile,
        	imgURL: imgURL,
        	backURL: backURL,
        	glowURL: glowURL,
        	uvURL: uvURL
        });     
    console.log('route')
    console.log('SubmitClick State:',this.state)
    /*if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } else if (route === 'submitpin') {
      this.setState({isSignedIn: true})
    }*/

    this.setState({route: 'confirm'})    
  }

  
  onExitClick = () => {
  	var confirm = window.confirm('Are you sure?');
    console.log('route')
    /*if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } else if (route === 'submitpin') {
      this.setState({isSignedIn: true})
    }*/
    //return confirm('Are you sure you would like to cancel?');
    if (confirm == true){
    	this.props.onRouteChange('home'); 
    }      
  }

  onEditClick = () => {
    console.log('route')
    
    if(this.state.glow == 'on'){
    	console.log('glow',this.state.glow)
    }
    /*if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } else if (route === 'submitpin') {
      this.setState({isSignedIn: true})
    }*/

    this.setState({route: 'edit'})    
  }

  onSubmitPin = () => {  	
  	//ASK IF THIS IS CORRECT AND THEN SUBMIT IMAGE/DATA TO THE DATABASE
  		

  		
  		imgname = this.props.user.id + '-' + now;
  		console.log('name: ',imgname);
  		data = new FormData();
	    data.append('file', file);
	    data.append('filename', imgname);

  		

	    

	    
      	
      	
        this.setState({
        	categories: categories.val,
        	tagtype: tagtype.val,
        	file: file,
        	backfile: backfile,
        	glowfile: glowfile,
        	uvfile: uvfile
        });     	

     	console.log("file before if: ", file);
    if(file == null){
    	alert('An image is required');
    }else{  		

	    fetch('http://104.236.62.203:3000/upload', {
	      method: 'POST',
	      body: data,
	    }).then((response) => {
	      response.json().then((body) => {
	        this.setState({ imageURL: `http://104.236.62.203:3000/${body.file}` });
	      });
	    });

	    if(backfile != null){
	    	backname = this.props.user.id + '-back-' + now;
	  		console.log('backname: ',backname);
	  		backdata = new FormData();
		    backdata.append('file', backfile);
		    backdata.append('filename', backname);
	    	fetch('http://104.236.62.203:3000/upload', {
		      method: 'POST',
		      body: backdata,
		    }).then((response) => {
		      response.json().then((body) => {
		        this.setState({ imageURL: `http://104.236.62.203:3000/${body.file}` });
		      });
		    });
	    }

	    if(glowfile != null){
	    	glowname = this.props.user.id + '-glow-' + now;
	  		console.log('glowname: ',glowname);
	  		glowdata = new FormData();
		    glowdata.append('file', glowfile);
		    glowdata.append('filename', glowname);
	    	fetch('http://104.236.62.203:3000/upload', {
		      method: 'POST',
		      body: glowdata,
		    }).then((response) => {
		      response.json().then((body) => {
		        this.setState({ imageURL: `http://104.236.62.203:3000/${body.file}` });
		      });
		    });
	    }

	    if(uvfile != null){
	    	const uvname = this.props.user.id + '-uv-' + now;
	  		console.log('uvname: ',uvname);
	  		const uvdata = new FormData();
		    uvdata.append('file', uvfile);
		    uvdata.append('filename', uvname);
	    	fetch('http://104.236.62.203:3000/upload', {
		      method: 'POST',
		      body: uvdata,
		    }).then((response) => {
		      response.json().then((body) => {
		        this.setState({ imageURL: `http://104.236.62.203:3000/${body.file}` });
		      });
		    });
	    }

	    fetch('http://104.236.62.203:3000/image', {
	        method: 'put',
	        headers : { 
	        'Content-Type': 'application/json',
	        'Accept': 'application/json'
	       },
	        body: JSON.stringify({
	          name: this.state.name,
	          artist: this.state.artist,
	          producer: this.state.producer,
	          year: this.state.year,
	          variant: this.state.variant,
	          pinno: this.state.pinno,
	          maxno: this.state.maxno,
	          glow: this.state.glow,
	          uv: this.state.uv,
	          categories: this.state.categories,
	          about: this.state.about,
	          userid: this.props.user.id,
	          imgname: imgname,
	          backimgname: backname,
	          glowimgname: glowname,
	          uvimgname: uvname
	          //categories: this.state.categories,
	          //file: this.state.file
	        })
	      })        
	      .then(function(response) {
	        return response.json()
	      }).then(function(body) {
	        console.log(body);
	      });

	    this.props.onRouteChange('home');
    	console.log('State: ', this.state);
    }	
    	
  }


  render() {
  	const { onRouteChange } = this.props;
  	const { route, open, glow, uv, mod, imgURL, backURL, glowURL, uvURL } = this.state;
  	return (<div className='contentdiv'>
  		{route==='form'
  		?<div className='br3 ba b--black-10 mv4 mw-100 shadow-5 center divblock'>
			
			<table className="ba b--transparent ph0 mh0 black-80 v-top">
			<tbody>
			
				<tr>
					<td>
						<div className="f3 fw6 ph0 mh0">Submit a Pin</div>
					</td>
				</tr>
				<tr>
					<td className="td-70">
				            
				              <div className="">
				                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				                <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" placeholder="What is it called?"/>
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="artist">Artist</label>
				                <input onChange={this.onArtistChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="artist"  id="artist" placeholder="Who created it?"/>
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="producer">Producer</label>
				                <input onChange={this.onProducerChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="producer"  id="producer" placeholder="Who released it?"/>
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="year">Year</label>
				                <input onChange={this.onYearChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="year"  id="year" placeholder="When was it released?"/>
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="variant">Variant/Colorway</label>
				                <input onChange={this.onVariantChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="variant"  id="variant" placeholder="What variant is this?"/>
				              </div>
				              <div className="mt3"> 
				                <label className="db fw6 lh-copy f6" htmlFor="about">Write anything you want about the pin </label>
		        				<input type='text' id='about' onChange={this.onAboutChange} className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' />
		        			  </div>
				              <div className="mt3 center">
				              	<table className='center pintable'>
				              		<tbody>
				              			<tr>
				              				<td align='center'>
				              					<label className="db fw6 lh-copy f6" htmlFor="pinno">Pin #</label>
				              				</td>
				              				<td align='center'> 
				              					<label className="db fw6 lh-copy f6" htmlFor="maxno">Max #</label>
				              				</td>
				              				<td align='center'>
				              					<label className="db fw6 lh-copy f6" htmlFor="open">Open #</label>
				              				</td>
			              				</tr>
			              				<tr>
			              					<td align='center'>
			              						<input onChange={this.onPinNoChange} className="pa2 input-reset ba bg-transparent hover-white w-100" type="text" name="pinno"  id="pinno" />
				              				</td>
				              				<td align='center'>
				              					<input onChange={this.onMaxNoChange} className="b pa2 input-reset ba bg-transparent hover-white w-100" type="text" name="maxno"  id="maxno" />
				              				</td>
				              				<td align='center'>
							              		<input onChange={this.onOpenChange} className="" type="checkbox" name="open"  id="open" />
							              	</td>
			              				</tr>
						              	<tr>
							              	<td align='center'>
							              		<label className="db fw6 lh-copy f6" htmlFor="glow">Glow</label>
							              	</td>
							              	<td align='center'>
							              		<label className="db fw6 lh-copy f6" htmlFor="uv">UV</label>
							              	</td>
							              	<td align='center'>
							              		<label className="db fw6 lh-copy f6" htmlFor="uv">Mod</label>
							              	</td>
						              	</tr>
						              	<tr>
							              	<td align='center'>
							              		<input onChange={this.onGlowChange} className="" type="checkbox" name="glow"  id="glow" />
							              	</td>
							              	<td align='center'>
							              		<input onChange={this.onUvChange} className="" type="checkbox" name="uv"  id="uv" />
							              	</td>
							              	<td align='center'>
							              		<input onChange={this.onModChange} className="" type="checkbox" name="mod"  id="mod" />
							              	</td>
						              	</tr>
					              	</tbody>
					              	</table>				                
					              </div>

		                			
		            		 				           
				        </td>				       
	        	</tr>
	        	<tr>
	        		<td>		                  		
		                			<label className='db fw6 lh-copy f6'>Image of Pin</label>
		                			<div className='ba'>
		                			<FileUpload sendData={this.getImgData} />
		                			</div>
		                			<div id='backimg'>
		                				<label className='db fw6 lh-copy f6'>Image of Back</label>
			                			<div className='ba' >
			                				<FileUpload sendData={this.getBackImgData} />
			                			</div>
		                			</div>
		                			<div id='glowimg' style={{display: 'none'}}>
		                				<label className='db fw6 lh-copy f6'>Image of Glow</label>
			                			<div className='ba' >
			                				<FileUpload sendData={this.getGlowImgData} />
			                			</div>
		                			</div>
		                			<div id='uvimg' style={{display: 'none'}}>
			                			<label className='db fw6 lh-copy f6'>Image of UV</label>
			                			<div className='ba'>
			                				<FileUpload sendData={this.getUvImgData} />
			                			</div>
		                			</div>
		                	
		                <List sendData={this.getListData} action={this.tagHandler} items={this.state.categories} />			
	        		</td>
	        	</tr>
	        	<tr>
	        		<td>	        			
	        			<div className="">
			                <input onClick={this.onSubmitClick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Submit Pin" />
			            </div>	
		            </td>
	            </tr>	
        	</tbody>
        	</table>
        	
		</div>
		:<div></div>
	}
	{route==='confirm'
  		?<div className='br3 ba b--black-10 mv4 mw-100 shadow-5 center divblock'>
			
			<table className="ba b--transparent ph0 mh0 black-80 v-top">
			<tbody>
			
				<tr>
					<td>
						<div className="f3 fw6 ph0 mh0">Confirm Pin</div>
					</td>
				</tr>
				<tr>
					<td className="td-70">
				            
				              <div className="">
				                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				                {this.state.name}
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="artist">Artist</label>
				                {this.state.artist}
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="producer">Producer</label>
				                {this.state.producer}
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="year">Year</label>
				                {this.state.year}
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="variant">Variant/Colorway</label>
				                {this.state.variant}
				              </div>
				              <div className="mt3"> 
				                <label className="db fw6 lh-copy f6" htmlFor="about">About</label>
		        				{this.state.about}
		        			  </div>
				              <div className="mt3 center divblock">
				              	<table className='center pintable'>
				              		<tbody align='center'>
				              			<tr align='center'>
				              				<td align='center'>
				              					<label className="db fw6 lh-copy f6" htmlFor="pinno">Pin #</label>
				              				</td>
				              				<td align='center'> 
				              					<label className="db fw6 lh-copy f6" htmlFor="maxno">Max #</label>
				              				</td>
				              				<td align='center'>
				              					<label className="db fw6 lh-copy f6" htmlFor="open">Open #</label>
				              				</td>
			              				</tr>
			              				<tr>
			              					<td align='center'>
			              						{this.state.pinno}
				              				</td>
				              				<td align='center'>
				              					{this.state.maxno}
				              				</td>
				              				<td align='center'>
							              		{this.state.open}
							              	</td>
			              				</tr>
						              	<tr>
							              	<td align='center'>
							              		<label className="db fw6 lh-copy f6" htmlFor="glow">Glow</label>
							              	</td>
							              	<td align='center'>
							              		<label className="db fw6 lh-copy f6" htmlFor="uv">UV</label>
							              	</td>
							              	<td align='center'>
							              		<label className="db fw6 lh-copy f6" htmlFor="uv">Mod</label>
							              	</td>
						              	</tr>
						              	<tr>
							              	<td align='center'>
							              		{this.state.glow}
							              	</td>
							              	<td align='center'>
							              		{this.state.uv}
							              	</td>
							              	<td align='center'>
							              		{this.state.mod}
							              	</td>
						              	</tr>
					              	</tbody>
					              	</table>				                
					              </div>

		                			
		            		 				           
				        </td>				       
	        	</tr>
	        	<tr>
	        		<td>		                  		
		                			<label className='db fw6 lh-copy f6'>Image of Pin</label>
		                			<div className='ba'>
		                				<img alt='preview' src={imgURL} />
		                			</div>
		                			<div id='backimg'>
		                				<label className='db fw6 lh-copy f6'>Image of Back</label>
			                			<div className='ba' >
			                				<img alt='' src={backURL} />
			                			</div>
		                			</div>
		                			<div id='glowimg'>
		                				<label className='db fw6 lh-copy f6'>Image of Glow</label>
			                			<div className='ba' >
			                				<img alt='' src={glowURL} />
			                			</div>
		                			</div>
		                			<div id='uvimg'>
			                			<label className='db fw6 lh-copy f6'>Image of UV</label>
			                			<div className='ba'>
			                				<img alt='' src={uvURL} />
			                			</div>
		                			</div>
		                	
		                <Items entries={this.state.categories} />			
	        		</td>
	        	</tr>
	        	<tr>
	        		<td>	        			
		                <input onClick={this.onEditClick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Edit" />		                   			
		                <input onClick={this.onSubmitPin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Submit Pin" />		          
		                <input onClick={this.onExitClick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Exit" />			          	
		            </td>
	            </tr>	
        	</tbody>
        	</table>
        	
		</div>
  		:<div />
  	}
  	{route==='edit'
  		?<div className='br3 ba b--black-10 mv4 mw-100 shadow-5 center divblock'>
			
			<table className="ba b--transparent ph0 mh0 black-80 v-top">
			<tbody>
			
				<tr>
					<td>
						<div className="f3 fw6 ph0 mh0">Submit a Pin</div>
					</td>
				</tr>
				<tr>
					<td className="td-70">
				            
				              <div className="">
				                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				                <input onChange={this.onNameChange} value={this.state.name} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" placeholder="What is it called?"/>
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="artist">Artist</label>
				                <input onChange={this.onArtistChange} value={this.state.artist} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="artist"  id="artist" placeholder="Who created it?"/>
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="producer">Producer</label>
				                <input onChange={this.onProducerChange} value={this.state.producer} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="producer"  id="producer" placeholder="Who released it?"/>
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="year">Year</label>
				                <input onChange={this.onYearChange} value={this.state.year} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="year"  id="year" placeholder="When was it released?"/>
				              </div>
				              <div className="mt3">
				                <label className="db fw6 lh-copy f6" htmlFor="variant">Variant/Colorway</label>
				                <input onChange={this.onVariantChange} value={this.state.variant} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="variant"  id="variant" placeholder="What variant is this?"/>
				              </div>
				              <div className="mt3"> 
				                <label className="db fw6 lh-copy f6" htmlFor="about">Write anything you want about the pin </label>
		        				<input type='text' id='about' onChange={this.onAboutChange} value={this.state.about} className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' />
		        			  </div>
				              <div className="mt3 center">
				              	<table className='center pintable'>
				              		<tbody>
				              			<tr>
				              				<td align='center'>
				              					<label className="db fw6 lh-copy f6" htmlFor="pinno">Pin #</label>
				              				</td>
				              				<td align='center'> 
				              					<label className="db fw6 lh-copy f6" htmlFor="maxno">Max #</label>
				              				</td>
				              				<td align='center'>
				              					<label className="db fw6 lh-copy f6" htmlFor="open">Open #</label>
				              				</td>
			              				</tr>
			              				<tr>
			              					<td align='center'>
			              						<input onChange={this.onPinNoChange} value={this.state.pinno} className="pa2 input-reset ba bg-transparent hover-white w-100" type="text" name="pinno"  id="pinno" />
				              				</td>
				              				<td align='center'>
				              					<input onChange={this.onMaxNoChange} value={this.state.maxno} className="b pa2 input-reset ba bg-transparent hover-white w-100" type="text" name="maxno"  id="maxno" />
				              				</td>
				              				<td align='center'>
							              		<input onChange={this.onOpenChange} checked={this.state.open} className="" type="checkbox" name="open"  id="open" />
							              	</td>
			              				</tr>
						              	<tr>
							              	<td align='center'>
							              		<label className="db fw6 lh-copy f6" htmlFor="glow">Glow</label>
							              	</td>
							              	<td align='center'>
							              		<label className="db fw6 lh-copy f6" htmlFor="uv">UV</label>
							              	</td>
							              	<td align='center'>
							              		<label className="db fw6 lh-copy f6" htmlFor="uv">Mod</label>
							              	</td>
						              	</tr>
						              	<tr>
							              	<td align='center'>
							              		<input onChange={this.onGlowChange} checked={this.state.glow} className="" type="checkbox" name="glow"  id="glow" />
							              	</td>
							              	<td align='center'>
							              		<input onChange={this.onUvChange} checked={this.state.uv} className="" type="checkbox" name="uv"  id="uv" />
							              	</td>
							              	<td align='center'>
							              		<input onChange={this.onModChange} checked={this.state.mod} className="" type="checkbox" name="mod"  id="mod" />
							              	</td>
						              	</tr>
					              	</tbody>
					              	</table>				                
					              </div>

		                			
		            		 				           
				        </td>				       
	        	</tr>
	        	<tr>
	        		<td>
	        				                  		
		                			<label className='db fw6 lh-copy f6'>Image of Pin</label>
		                			<div className='ba'>
		                			<FileUpload sendData={this.getImgData} />
		                			</div>
		                			<div id='backimg'>
		                				<label className='db fw6 lh-copy f6'>Image of Back</label>
			                			<div className='ba' >
			                				<FileUpload sendData={this.getBackImgData} />
			                			</div>
		                			</div>
		                			<div id='glowimg' style={{display: 'none'}}>
		                				<label className='db fw6 lh-copy f6'>Image of Glow</label>
			                			<div className='ba' >
			                				<FileUpload sendData={this.getGlowImgData} />
			                			</div>
		                			</div>
		                			<div id='uvimg' style={{display: 'none'}}>
			                			<label className='db fw6 lh-copy f6'>Image of UV</label>
			                			<div className='ba'>
			                				<FileUpload sendData={this.getUvImgData} />
			                			</div>
		                			</div>
		                	
		                <List sendData={this.getListData} action={this.tagHandler} items={this.state.categories} />
		            	

	        		</td>
	        	</tr>
	        	<tr>
	        		<td>	        			
	        			<div className="">
			                <input onClick={this.onSubmitClick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Submit Pin" />
			            </div>	
		            </td>
	            </tr>	
        	</tbody>
        	</table>
        	
		</div>
		:<div></div>
	}
	</div>
  	);
  }
}



export default SubmitPin;