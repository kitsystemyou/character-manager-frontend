import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";

export default function BasicSkillsEditableTable() {
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
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
    { field: 'step', headerName: '段', flex: 1, editable: false },
    { field: 'skill', headerName: '技能(五十音順)', type: 'string', flex: 4, editable: false, sortable: false, headerAlign: 'center' },
    { field: 'init_point', headerName: '初期値', type: 'number', flex: 2, editable: false, sortable: false, headerAlign: 'center' },
    { field: 'job_point', headerName: '職業P', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'concern_point', headerName: '興味P', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'grow', headerName: '成長', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'other', headerName: 'その他', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'summary', headerName: '合計', type: 'number', flex: 2, editable: false, sortable: false, headerAlign: 'center' }
];

const rows = fields.BASIC_SKILLS_FIELDS;
