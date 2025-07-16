import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Header from "../modules/Header";
import BasicCharaInfo from "../creations/BasicCharacterInfo";
import AdditionalInfo from "../creations/AdditionalInfo";
import CharacterStatus from "../creations/CharacterStatus";
import CharacterSkills from "../creations/CharacterSkills";
import CharacterBelongings from "../creations/CharacterBelongings";
import CharacterMemo from "../creations/CharacterMemo";
import CharacterOthers from "../creations/CharacterOthers";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import * as fields from "../modules/ConstantTableFields";
import characterAPI from "../modules/api/character"
import FloatingButton from "../modules/FloatingButton"

const Accordion = styled((props) => (
    <MuiAccordion  {...props} />
))(({theme}) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(7),
        paddingLeft: theme.spacing(7),
    },
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    '&:not(:last-child)': {
        borderBottom: 0,
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    },
    '&:before': {
        display: 'none',
    },
    '&.MuiAccordion-root.Mui-expanded': { // 開いているときの枠線を削除
        border: '3px solid #8c7851',
    },
    '&.MuiAccordion-root:not(.Mui-expanded)': { 
        border: '3px solid #8c7851', 
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F9F4EF',
}));

const basicCharaInfoInit = {
    character_name: "",
    player_name: "",
    tags: "",
    prof_img_path: "",
    coc_meta_info:{
        job: "",
        home_place: "",
        sex: "",
        age: ""
    }
}

const additionalInfoInit = {
    edu_background: "",
    mental_disorder: "",
    height: "",
    weight: "",
    hair_color: "",
    eye_color: "",
    skin_color: "",
    memo:""
}

const characterStatusInit = {
    str: 0,
    con: 0,
    pow: 0,
    dex: 0,
    app: 0,
    size: 0,
    int: 0,
    edu: 0,
    hp: 0,
    mp: 0,
    init_san: "",
    current_san: "",
    idea: "",
    knowledge: "",
    damage_bonus: "",
    luck: "",
    max_job_point: "",
    max_concern_point: ""
}

const characterBasicSkillsInit = {
    coc_skills: []
}

const characterBattleSkillsInit = {
    coc_skills: []
}

//　仮決め
const characterBelongingsInit = {
    weapons: [
        {
            weapon:"",
            skill_point:"",
            damage:"",
            range:"",
            number_of_attacks:"",
            ammunition_capacity:"",
            failure_value:"",
            endurance:"", 
        }
    ],
    belongings:[
        {
            item:"",
            quantity:"",
            detail:"",
        }
    ]
}
//　仮決め
const characterMemoInit = {
    memo: ""
}
//　仮決め
const characterOthersInit = {
    history:[
        {
            sceinario:"",
            memo:""
        }
    ],
    character_data:[
        {
            profile:"",
            datum:""
        }
    ],
    wealth:[
        {
            wealth:"",
            remarks:""
        }
    ],
    magic_book:"",
    artifact:"",
    mythical_creature:""
}

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
    padding: theme.spacing(2),
    borderTop: '3px solid',
    borderBottom: '3px solid',
    borderColor: '#8c7851'
}));


const CharacterEdit = () => {
    const navigate = useNavigate();
    const { character_id } = useParams();
    console.log("id", character_id);
    const [basicCharaInfo, setbasicCharaInfo]=useState(basicCharaInfoInit);
    const [additionalInfo, setAdditionalInfo]=useState(additionalInfoInit);
    const [characterStatus, setCharacterStatus]=useState(characterStatusInit);
    const [characterBasicSkills, setCharacterBasicSkills]=useState(characterBasicSkillsInit);
    const [characterBattleSkills, setCharacterBattleSkills]=useState(characterBattleSkillsInit);
    const [characterBelongings, setCharacterBelongings]=useState(characterBelongingsInit);
    const [characterMemo, setCharacterMemo]=useState(characterMemoInit);
    const [characterOthers, setCharacterOthers]=useState(characterOthersInit);
    
    const [characterSkillsTableStatus, setCharacterSkillsTableStatus]=useState(fields.BASIC_SKILLS_FIELDS);

    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                const characterRes = await characterAPI.getAll(character_id);   // 作成済のキャラクター情報を取得
                const characterData = characterRes.result;
                console.log("characterData", characterData);
                setbasicCharaInfo(characterData.basic_character_info|| basicCharaInfoInit);
                setAdditionalInfo(characterData.coc_meta_info || additionalInfoInit);
                setCharacterStatus(characterData.coc_status_parameters || characterStatusInit);
                setCharacterBasicSkills(characterData.characterBasicSkills || characterBasicSkillsInit);
                setCharacterBattleSkills(characterData.characterBattleSkills || characterBattleSkillsInit);
                setCharacterBelongings(characterData.characterBelongings || characterBelongingsInit);
                setCharacterMemo(characterData.characterMemo || characterMemoInit);
                setCharacterOthers(characterData.characterOthers || characterOthersInit);
            } catch (error) {
                console.error("キャラクター情報の取得に失敗しました", error);
            }
        };
        fetchCharacterData();
    }, [character_id]);

    const getUuid = () => {
        return crypto.randomUUID();
      };
      
    const saveCharacter = () =>{
        var character = {}
        let character_data = {};
        character_data.user_id = getUuid(); //TODO:既存のUUIDを使用する
        character_data.game_system = "coc"; //TODO:選択したシステムを使用する
        character_data.prof_img_path = "";
        console.log(basicCharaInfo)
        Object.assign(character_data,basicCharaInfo)
        Object.assign(character_data.coc_meta_info, additionalInfo)
        character_data.coc_status_parameters = characterStatus
        character_data.coc_skills = characterBasicSkills.coc_skills.concat(characterBattleSkills.coc_skills)
        console.log(character_data);
        //可能であればいらない情報を消す
        //character_data = deleteParams(character_data)
        character["character"] = character_data
        characterAPI.post(character).then( characterRes => {
                console.log("characterRes", characterRes);
                navigate(`/characters/${characterRes.result.id}`)
            }
        )        
    }

    const accordionInfo = [
        {
            Name: "基本情報",
            Contents: <BasicCharaInfo 
                basicCharaInfo = {basicCharaInfo}
                setbasicCharaInfo = {setbasicCharaInfo} />
        },
        {
            Name: "追加情報",
            Contents: <AdditionalInfo 
                additionalInfo = {additionalInfo}
                setAdditionalInfo = {setAdditionalInfo} />
        },
        {
            Name: "能力値",
            Contents: <CharacterStatus 
                characterStatus = {characterStatus}
                setCharacterStatus = {setCharacterStatus}
                characterSkillsTableStatus = {characterSkillsTableStatus}
                setCharacterSkillsTableStatus = {setCharacterSkillsTableStatus}/>
        },
        {
            Name: "技能値",
            Contents: <CharacterSkills 
                characterBasicSkills = {characterBasicSkills}
                setCharacterBasicSkills = {setCharacterBasicSkills}
                characterBattleSkills = {characterBattleSkills}
                setCharacterBattleSkills = {setCharacterBattleSkills}
                characterSkillsTableStatus = {characterSkillsTableStatus}
                setCharacterSkillsTableStatus = {setCharacterSkillsTableStatus}/>
        },
        {
            Name: "所持品",
            Contents: <CharacterBelongings 
                characterBelongings = {characterBelongings}
                setCharacterBelongings = {setCharacterBelongings} />
        },
        {
            Name: "メモ",
            Contents: <CharacterMemo 
                characterMemo = {characterMemo}
                setCharacterMemo = {setCharacterMemo} />
        },
        {
            Name: "その他",
            Contents: <CharacterOthers 
                characterOthers = {characterOthers}
                setCharacterOthers = {setCharacterOthers}/>
        },
    ]
    return (
        <>
            <Header />
            <div align='right'>
                <Button variant="contained" style={{ backgroundColor: '#8c7851', borderColor: '#8c7851', color: '#FFF' }} onClick={saveCharacter}sx={{ mt: 2,mb: 2, mr: 4}}>保存</Button>
            </div>
                {
                /* キャラクター一覧 */
                    accordionInfo.map(ainfo => {
                        return (
                            <Accordion sx={{ boxShadow: 3}} key={ainfo.Name}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "#020826" }} />}>
                                <Typography variant="h5" style={{ color: '#020826' }}>{ainfo.Name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {ainfo.Contents}
                            </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
                
            <div>
                <FloatingButton />
            </div>
        </>
    );
}
export default CharacterEdit