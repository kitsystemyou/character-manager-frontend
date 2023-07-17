import React, { useState } from "react";
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
import ScrollToTop from "../modules/ScrollToTop";
import { useNavigate } from "react-router-dom";
import * as fields from "../modules/ConstantTableFields";

const Accordion = styled((props) => (
    <MuiAccordion  {...props} />
))(({theme}) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(7),
        paddingLeft: theme.spacing(7),
    },
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#8c7851',
}));

const basicCharaInfoInit = {
    character_name: "",
    player_name: "",
    tags: "",
    job: "",
    home_place: "",
    sex: "",
    age: ""    
}

const additionalInfoInit = {
    edu_backgroud: "",
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

const characterSkillsInit = {
    coc_skills: []
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
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F9F4EF',
    padding: theme.spacing(2),
    borderTop: '1px solid',
    borderBottom: '1px solid',
}));

const CharacterCreate = () => {
    const navigate = useNavigate();
    const [basicCharaInfo, setbasicCharaInfo]=useState(basicCharaInfoInit);
    const [additionalInfo, setAdditionalInfo]=useState(additionalInfoInit);
    const [characterStatus, setCharacterStatus]=useState(characterStatusInit);
    const [characterBasicSkills, setCharacterBasicSkills]=useState(characterBasicSkillsInit);
    const [characterBattleSkills, setCharacterBattleSkills]=useState(characterBattleSkillsInit);
    const [characterBelongings, setCharacterBelongings]=useState(characterBelongingsInit);
    const [characterMemo, setCharacterMemo]=useState(characterMemoInit);
    const [characterOthers, setCharacterOthers]=useState(characterOthersInit);
    
    const [characterSkillsTableStatus, setCharacterSkillsTableStatus]=useState(fields.BASIC_SKILLS_FIELDS);

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
                <Button variant="contained" onClick={() => navigate('/info')}sx={{ mt: 2}}>保存</Button>
            </div>
                {
                /* キャラクター一覧 */
                    accordionInfo.map(ainfo => {
                        return (
                            <Accordion sx={{ boxShadow: 3, border: 1, borderColor: '#020826' }} key={ainfo.Name}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                                <Typography variant="h5" style={{ color: 'white' }}>{ainfo.Name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {ainfo.Contents}
                            </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
                
            <div>
                <ScrollToTop />
            </div>
        </>
    );
}
export default CharacterCreate