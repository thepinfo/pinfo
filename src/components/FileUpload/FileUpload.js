import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

let file = '';
class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file:'',imagePreviewURL: '',
    };    
  }
  
  _crop(){
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  changePreview = (event) => { 
       console.log('event',this.uploadInput.files[0])
       let reader = new FileReader();
	    file = this.uploadInput.files[0];

	    reader.onloadend = () => {
	      this.setState({
	        file: file,
	        imagePreviewURL: reader.result
	      });
	    }

	    reader.readAsDataURL(file)
	    this.props.sendData(file);
  }


  render() {

  	let {imagePreviewURL} = this.state;
    let $imagePreview = null;
    if (imagePreviewURL) {
      $imagePreview = (<Cropper alt='preview' ref='cropper' style={{height: 400, width: '100%'}} aspectRatio={16 / 9}
        guides={false}
        checkOrientation={true}
        crop={this._crop.bind(this)} src={imagePreviewURL} />);
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