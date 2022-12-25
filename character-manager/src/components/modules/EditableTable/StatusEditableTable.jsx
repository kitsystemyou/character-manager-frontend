import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";

export default function StatusEditableTable() {
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                disableColumnMenu={true}
                hideFooter
                showCellRightBorder
                showColumnRightBorder
            />
        </div>
    );
}

const columns = [
    { field: 'name', headerName: '', flex: 1, editable: false, sortable: false, align: 'center' },
    { field: 'STR', headerName: 'STR', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'CON', headerName: 'CON', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'POW', headerName: 'POW', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'DEX', headerName: 'DEX', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'APP', headerName: 'APP', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'SIZ', headerName: 'SIZ', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'INT', headerName: 'INT', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'EDU', headerName: 'EDU', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'HP', headerName: 'HP', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'MP', headerName: 'MP', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
];

const rows = fields.STATUS_FIELDS;
