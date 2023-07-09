import React, {useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import _ from 'lodash';

export default function BasicSkillsEditableTable(props) {
    useEffect(() => props.setCharacterSkills(props.characterSkills), [props]);
    useEffect(() => props.setCharacterSkillsTableStatus(props.characterSkillsTableStatus), [props]);

    const changeCell = (v) => {
        let newValue = _.cloneDeep(props.characterSkillsTableStatus);
        let idx = props.characterSkillsTableStatus.findIndex(d => d.id === v.id);
        let sum = props.characterSkillsTableStatus[idx].init_point 
                    + props.characterSkillsTableStatus[idx].job_point 
                    + props.characterSkillsTableStatus[idx].concern_point 
                    + props.characterSkillsTableStatus[idx].grow 
                    + props.characterSkillsTableStatus[idx].other
                    - props.characterSkillsTableStatus[idx][v.field] + v.value;
        newValue[idx][v.field] = v.value;
        newValue[idx].summary = sum;
        newValue[idx].init_flag = false;
        props.setCharacterSkillsTableStatus(newValue);
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
                rows={props.characterSkillsTableStatus}
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