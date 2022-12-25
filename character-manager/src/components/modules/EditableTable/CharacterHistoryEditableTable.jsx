import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";

export default function CharacterHistoryEditableTable() {
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
    { field: 'scenario', headerName: 'シナリオ名', type: 'string', flex: 1, editable: true, sortable: true, headerAlign: 'center' },
    { field: 'remarks', headerName: '備考', type: 'number', flex: 3, editable: true, sortable: false, headerAlign: 'center' },
];

const rows = fields.BASIC_SKILLS_FIELDS;
