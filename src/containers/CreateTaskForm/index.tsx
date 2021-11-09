import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from '@mui/material';
import { Dispatch } from "../../store";
import { TextField, Button } from '@mui/material';

export const CreateTaskForm: React.FC = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch<Dispatch>();
  const [description, setDescription] = useState('');
  const [inProgress, setInProgress] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if ( inProgress ) {
      dispatch.task.ended();
      setInProgress(false);
    } else {
      dispatch.task.started(description);
      setInProgress(true);
    }
  }

  return (
    <Fragment>
      <Grid item={true} xs={10}>
        <TextField id="description" label="Task Description" variant="outlined" size="small" fullWidth={true} onChange={handleChange} />
      </Grid>
      <Grid item={true} xs={2}> 
        <Button variant="contained" disableElevation={true} size="medium" fullWidth={true} onClick={handleClick}>{inProgress ? "Stop" : "Start"}</Button>
      </Grid>  
    </Fragment>
  );
}
