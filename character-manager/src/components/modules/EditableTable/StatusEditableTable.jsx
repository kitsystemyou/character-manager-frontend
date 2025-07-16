import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as fields from "../ConstantTableFields";
import _ from 'lodash';

export default function StatusEditableTable(props) {
    // props.characterStatusの値をrowsに反映
    const createRowsFromStatus = (status) => {
        // fields.STATUS_FIELDSをベースに、props.characterStatusの値を反映
        const rows = _.cloneDeep(fields.STATUS_FIELDS);
        // 0: 基本値, 1: 増加分, 2: 一時的, 3: 合計
        // 合計行（3番目）にprops.characterStatusの値をセット
        if (status) {
            rows[0]["STR"] = status.str ?? "";
            rows[0]["CON"] = status.con ?? "";
            rows[0]["POW"] = status.pow ?? "";
            rows[0]["DEX"] = status.dex ?? "";
            rows[0]["APP"] = status.app ?? "";
            rows[0]["SIZ"] = status.size ?? "";
            rows[0]["INT"] = status.inte ?? "";
            rows[0]["EDU"] = status.edu ?? "";
            rows[0]["HP"] = status.hp ?? "";
            rows[0]["MP"] = status.mp ?? "";
            rows[0]["SAN"] = status.init_san ?? "";
            rows[0]["IDEA"] = status.idea ?? "";
            rows[0]["LUCK"] = status.luck ?? "";
            rows[0]["KNOWLEDGE"] = status.knowledge ?? "";
            // rows[1]["STR"] = status.str ?? "";
            // rows[1]["CON"] = status.con ?? "";
            // rows[1]["POW"] = status.pow ?? "";
            // rows[1]["DEX"] = status.dex ?? "";
            // rows[1]["APP"] = status.app ?? "";
            // rows[1]["SIZ"] = status.size ?? "";
            // rows[1]["INT"] = status.inte ?? "";
            // rows[1]["EDU"] = status.edu ?? "";
            // rows[1]["HP"] = status.hp ?? "";
            // rows[1]["MP"] = status.mp ?? "";
            // rows[1]["SAN"] = status.init_san ?? "";
            // rows[1]["IDEA"] = status.idea ?? "";
            // rows[1]["LUCK"] = status.luck ?? "";
            // rows[1]["KNOWLEDGE"] = status.knowledge ?? "";
            // rows[2]["STR"] = status.str ?? "";
            // rows[2]["CON"] = status.con ?? "";
            // rows[2]["POW"] = status.pow ?? "";
            // rows[2]["DEX"] = status.dex ?? "";
            // rows[2]["APP"] = status.app ?? "";
            // rows[2]["SIZ"] = status.size ?? "";
            // rows[2]["INT"] = status.inte ?? "";
            // rows[2]["EDU"] = status.edu ?? "";
            // rows[2]["HP"] = status.hp ?? "";
            // rows[2]["MP"] = status.mp ?? "";
            // rows[2]["SAN"] = status.init_san ?? "";
            // rows[2]["IDEA"] = status.idea ?? "";
            // rows[2]["LUCK"] = status.luck ?? "";
            // rows[2]["KNOWLEDGE"] = status.knowledge ?? "";
            // rows[3]["STR"] = status.str ?? "";
            // rows[3]["CON"] = status.con ?? "";
            // rows[3]["POW"] = status.pow ?? "";
            // rows[3]["DEX"] = status.dex ?? "";
            // rows[3]["APP"] = status.app ?? "";
            // rows[3]["SIZ"] = status.size ?? "";
            // rows[3]["INT"] = status.inte ?? "";
            // rows[3]["EDU"] = status.edu ?? "";
            // rows[3]["HP"] = status.hp ?? "";
            // rows[3]["MP"] = status.mp ?? "";
            // rows[3]["SAN"] = status.init_san ?? "";
            // rows[3]["IDEA"] = status.idea ?? "";
            // rows[3]["LUCK"] = status.luck ?? "";
            // rows[3]["KNOWLEDGE"] = status.knowledge ?? "";
        }
        return rows;
    };

    const [status, setStatus] = useState(createRowsFromStatus(props.characterStatus));

    // props.characterStatusが変わったら反映
    useEffect(() => {
        setStatus(createRowsFromStatus(props.characterStatus));
    }, [props.characterStatus]);
    useEffect(() => props.setCharacterSkillsTableStatus(props.characterSkillsTableStatus),[props]);
    const changeCell = (v) => {
        let newValue = _.cloneDeep(status);
        let idx = status.findIndex(d => d.id === v.id);

        // 値を更新
        newValue[idx][v.field] = v.value;

        // 各列ごとに現在値（合計行）を再計算
        const fieldsList = [
            "STR", "CON", "POW", "DEX", "APP", "SIZ", "INT", "EDU", "HP", "MP",
            "SAN", "IDEA", "LUCK", "KNOWLEDGE"
        ];
        fieldsList.forEach(field => {
            newValue[3][field] =
                (Number(newValue[0][field]) || 0) +
                (Number(newValue[1][field]) || 0) +
                (Number(newValue[2][field]) || 0);
        });

        // 既存の特殊処理
        if(v.field === "POW"){
            newValue[0]["SAN"] = newValue[3]["POW"]*5;
            newValue[3]["SAN"] = newValue[3]["POW"]*5;
            newValue[0]["LUCK"] = newValue[3]["POW"]*5;
            newValue[0]["MP"] = newValue[3]["POW"];
        }
        if(v.field === "DEX"){
            let newSkillsValue = _.cloneDeep(props.characterSkillsTableStatus);
            newSkillsValue[6].init_point = newValue[3]["DEX"]*2; //定義の6番目の要素に「回避」があるので、その初期値を変更
            props.setCharacterSkillsTableStatus(newSkillsValue);
        }
        if(v.field === "INT"){
            newValue[0]["IDEA"] = newValue[3]["INT"]*5;
        }
        if(v.field === "EDU"){
            newValue[0]["KNOWLEDGE"] = newValue[3]["EDU"]*5;
            let newSkillsValue = _.cloneDeep(props.characterSkillsTableStatus);
            newSkillsValue[47].init_point = newValue[3]["EDU"]*5;  //定義の47番目の要素に「母国語」があるので、その初期値を変更
            props.setCharacterSkillsTableStatus(newSkillsValue);
        }
        if(v.field === "CON" || v.field === "SIZ"){
            newValue[0]["HP"] = newValue[3]["CON"] + newValue[3]["SIZ"];
        }

        setStatus(newValue);

        // ダメージボーナス等の更新
        let damage_bonus = "";
        if(v.field === "STR" || v.field === "SIZ"){
            damage_bonus = calcDamageBonus(newValue[3]["STR"], newValue[3]["SIZ"]);
        }
        setTableValue(newValue[3][v.field], v.field, damage_bonus, newValue[0]["HP"]);
    }

    const setTableValue = (sum,field,damage_bonus,hp) => {
                
        field === "STR" ? props.setCharacterStatus({...props.characterStatus, str:sum, damage_bonus: damage_bonus}) 
        : field === "CON" ? props.setCharacterStatus({...props.characterStatus, con:sum, hp:hp})
        : field === "POW" ? props.setCharacterStatus({...props.characterStatus, pow:sum, init_san:sum*5,luck:sum*5,mp:sum,current_san:sum*5})
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
