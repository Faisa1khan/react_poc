import React, { useState } from 'react';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg} from "./cropUtils";

function ImageUploadComponent() {

    const [fileSrc,setFileSrc]=useState(null)
    const [crop,setCrop]=useState({
        unit: '%',
        width: 100,
        aspect: 4/3,
    })


    const [imageRef,setImageRef]=useState(null)
    const [croppedImg,setCroppedImg]=useState(null)

    const onSelectFile=(e)=>{
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
              setFileSrc(reader.result )
            );
            reader.readAsDataURL(e.target.files[0]);
             
          }
    }

    const onImageLoaded=image=>{
        setImageRef(image)         
    }

    const onCropComplete = (cropNew) => {
        makeClientCrop(cropNew)
    };
    
    const onCropChange = (cropNew, percentCrop) => {
        setCrop(cropNew);
    };

    const makeClientCrop=async (cropNew)=> {
        if (imageRef && cropNew.width && cropNew.height) {
          const croppedImageUrl = await getCroppedImg(
            imageRef,
            cropNew,
            'newFile.jpeg'
          );
           
          setCroppedImg(croppedImageUrl)
        }
      }

    return(
        <div>
            <input type='file' onChange={onSelectFile} /><br/>
             
            <ReactCrop 
                ruleOfThirds 
                onComplete={onCropComplete}
                onImageLoaded={onImageLoaded}
                onChange={onCropChange}
                src={fileSrc} 
                crop={crop} />
                <img alt='preview' src={croppedImg===null?fileSrc:croppedImg} />
        </div>
    )
}

export default ImageUploadComponent;