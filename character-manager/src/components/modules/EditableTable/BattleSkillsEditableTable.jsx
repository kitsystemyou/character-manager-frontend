import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";
import _ from 'lodash';

export default function BattleSkillsEditableTable(props) {    
    useEffect(() => props.setCharacterSkills(props.characterSkills), [props]);
    const [status, setStatus] = useState(rows);

    const changeCell = (v) => {
        let newValue = _.cloneDeep(status);
        let idx = status.findIndex(d => d.id === v.id);
        let sum = status[idx].init_point + status[idx].job_point + status[idx].concern_point + status[idx].grow + status[idx].other
                    - status[idx][v.field] + v.value;
        newValue[idx][v.field] = v.value;
        newValue[idx].summary = sum;
        newValue[idx].init_flag = false;
        setStatus(newValue);
        // テーブルの値を親コンポーネントに返す関数
        setTableValue(newValue)
    }

    const setTableValue = (newValue) => {
        let tableValue = [];
        for(let i=0; i<newValue.length; ++i){
            if(!newValue[i].init_flag){
                tableValue[tableValue.length] = newValue[i]
            }
        }
        props.setCharacterSkills({...props.characterSkills, coc_skills:tableValue});
        console.log(tableValue);
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

const rows = fields.BATTLE_SKILLS_FIELDS;
