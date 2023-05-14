import React, {useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";
import _ from 'lodash';

export default function StatusEditableTable() {
    const [status, setStatus] = useState(rows);

    const changeCell = (v) => {
        let newValue = _.cloneDeep(status);
        let idx = status.findIndex(d => d.id === v.id);
        let sum = status[0][v.field] + status[1][v.field] + status[2][v.field] - status[idx][v.field] + v.value;
        newValue[idx][v.field] = v.value;
        newValue[3][v.field] = sum;
        setStatus(newValue);
    }

    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                autoHeight
                rows={status}
                columns={columns}
                disableColumnMenu={true}
                isCellEditable={(params) => params.row.name !== "現在値"}
                hideFooter
                showCellRightBorder
                showColumnRightBorder
                onCellEditCommit={changeCell}
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
