export const getCroppedImg=(image,cropNew)=>{
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = cropNew.width;
    canvas.height = cropNew.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
        image,
        cropNew.x * scaleX,
        cropNew.y * scaleY,
        cropNew.width * scaleX,
        cropNew.height * scaleY,
        0,
        0,
        cropNew.width,
        cropNew.height
    );
    return new Promise((resolve,reject)=>{
        canvas.toBlob((blob)=>{
            
            //To base64
                var reader = new FileReader();

                reader.readAsDataURL(blob);
                console.log('blob url',window.URL.createObjectURL(blob))
                reader.onloadend = function() {
                    var base64data = reader.result;                
                    console.log('base64',base64data)
                    resolve(base64data)
                }
            //
        },'image/jpeg')
    })
    
}