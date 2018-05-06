/*import React from 'react';
var request = require('superagent');
var apiBaseUrl = "http://localhost:4000/";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  uploadImage(imageFile) {
    return new Promise((resolve, reject) => {
      let imageFormData = new FormData();

      imageFormData.append('imageFile', imageFile);
      
      var xhr = new XMLHttpRequest();
      
      xhr.open('post', '/upload', true);
      
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          reject(this.statusText);
        }
      };
      
      xhr.send(imageFormData);

    });
  }

  handleClick(event){
    event.preventDefault();
     console.log("File",this.state.file.size);
     let file = this.state.file;
    //var self = this;
    if(file.size>0){
      //var file = file;
      var req = request.post(apiBaseUrl+'fileupload');
      //for(var i in filesArray){
           console.log("files",file);
          req.attach(file.name,file)
      //}
      req.end(function(err,res){
        if(err){
          console.log("error ocurred");
        }
        console.log("res",res);
        alert("File printing completed")
      });
    }
    else{
      alert("Please upload some files first");
    }
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img alt='preview' src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this.handleClick(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;*/

import React, { Component } from 'react';
import './ImageUpload.css';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)


    
    //console.log('File: ',file)
  }

  logData = () => {
      this.props.sendData(this.state.file);
    //console.log('logdata')
    }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img alt='preview' src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return(
      <div>
        <input type="file" onChange={(e)=>this._handleImageChange(e)} />
        <input className='hide' type="button" value='Set Img' onClick={this.logData()} />{/*Set Img</button>*/}
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
      );    
  }
  

}

export default ImageUpload;