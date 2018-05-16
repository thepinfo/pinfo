import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './FileUpload.css';
/*require('jimp/browser/lib/jimp');
const jimp = window.Jimp;;*/

var Jimp = require("jimp");

let file = '';
let rResult = '';
let src = '';
let myblob = '';
//let canvas = "this.refs.cropper.getCroppedCanvas({fillColor: '#fff'})";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file:'',imagePreviewURL: '',
    };    
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
      // do stuff with blob
      myblob = blob;
      //console.log("Blob type:", myblob.type)
      //console.log("Blob size:", myblob.size)
      this.setState({
          file: myblob
          //imagePreviewURL: src
        })

      this.props.sendData(myblob)
  
      //console.log("Blob state " + this.state); // getting value after the console outside
    }, function(err) {
      console.log(err)
    });
    // image in dataUrl
    //console.log(this.refs.cropper.getCroppedCanvas().toDataURL())
    /*let cropperFile = this.refs.cropper.getCroppedCanvas({fillColor: '#fff'}).toBlob(function(blob) {                         
                              myblob = blob;
                              console.log("inside " + myblob); // getting value after the console outside
                           });
    this.setState({
          file: cropperFile,
          //imagePreviewURL: src
        })
    console.log("Cropper State", this.state)*/
  }

  changePreview = (event) => { 
       //console.log('event',this.uploadInput.files[0])
       let reader = new FileReader();
	    file = this.uploadInput.files[0];



      //Jimp code goes here or maybe inside the reader.onloaded?
      /*Jimp.read(file, function (image) {
          console.log("jimp caught file?")
          file.greyscale().getBase64(Jimp.AUTO, function (err, src) {
                              if (err) {
                                  alert(err.message)
                                  throw err
                              }
                              rResult = src
                              console.log("pic",rResult)})

      }).catch(function (err) {
          console.log("jimp caught these hands?",err)
          // handle an exception
      })*/

      /*Jimp.read(file)
            .then((image) => {
              return new Promise((resolve, reject) => {
                image
                  .clone()
                  .quality(60)
                  .getBase64(Jimp.AUTO, function (err, src) {
                              if (err) {
                                  alert(err.message)
                                  throw err
                              }
                              rResult = src
                              console.log("pic",rResult)})
                  
              })
            })
            .then((image) => {
              console.log(image);
            })
            .catch((error) => {
              console.error(error);
            })*/


      //will need to make sure image preview is set before this calls
      //let readerPromise = function() {}
	    reader.onloadend = () => {
        var that = this;
        rResult = reader.result

        var imageSize =  Math.round(file.size/1024);

          //console.log('imageSizeKB', imageSize)

        
        if(imageSize > 2000){
          console.log('gonna jimp')
          //console.log("rResult",rResult)
          var stripped = rResult.replace(/^data:image\/[a-z]+;base64,/, "");
          //console.log("stripped",stripped)
          var coded_img = new Buffer(stripped, 'base64');
          //console.log("coded_img",coded_img)

          /*Jimp.read(file)
            .then((image) => {
              return new Promise((resolve, reject) => {
                image
                  .clone()
                  .quality(60)
                  .getBase64(Jimp.AUTO, function (err, src) {
                              if (err) {
                                  alert(err.message)
                                  throw err
                              }
                              rResult = src
                              console.log("pic",rResult)})
                  
              })
            })
            .then((image) => {
              console.log(image);
            })
            .catch((error) => {
              console.error(error);
            })*/

          Jimp.read(coded_img).then((image) => {
              //console.log(img.getMIME(), img.getExtension());
              //var img = dropShadow.call(img, 20, 20, 20, 0.3)
              //console.log(img);
               //image.exifRotate(image)
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
                              //console.log("pic",rResult)
                              //console.log("src",src)
                            })
          }).catch (function (err) {
           
              console.log(err)
           
          })
        }else{
          //console.log('gonna jimp less than 2mb')
          //console.log("rResult",rResult)
          var stripped = rResult.replace(/^data:image\/[a-z]+;base64,/, "");
          //console.log("stripped",stripped)
          var coded_img = new Buffer(stripped, 'base64');
          //console.log("coded_img",coded_img)

          /*Jimp.read(file)
            .then((image) => {
              return new Promise((resolve, reject) => {
                image
                  .clone()
                  .quality(60)
                  .getBase64(Jimp.AUTO, function (err, src) {
                              if (err) {
                                  alert(err.message)
                                  throw err
                              }
                              rResult = src
                              console.log("pic",rResult)})
                  
              })
            })
            .then((image) => {
              console.log(image);
            })
            .catch((error) => {
              console.error(error);
            })*/

          Jimp.read(coded_img).then((image) => {
              //console.log(img.getMIME(), img.getExtension());
              //var img = dropShadow.call(img, 20, 20, 20, 0.3)
              //console.log(img);
               //image.exifRotate(image)
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
                              //console.log("pic",rResult)
                              //console.log("src",src)
                            })
          }).catch (function (err) {
           
              console.log(err)
           
          })
        }
        //console.log("src2",src)
	      /*this.setState({
	        file: file,
	        //imagePreviewURL: src
	      })*/
	    }

      //console.log('imagePreviewURL',rResult)

	    reader.readAsDataURL(file)

      //This is when you send file back to submit and will need to make sure by this point it is edited
	    //this.props.sendData(file);
  }


  render() {

  	let {imagePreviewURL} = this.state;
    let $imagePreview = null;
    if (imagePreviewURL) {
      $imagePreview = (
          <Cropper alt='preview' ref='cropper' style={{}}
        guides={true}
        viewMode={3}
        rotatable={true}
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


{/*<img alt='preview' src={imagePreviewURL} />

<Cropper alt='preview' ref='cropper' style={{height: 400, width: '100%'}} aspectRatio={16 / 9}
        guides={false}
        checkOrientation={true}
        crop={this._crop.bind(this)} src={imagePreviewURL} />




      <Cropper alt='preview' ref='cropper' style={{height: 400, width: '100%'}} aspectRatio={16 / 9}
        guides={false}
        checkOrientation={true}
        crop={this._crop.bind(this)} src={imagePreviewURL} />*/}