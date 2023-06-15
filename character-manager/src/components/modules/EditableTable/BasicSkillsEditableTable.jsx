import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";
import _ from 'lodash';

export default function BasicSkillsEditableTable(props) {
    useEffect(() => props.setCharacterSkills(props.characterSkills), [props]);
    const [status, setStatus] = useState(rows);

    const changeCell = (v) => {
        let newValue = _.cloneDeep(status);
        let idx = status.findIndex(d => d.id === v.id);
        let sum = status[idx].init_point + status[idx].job_point + status[idx].concern_point + status[idx].grow + status[idx].other
                    - status[idx][v.field] + v.value;
        newValue[idx][v.field] = v.value;
        newValue[idx].summary = sum;
        setStatus(newValue);
        setTableValue(sum, v.field)
    }

    const setTableValue = (sum, field) => {
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
                hideFooter
                showCellRightBorder
                showColumnRightBorder
                onCellEditCommit={changeCell}
            />
        </div>
    );
}

const columns = [
    { field: 'step', headerName: '段', flex: 1, editable: false },
    { field: 'skill_name', headerName: '技能(五十音順)', type: 'string', flex: 4, editable: false, sortable: false, headerAlign: 'center' },
    { field: 'init_point', headerName: '初期値', type: 'number', flex: 2, editable: false, sortable: false, headerAlign: 'center' },
    { field: 'job_point', headerName: '職業P', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'concern_point', headerName: '興味P', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'grow', headerName: '成長', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'other', headerName: 'その他', type: 'number', flex: 2, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'summary', headerName: '合計', type: 'number', flex: 2, editable: false, sortable: false, headerAlign: 'center' }
];

const rows = fields.BASIC_SKILLS_FIELDS;
