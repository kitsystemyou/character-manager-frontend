import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "./fields";

export default function CharacterStatus(){
    return(
        <div style={{width: '100%' }}>
            <DataGrid 
                autoHeight 
                rows={rows} 
                columns={columns} 
                expreimentalFeatures={{ newEditingApi: true}} 
                disableColumnMenu={true}
                isCellEditable={(params) => params.row.name !== "現在値"}
                />
        </div>
    );
}

const columns = [
    { field: 'name', headerName: '', editable: false ,sortable: false},
    { field: 'STR', headerName: 'STR', type: 'number', editable: true ,sortable: false },
    { field: 'CON', headerName: 'CON', type: 'number', editable: true ,sortable: false },
    { field: 'POW', headerName: 'POW', type: 'number', editable: true ,sortable: false },
    { field: 'DEX', headerName: 'DEX', type: 'number', editable: true ,sortable: false },
    { field: 'APP', headerName: 'APP', type: 'number', editable: true ,sortable: false },
    { field: 'SIZ', headerName: 'SIZ', type: 'number', editable: true ,sortable: false },
    { field: 'INT', headerName: 'INT', type: 'number', editable: true ,sortable: false },
    { field: 'EDU', headerName: 'EDU', type: 'number', editable: true ,sortable: false },
    { field: 'HP', headerName: 'HP', type: 'number', editable: true ,sortable: false },
    { field: 'MP', headerName: 'MP', type: 'number', editable: true ,sortable: false }
  ];

const rows = fields.FIELDS_ARRAY;
