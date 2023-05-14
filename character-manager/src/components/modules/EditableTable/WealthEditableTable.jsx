import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";

export default function WealthEditableTable() {
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
    { field: 'wealth', headerName: '収入と財産', type: 'string', flex: 1, editable: true, sortable: true, headerAlign: 'center' },
    { field: 'remarks', headerName: '金額', type: 'string', flex: 3, editable: true, sortable: false, headerAlign: 'center' },
];

const rows = fields.WEALTH_DATA_FIELDS;
