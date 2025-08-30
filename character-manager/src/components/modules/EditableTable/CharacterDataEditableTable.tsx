import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";

export default function CharacterDataEditableTable() {
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
    { field: 'profile', headerName: 'プロフィール', type: 'string', flex: 1, editable: false, sortable: true, headerAlign: 'center' as const },
    { field: 'datum', headerName: '内容', type: 'number', flex: 3, editable: true, sortable: false, headerAlign: 'center' as const },
];

const rows = fields.CHARACTER_DATA_FIELDS;
