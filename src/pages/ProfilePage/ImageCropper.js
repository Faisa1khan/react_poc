import React, { Component, Fragment } from "react";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';


class ImageCropper extends Component{
    constructor(args){
        super(args);
        this.state = ImageCropper.getInitialState();
    }
    static getInitialState() {
        return {
            src: null,
            crop: {
                unit: "%",
                width: 60,
                aspect: 16 / 9
            },
            croppedImageUrl: null
        };
    }
    static getDerivedStateFromProps(props, state){
        let update = {};
        if(state.src !== props.src)  // derive state.src from props.src
            update.src = props.src;
        if(Object.keys(update).length > 0)
            return update;
        return null;        
    }
    onImageLoaded = image => {
        //console.log('lol', image);
        this.imageRef = image;
    }
    onCropComplete = crop => {
        this.makeClientCrop(crop);
        //console.log('after cropping', crop);
    }
    onCropChange = (crop, percentCrop) => {
        this.setState({ crop })
    }
    makeClientCrop = async (crop) => { 
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                "newFile.jpeg"
            );
            this.setState({ croppedImageUrl });
            this.props.onComplete(croppedImageUrl);  
        } 
    }
    
    getCroppedImg = (image, crop, fileName) => {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
    
        return new Promise((resolve, reject) => {
          canvas.toBlob(blob => {
            if (!blob) {
              //reject(new Error('Canvas is empty'));
              console.error("Canvas is empty");
              return;
            }
            blob.name = fileName;
            console.log('here', this);
            // remove previous blob 
            window.URL.revokeObjectURL(this.fileUrl);
            this.fileUrl = window.URL.createObjectURL(blob);
            resolve(this.fileUrl);
          }, "image/jpeg");
        });
    }
/*     resetImageFile = (e) => {
        e.preventDefault();
        this.setState(ImageCropper.getInitialState());
    }  */
    closeWidget = (e) => {
        e.preventDefault();
        //console.log('close');
        this.props.onClose();
        this.setState(ImageCropper.getInitialState());
    }
    render(){
        //console.log('imageCropper' ,this.state);
        return (
            <div className="image-upload">
                <div className="d-flex">
                    <div className="crop-container" style={{maxWidth: '400px'}}>
                    {this.state.src && (
                        <Fragment>
                            <ReactCrop
                                src={this.state.src}
                                crop={this.state.crop}
                                ruleOfThirds
                                onImageLoaded={this.onImageLoaded}
                                onComplete={this.onCropComplete}
                                onChange={this.onCropChange}
                            />
                            <button className="btn btn-secondary" onClick={this.closeWidget}>Close</button>
                        </Fragment>
                    )}
                    </div>
                    <div className="croppped-image ml-4">
                    {this.state.croppedImageUrl && (
                        <img alt="cropped" style={{maxWidth: '400px'}} src={this.state.croppedImageUrl} />
                    )}
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageCropper;
