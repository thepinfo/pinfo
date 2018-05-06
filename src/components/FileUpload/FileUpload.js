import React from 'react';
let file = '';
class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file:'',imagePreviewURL: '',
    };

    //this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  /*handleUploadImage(ev) {
  	console.log("File: ",)
    ev.preventDefault();

    const data = new FormData();
    data.append('file', file);
    data.append('filename', file.name);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:3000/${body.file}` });
      });
    });
  }*/

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
        {/*<div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>*/}
        <div className="imgPreview">
          {$imagePreview}
        </div>
        {/*<img src={this.state.imageURL} alt="img" />*/}
      </form>
    );
  }
}

export default FileUpload;