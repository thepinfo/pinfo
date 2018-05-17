import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './FileUpload.css';
var Jimp = require("jimp");

let file = '';
let rResult = '';
let src = '';
let myblob = '';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file:'',imagePreviewURL: '',
    };
    

  }

  componentDidMount = () => {
    //console.log('fileupload props', this.props)
    if('getState' in this.props){
      this.setState({
        file: this.props.getState.file,
        imagePreviewURL: this.props.getState.imgURL
      })
     //console.log('File Props State',this.props.getState)
     //console.log('FileUpload State',this.state)
    }
    if('getBackState' in this.props){
      this.setState({
        file: this.props.getBackState.backfile,
        imagePreviewURL: this.props.getBackState.backURL
      })
     //console.log('backfile Props State',this.props.getState)
     //console.log('backFileUpload State',this.state)
    } 
    if('getGlowState' in this.props){
      this.setState({
        file: this.props.getGlowState.glowfile,
        imagePreviewURL: this.props.getGlowState.glowURL
      })
     //console.log('glowfile Props State',this.props.getState)
     //console.log('glowFileUpload State',this.state)
    } 
    if('getUvState' in this.props){
      this.setState({
        file: this.props.getUvState.uvfile,
        imagePreviewURL: this.props.getUvState.uvURL
      })
    // console.log('uvfile Props State',this.props.getState)
    // console.log('uvFileUpload State',this.state)
    } 
  }

  
  _crop(){
    function getCanvasBlob(canvas) {
      return new Promise(function(resolve, reject) {
        canvas.toBlob(function(blob) {
          resolve(blob)
        },'image/jpeg')
      })
    }

    var canvasBlob = getCanvasBlob(this.refs.cropper.getCroppedCanvas({fillColor: '#fff'}));

    canvasBlob.then((blob) => {
      var that = this;
      myblob = blob;
      this.setState({
          file: myblob
        })
      this.props.sendData(myblob)
    }, function(err) {
      console.log(err)
    });
  }

  changePreview = (event) => { 
       let reader = new FileReader();
	    file = this.uploadInput.files[0];

	    reader.onloadend = () => {
        var that = this;
        rResult = reader.result

        var imageSize =  Math.round(file.size/1024);
        
        if(imageSize > 2000){
          //console.log('gonna jimp')
          var stripped = rResult.replace(/^data:image\/[a-z]+;base64,/, "");
          var coded_img = new Buffer(stripped, 'base64');


          Jimp.read(coded_img).then((image) => {
               image.quality(60).getBase64(Jimp.AUTO, function (err, src) {
                              if (err) {
                                  alert(err.message)
                                  throw err
                              }
                              rResult = src
                              src = src
                              that.setState({
                                imagePreviewURL: src
                              })
                            })
          }).catch (function (err) {           
              console.log(err)           
          })
        }else{
          var stripped = rResult.replace(/^data:image\/[a-z]+;base64,/, "");
          var coded_img = new Buffer(stripped, 'base64');          

          Jimp.read(coded_img).then((image) => {             
               image.getBase64(Jimp.AUTO, function (err, src) {
                              if (err) {
                                  alert(err.message)
                                  throw err
                              }
                              rResult = src
                              src = src
                              that.setState({
                                imagePreviewURL: src
                              })
                            })
          }).catch (function (err) {           
              console.log(err)           
          })
        }        
	    }
	    reader.readAsDataURL(file)
  }


  render() {

  	let {imagePreviewURL} = this.state;
    let $imagePreview = null;
    if (imagePreviewURL) {
      $imagePreview = (
          <Cropper alt='preview' ref='cropper' style={{}}
        guides={true}
        viewMode={2}
        rotatable={true}
        dragMode={'none'}
        autoCropArea={1}
        checkOrientation={true}
        responsive={true}
        crop={this._crop.bind(this)} src={imagePreviewURL} />
        );

    } else {
      $imagePreview = (<div className="previewText"></div>);
    }

    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" onChange={this.changePreview.bind(this)} />
        </div>        
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </form>
    );
  }
}

export default FileUpload;