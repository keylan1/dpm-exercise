import { Button, TextField } from '@mui/material';

//should contain the logic to send to database + for processing.
//Skeleton loader then redirect to another view with the response? react-router required

function Form() {
  const submitAudio = (e) => {
    e.preventDefault();
    alert('Submitted!');
  };

  return (
    <form>
      <input name="submit" />
      <TextField>Email</TextField>
      <Button type="submit" onClick={submitAudio}>
        Submit Audio
      </Button>
    </form>
  );
}

export default Form;
