import React, { useState } from "react";
import { ResponsiveEmbed, Container, Button } from "react-bootstrap";
const CaptureVedio = () => {
  const [startVedio, SetStartVedio] = useState(false);
  const [recording, SetRecording] = useState(null);
  const handleVedioStart = () => {
    if (navigator.getDisplayMedia) {
      return navigator.getDisplayMedia({ video: true });
    } else if (navigator.mediaDevices.getDisplayMedia) {
      return navigator.mediaDevices.getDisplayMedia({ video: true });
    } else {
      return navigator.mediaDevices.getUserMedia({
        video: { mediaSource: "screen" }
      });
    }
  };

  const startVedioCapturing = async e => {
    console.log("Start capturing.");
    SetStartVedio(true);

    if (recording) {
      window.URL.revokeObjectURL(recording);
    }

    let dataChunks = [];
    let stream = await handleVedioStart();

    console.log(stream);
    stream.addEventListener("inactive", e => {
      console.log("Capture stream inactive - stop recording!");
      handleStopCapturing(dataChunks, e);
    });

    let mediaRecorder = new MediaRecorder(stream, {
      mimeType: "video/webm"
    });

    mediaRecorder.addEventListener("dataavailable", event => {
      if (event.data && event.data.size > 0) {
        console.log(event.data);
        dataChunks.push(event.data);
      }
    });
    mediaRecorder.start(10);
  };

  const handleStopCapturing = (data, e) => {
    console.log("Stop capturing.");

    // this.mediaRecorder.stop(); have to handle this case , incase of memory leak
    // this.mediaRecorder = null;
    console.log(e.target);
    e.target.getTracks().forEach(track => track.stop());

    let recording = window.URL.createObjectURL(
      new Blob(data, { type: "video/webm" })
    );
    SetRecording(recording);
    SetStartVedio(false);
  };

  console.log(recording);
  return (
    <Container>
      <Button onClick={startVedioCapturing}>Go to vedio capturing</Button>

      {recording && (
        <div style={{ width: 660, height: "auto" }}>
          <ResponsiveEmbed aspectRatio="16by9">
            <video src={recording} controls>
              Your browser does not support the video tag.
            </video>
          </ResponsiveEmbed>
          <a download="screen-recording.webm" href={recording}>
            Download
          </a>
        </div>
      )}
    </Container>
  );
};

export default CaptureVedio;
