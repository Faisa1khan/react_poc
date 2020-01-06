import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import style from "./ImageUpload.module.css";
import { Container, Button } from "react-bootstrap";
import getCroppedImg from "../../utils/CropImage";
import { ShowCroppedImage } from "./ShowCroppedImage";

console.log(style);

function readFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

const ImageCropper = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  console.log(croppedImage);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageUrl,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  //   const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
  //     console.log(croppedArea, croppedAreaPixels);
  //   }, []);

  const onFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const imageDataUrl = await readFile(e.target.files[0]);
      setImageUrl(imageDataUrl);
    }
  };

  const onReset = () => {
    setImageUrl(null);
  };

  return (
    <Container>
      <input type="file" onChange={onFileChange} />
      {imageUrl && (
        <div className={style.main}>
          <div className={style["crop-container"]}>
            <Cropper
              image={imageUrl}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              onRotationChange={setRotation}
            />
          </div>
          <div className={style.controls}>
            <input
              type="range"
              className={style.slider}
              id="customRange"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(e, zoom) => setZoom(e.target.value)}
            ></input>
            <input
              type="range"
              className={`${style.slider} ml-2`}
              id="customRange"
              min="1"
              max="360"
              step="1"
              value={rotation}
              onChange={e => setRotation(e.target.value)}
            ></input>
            <Button className="ml-2" onClick={showCroppedImage} color="primary">
              Show Result
            </Button>
            <Button className="ml-2" onClick={onReset} color="primary">
              Close
            </Button>
            {/* <ShowCroppedImage image={croppedImage} /> */}
          </div>
        </div>
      )}
    </Container>
  );
};

export default ImageCropper;
