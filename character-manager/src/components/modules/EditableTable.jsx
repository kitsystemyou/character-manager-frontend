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
                hideFooter
                showCellRightBorder
                showColumnRightBorder
                />
        </div>
    );
}

const columns = [
    { field: 'name', headerName: '', editable: false ,sortable: false},
    { field: 'STR', headerName: 'STR', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'CON', headerName: 'CON', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'POW', headerName: 'POW', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'DEX', headerName: 'DEX', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'APP', headerName: 'APP', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'SIZ', headerName: 'SIZ', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'INT', headerName: 'INT', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'EDU', headerName: 'EDU', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'HP', headerName: 'HP', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'MP', headerName: 'MP', type: 'number', editable: true ,sortable: false ,headerAlign: 'center'},
    { field: 'Dummy', headerName: '', sortable: false },
  ];

const rows = fields.FIELDS_ARRAY;
