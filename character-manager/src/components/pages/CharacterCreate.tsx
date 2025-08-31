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
import { useNavigate } from "react-router-dom";
import * as fields from "../modules/ConstantTableFields";
import characterAPI from "../modules/api/character";
import FloatingButton from "../modules/FloatingButton";
import ToolsButton from "../modules/ToolsButton";

// 型定義の追加
interface BasicCharaInfo {
  character_name: string;
  player_name: string;
  tags: string;
  prof_img_path: string;
  coc_meta_info: {
    job: string;
    home_place: string;
    sex: string;
    age: string;
  };
}

interface AdditionalInfo {
  edu_background: string;
  mental_disorder: string;
  height: string;
  weight: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  memo: string;
}

interface CharacterStatus {
  str: number;
  con: number;
  pow: number;
  dex: number;
  app: number;
  size: number;
  int: number;
  edu: number;
  hp: number;
  mp: number;
  init_san: string;
  current_san: string;
  idea: string;
  knowledge: string;
  damage_bonus: string;
  luck: string;
  max_job_point: string;
  max_concern_point: string;
}

interface Skill {
  // 必要に応じて詳細を追加
}

interface CharacterSkillsType {
  coc_skills: Skill[];
}

interface Weapon {
  weapon: string;
  skill_point: string;
  damage: string;
  range: string;
  number_of_attacks: string;
  ammunition_capacity: string;
  failure_value: string;
  endurance: string;
}

interface Belonging {
  item: string;
  quantity: string;
  detail: string;
}

interface CharacterBelongingsType {
  weapons: Weapon[];
  belongings: Belonging[];
}

interface CharacterMemoType {
  memo: string;
}

interface History {
  sceinario: string;
  memo: string;
}
interface CharacterData {
  profile: string;
  datum: string;
}
interface Wealth {
  wealth: string;
  remarks: string;
}
interface CharacterOthersType {
  history: History[];
  character_data: CharacterData[];
  wealth: Wealth[];
  magic_book: string;
  artifact: string;
  mythical_creature: string;
}

// styledのAccordion, AccordionSummary, AccordionDetailsを削除し、MuiAccordion, MuiAccordionSummary, MuiAccordionDetailsを直接利用

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

const CharacterCreate: React.FC = () => {
    const navigate = useNavigate();
    const [basicCharaInfo, setbasicCharaInfo] = useState<BasicCharaInfo>(basicCharaInfoInit);
    const [additionalInfo, setAdditionalInfo] = useState<AdditionalInfo>(additionalInfoInit);
    const [characterStatus, setCharacterStatus] = useState<CharacterStatus>(characterStatusInit);
    const [characterBasicSkills, setCharacterBasicSkills] = useState<CharacterSkillsType>(characterBasicSkillsInit);
    const [characterBattleSkills, setCharacterBattleSkills] = useState<CharacterSkillsType>(characterBattleSkillsInit);
    const [characterBelongings, setCharacterBelongings] = useState<CharacterBelongingsType>(characterBelongingsInit);
    const [characterMemo, setCharacterMemo] = useState<CharacterMemoType>(characterMemoInit);
    const [characterOthers, setCharacterOthers] = useState<CharacterOthersType>(characterOthersInit);
    
    const [characterSkillsTableStatus, setCharacterSkillsTableStatus] = useState<any>(fields.BASIC_SKILLS_FIELDS);

    const getUuid = () => {
        return crypto.randomUUID();
      };
      
    const saveCharacter = () =>{
        var character: any = {}
        let character_data: any = {};
        character_data.user_id = getUuid();
        character_data.game_system = "coc";
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
                navigate(`/info/${characterRes.result.game_system}/${characterRes.result.id}`)
            }
        )        
    }

    const roll3d6AddToSTR = () => {
        const roll = () => Math.floor(Math.random() * 6) + 1;
        const total = roll() + roll() + roll();
        setCharacterStatus(prev => ({ ...prev, str: prev.str + total }));
        console.log(`3D6の合計: ${total} (STRに加算されました)`);
    };

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
            <div style={{ textAlign: 'right' }}>
                <Button variant="contained" style={{ backgroundColor: '#8c7851', borderColor: '#8c7851', color: '#FFF' }} onClick={saveCharacter} sx={{ mt: 2, mb: 2, mr: 4 }}>保存</Button>
            </div>
            {
                accordionInfo.map(ainfo => (
                    <MuiAccordion sx={{ boxShadow: 3, mt: 2, ml: 4, mr: 4, border: '3px solid #8c7851' }} key={ainfo.Name}>
                        <MuiAccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "#020826" }} />} sx={{ backgroundColor: '#F9F4EF' }}>
                            <Typography variant="h5" style={{ color: '#020826' }}>{ainfo.Name}</Typography>
                        </MuiAccordionSummary>
                        <MuiAccordionDetails sx={{ backgroundColor: '#FFF', borderTop: '3px solid #8c7851', borderBottom: '3px solid #8c7851' }}>
                            {ainfo.Contents}
                        </MuiAccordionDetails>
                    </MuiAccordion>
                ))
            }
            <div>
                <ToolsButton onRoll3d6AddToSTR={roll3d6AddToSTR} />
                <FloatingButton />
            </div>
        </>
    );
}

export default CharacterCreate;
