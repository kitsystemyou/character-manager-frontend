import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";

export default function WeaponEditableTable() {
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
    { field: 'weapon', headerName: '武器', type: 'string', flex: 4, editable: true, sortable: true, headerAlign: 'center' },
    { field: 'skill_point', headerName: '技能値', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'damage', headerName: 'ダメージ', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'range', headerName: '射程', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'number_of_attacks', headerName: '攻撃回数', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'ammunition_capacity', headerName: '装弾数', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'failure_value', headerName: '故障値', type: 'number', flex: 2, editable: false, sortable: false, headerAlign: 'center' },
    { field: 'endurance', headerName: '耐久力', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' }
];

const rows = fields.BASIC_SKILLS_FIELDS;
