import { Provider } from 'react-redux';
import { Container, Grid } from '@mui/material';
import { store } from './store';
import { CreateTaskForm } from './containers/CreateTaskForm';
import { DataTable } from './containers/DataTable';
import { CustomTheme } from './components/CustomTheme';

import { init } from "@rematch/core";
init();

function App() {
  return (
    <Provider store={store}>
      {/* <CustomTheme> */}
      <Container className="App" maxWidth="xl">
        <Grid container={true} spacing={2}>
          <CreateTaskForm />
          <DataTable />
        </Grid>
      </Container>
      {/* </CustomTheme> */}
    </Provider>  
  );
}

export default App;
