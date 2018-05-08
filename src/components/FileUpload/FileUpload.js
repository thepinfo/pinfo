import React from 'react';
let file = '';
class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file:'',imagePreviewURL: '',
    };    
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
      $imagePreview = (<img alt='preview' src={imagePreviewURL} />);
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