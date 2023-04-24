import './App.css';
import {DataGrid} from "@mui/x-data-grid";


function App() {

  const columns = [
    {
        field: "start",
        headerName: "Start",
        flex: 1, 
        
    },
    {
        field: "name",
        headerName: "Name",
  
    },
   
];


return (

                <DataGrid
                    autoHeight
                    rows={[]}
                    columns={columns}
                    initialState={{
                        pagination: {paginationModel: {pageSize: 100}}
                    }}
                    disableRowSelectionOnClick
                />
 

);


}

export default App;
