import { ReactMediaRecorder } from 'react-media-recorder';
import Button from '@mui/material/Button';

//Usage of ReactMediaRecorder version 1.4.0 (later v cause broker-factory error)

//
const Recorder = () => (
  <div>
    <ReactMediaRecorder
      audio
      render={({
        status,
        pauseRecording,
        startRecording,
        stopRecording,
        mediaBlobUrl,
      }) => (
        <div>
          <p>{status}</p>
          <Button onClick={startRecording}>Start Recording</Button>
          <Button onClick={pauseRecording}>Pause Recording</Button>
          <Button onClick={stopRecording}>Stop Recording</Button>
          <audio src={mediaBlobUrl} controls />
        </div>
      )}
    />
  </div>
);

export default Recorder;
