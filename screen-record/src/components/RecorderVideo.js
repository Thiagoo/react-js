import React, { useRef, useState } from 'react';
import '../Styles/RecorderVideo.css';

const RecorderVideo = () => {
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const recordedChunks = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: 'screen' },
      });

      recordedChunks.current = [];
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunks.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      console.error('Error starting screen capture', err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const enterFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  return (
    <div className='screen-recorder-wrapper'>
      <div className='recorder-container'>
        <h1>🎥 Screen Recorder</h1>

        {recording && (
          <div className='recording-indicator'>⏺ Recording in progress...</div>
        )}

        <div className='button-group'>
          {!recording ? (
            <button onClick={startRecording} className='btn start'>
              Start Recording
            </button>
          ) : (
            <button onClick={stopRecording} className='btn stop'>
              Stop Recording
            </button>
          )}
        </div>

        {videoURL && (
          <div className='video-section'>
            <h2>📺 Recorded Preview</h2>
            <div className='video-output'>
              <video
                ref={videoRef}
                src={videoURL}
                controls
                className='video-display'
              />
              <div className='video-controls'>
                <a
                  href={videoURL}
                  download='screen-recording.webm'
                  className='btn download'
                >
                  Download
                </a>
                <button onClick={enterFullscreen} className='btn fullscreen'>
                  Fullscreen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecorderVideo;
