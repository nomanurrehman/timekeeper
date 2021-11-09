import { Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Task } from '../../models/task';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.5 },
  { field: 'startTime', headerName: 'End Time', flex: 0.5 },
  { field: 'endTime', headerName: 'Start Time', flex: 0.5 },
  { field: 'description', headerName: 'Description', flex: 0.5 },
  { field: 'status', headerName: 'Status', flex: 0.5 },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];

export function DataTable() {
  const tasks: Task[] = useSelector((state: RootState) => state.task);
  return (
    <Grid item={true} xs={12}>
      <DataGrid
        autoHeight={true}
        rows={tasks}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Grid>  
  );
}
