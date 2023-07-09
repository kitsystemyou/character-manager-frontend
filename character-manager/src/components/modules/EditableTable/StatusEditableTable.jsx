import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";
import _ from 'lodash';

export default function CharacterStatus(props) {
    useEffect(() => props.setCharacterStatus(props.characterStatus),[props]);
    const [status, setStatus] = useState(rows);

    const changeCell = (v) => {
        let newValue = _.cloneDeep(status);
        let idx = status.findIndex(d => d.id === v.id);
        let sum = status[0][v.field] + status[1][v.field] + status[2][v.field] - status[idx][v.field] + v.value;
        newValue[idx][v.field] = v.value;
        newValue[3][v.field] = sum;
        setStatus(newValue);
        setTableValue(sum,v.field);
    }

    const setTableValue = (sum,field) => {
        field=="STR" ? props.setCharacterStatus({...props.characterStatus, str:sum})
        : field =="CON" ? props.setCharacterStatus({...props.characterStatus, con:sum})
        : field =="POW" ? props.setCharacterStatus({...props.characterStatus, pow:sum, init_san:sum*5,luck:sum*5})
        : field =="DEX" ? props.setCharacterStatus({...props.characterStatus, dex:sum})
        : field =="APP" ? props.setCharacterStatus({...props.characterStatus, app:sum})
        : field =="SIZ" ? props.setCharacterStatus({...props.characterStatus, size:sum})
        : field =="INT" ? props.setCharacterStatus({...props.characterStatus, int:sum, idea:sum*5})
        : field =="EDU" ? props.setCharacterStatus({...props.characterStatus, edu:sum, knowledge:sum*5})
        : field =="HP" ? props.setCharacterStatus({...props.characterStatus, hp:sum})
        : field =="MP" ? props.setCharacterStatus({...props.characterStatus, mp:sum})
        : field =="db" ? props.setCharacterStatus({...props.characterStatus, damage_bonus:sum})
        : console.log(sum,field)
    }
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                autoHeight
                rows={status}
                columns={columns}
                disableColumnMenu={true}
                isCellEditable={(params) => params.row.name !== "現在値" || (params.row.name !=="能力値" && params.HP !== 0)}
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
