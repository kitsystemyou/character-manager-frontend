import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";
import _ from 'lodash';

export default function CharacterStatus(props) {
    useEffect(() => props.setCharacterStatus(props.characterStatus),[props]);
    useEffect(() => props.setCharacterSkillsTableStatus(props.characterSkillsTableStatus),[props]);
    const [status, setStatus] = useState(rows);

    const changeCell = (v) => {
        let newValue = _.cloneDeep(status);
        let idx = status.findIndex(d => d.id === v.id);        
        if (idx === 0 && (v.field === "SAN" || v.field === "HP" || v.field === "MP" || v.field === "IDEA" || v.field === "LUCK" || v.field === "KNOWLEDGE")){
            v.value = status[0][v.field]
        }
        let sum = status[0][v.field] + status[1][v.field] + status[2][v.field] - status[idx][v.field] + v.value;
        let damage_bonus = "";

        newValue[idx][v.field] = v.value;
        newValue[3][v.field] = sum;
        
        if(v.field === "POW"){
            newValue[0]["SAN"] = sum*5;
            newValue[0]["LUCK"] = sum*5;
            newValue[0]["MP"] = sum;
        }
        if(v.field === "DEX"){
            let newSkillsValue = _.cloneDeep(props.characterSkillsTableStatus);
            newSkillsValue[6].init_point = sum*2;
            props.setCharacterSkillsTableStatus(newSkillsValue);
        }
        if(v.field === "INT"){
            newValue[0]["IDEA"] = sum*5;
        }        
        if(v.field === "EDU"){
            newValue[0]["KNOWLEDGE"] = sum*5;
            let newSkillsValue = _.cloneDeep(props.characterSkillsTableStatus);
            newSkillsValue[47].init_point = sum*5;
            props.setCharacterSkillsTableStatus(newSkillsValue);
        }
        if(v.field === "CON" || v.field === "SIZ"){
            newValue[0]["HP"] = newValue[3]["CON"] + newValue[3]["SIZ"];
        }

        setStatus(newValue);
        if(v.field === "STR" || v.field === "SIZ"){ damage_bonus = calcDamageBonus(newValue[3]["STR"], newValue[3]["SIZ"]); }
        setTableValue(sum, v.field, damage_bonus, newValue[0]["HP"]);
    }

    const setTableValue = (sum,field,damage_bonus,hp) => {
                
        field === "STR" ? props.setCharacterStatus({...props.characterStatus, str:sum, damage_bonus: damage_bonus}) 
        : field === "CON" ? props.setCharacterStatus({...props.characterStatus, con:sum, hp:hp})
        : field === "POW" ? props.setCharacterStatus({...props.characterStatus, pow:sum, init_san:sum*5,luck:sum*5,mp:sum})
        : field === "DEX" ? props.setCharacterStatus({...props.characterStatus, dex:sum})
        : field === "APP" ? props.setCharacterStatus({...props.characterStatus, app:sum})
        : field === "SIZ" ? props.setCharacterStatus({...props.characterStatus, size:sum, damage_bonus: damage_bonus, hp:hp})
        : field === "INT" ? props.setCharacterStatus({...props.characterStatus, int:sum, idea:sum*5})
        : field === "EDU" ? props.setCharacterStatus({...props.characterStatus, edu:sum, knowledge:sum*5})
        : field === "SAN" ? props.setCharacterStatus({...props.characterStatus, current_san:sum})
        : console.log(sum,field)
    }

    const calcDamageBonus = (str, siz) =>{
        let damage_bonus ="";
        str+siz < 2 ? damage_bonus = "エラー"
        :(2 <= str+siz && str+siz < 13) ? damage_bonus = "-1D6"
        :(13 <= str+siz && str+siz < 17) ? damage_bonus = "-1D4"
        :(17 <= str+siz && str+siz < 25) ? damage_bonus = "0"
        :(25 <= str+siz && str+siz < 33) ? damage_bonus = "+1D4"
        :(33 <= str+siz && str+siz < 41) ? damage_bonus = "+1D6"
        :(41 <= str+siz && str+siz < 57) ? damage_bonus = "+2D6"
        :(57 <= str+siz && str+siz < 73) ? damage_bonus = "+3D6"
        :(73 <= str+siz && str+siz < 89) ? damage_bonus = "+4D6"
        :(89 <= str+siz && str+siz < 105) ? damage_bonus = "+5D6"
        :(105 <= str+siz && str+siz < 121) ? damage_bonus = "+6D6"
        :(121 <= str+siz && str+siz < 137) ? damage_bonus = "+7D6"
        :(137 <= str+siz && str+siz < 153) ? damage_bonus = "+8D6"
        :(153 <= str+siz && str+siz < 169) ? damage_bonus = "+9D6"
        :(169 <= str+siz && str+siz < 185) ? damage_bonus = "+10D6"
        :(185 <= str+siz) ? damage_bonus = "エラー"
        : console.log(str+siz)
        return damage_bonus;
    }
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                autoHeight
                rows={status}
                columns={columns}
                disableColumnMenu={true}
                isCellEditable={(params) => (params.row.name === "能力値") || params.row.name === "増加分"|| params.row.name === "一時的" }
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
    { field: 'SAN', headerName: 'SAN', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
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
    { field: 'IDEA', headerName: 'アイデア', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'LUCK', headerName: '幸運', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
    { field: 'KNOWLEDGE', headerName: '知識', type: 'number', flex: 1, editable: true, sortable: false, headerAlign: 'center' },
]

const rows = fields.STATUS_FIELDS;
