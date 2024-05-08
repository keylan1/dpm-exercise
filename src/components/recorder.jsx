import { ReactMediaRecorder } from 'react-media-recorder';
import Form from './form';
import Button from '@mui/material/Button';

//Usage of ReactMediaRecorder version 1.4.0 (later v cause broker-factory error)

//Technically, more permission should be asked to access the controls etc.

//Firebase with oauth2 would simplify storage and authentication

//express.js still required for RESTapi, to customize how to manipulate audio files.

const Recorder = () => (
  <div>
    <ReactMediaRecorder
      audio
      render={({
        status,
        pauseRecording,
        resumeRecording,
        startRecording,
        stopRecording,
        mediaBlobUrl,
      }) => (
        <div>
          <p>{status}</p>
          <Button onClick={startRecording}>Start Recording</Button>
          <Button onClick={pauseRecording}>Pause Recording</Button>
          <Button onClick={resumeRecording}>Resume Recording</Button>
          <Button onClick={stopRecording}>Stop Recording</Button>
          <audio src={mediaBlobUrl} controls />
        </div>
      )}
    />
    <Form />
  </div>
);

export default Recorder;
