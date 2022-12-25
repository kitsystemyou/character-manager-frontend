import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";

export default function BelongingsEditableTable() {
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
    { field: 'item', headerName: 'アイテム', type: 'string', flex: 2, editable: true, sortable: true, headerAlign: 'center' },
    { field: 'quantity', headerName: '個数', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'detail', headerName: '詳細', type: 'string', flex: 6, editable: true, sortable: false, headerAlign: 'center' },
];

const rows = fields.BASIC_SKILLS_FIELDS;
