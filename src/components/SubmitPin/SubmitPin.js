import React from 'react';
import List from '../List/List';
import FileUpload from '../FileUpload/FileUpload';
import './SubmitPin.css';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

var categories = {};
var tagtype = {};
var file = null;
var backfile = null;
var glowfile = null;
var uvfile = null;


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
      glow: '',
      uv: '',
      mod: '',
      categories: [],
      tagtype: '',
      file: '',
      backfile: '',
      glowfile: '',
      uvfile: '',
      imageURL:''
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

  
	clicked = (index) => {
		console.log(index);
	}
  
	getListData(val){
		// do not forget to bind getData in constructor
		console.log(val);
		categories.val = val.items;	
		tagtype.val = val.selectedOption;
		console.log("categories: ", categories);
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
    console.log('route')
    /*if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } else if (route === 'submitpin') {
      this.setState({isSignedIn: true})
    }*/

    this.setState({route: 'confirm'})    
  }

  onSubmitPin = () => {  	
  	//ASK IF THIS IS CORRECT AND THEN SUBMIT IMAGE/DATA TO THE DATABASE
  		

  		const now = Date.now();
  		const name = this.props.user.id + '-' + now;
  		console.log('name: ',name);
  		const data = new FormData();
	    data.append('file', file);
	    data.append('filename', name);

  		const backname = this.props.user.id + '-back-' + now;
  		console.log('backname: ',backname);
  		const backdata = new FormData();
	    backdata.append('file', backfile);
	    backdata.append('filename', backname);

	    const glowname = this.props.user.id + '-glow-' + now;
  		console.log('glowname: ',glowname);
  		const glowdata = new FormData();
	    glowdata.append('file', glowfile);
	    glowdata.append('filename', glowname);

	    const uvname = this.props.user.id + '-uv-' + now;
  		console.log('uvname: ',uvname);
  		const uvdata = new FormData();
	    uvdata.append('file', uvfile);
	    uvdata.append('filename', uvname);
      	
      	
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
          imgname: name,
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
  		
  		

	    fetch('http://104.236.62.203:3000/upload', {
	      method: 'POST',
	      body: data,
	    }).then((response) => {
	      response.json().then((body) => {
	        this.setState({ imageURL: `http://104.236.62.203:3000/${body.file}` });
	      });
	    });

	    if(backfile != null){
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
	    	fetch('http://104.236.62.203:3000/upload', {
		      method: 'POST',
		      body: uvdata,
		    }).then((response) => {
		      response.json().then((body) => {
		        this.setState({ imageURL: `http://104.236.62.203:3000/${body.file}` });
		      });
		    });
	    }
	    this.props.onRouteChange('home');
    	console.log('State: ', this.state);
    }	
    	
  }


  render() {
  	const { onRouteChange } = this.props;
  	const { route } = this.state;
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
			                <input onClick={this.onSubmitPin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Submit Pin" />
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
			              						{this.state.pinno}
				              				</td>
				              				<td align='center'>
				              					{this.state.maxno}
				              				</td>
				              				<td align='center'>
							              		{this.state.open === 'on'
							              			?'Open'
							              			:'Not open'
							              		}
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
		                		{/*	<label className='db fw6 lh-copy f6'>Image of Pin</label>
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
		                	
		                <List sendData={this.getListData} action={this.tagHandler} items={this.state.categories} />	*/}		
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
  		:<div />
  	}
	</div>
  	);
  }
}



export default SubmitPin;