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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F9F4EF',
    padding: theme.spacing(2),
    borderTop: '1px solid',
    borderBottom: '1px solid',
}));

const CharacterCreate = () => {
    const navigate = useNavigate();
    const [characterName, setCharacterName]=useState("初期値");
    // const [playerName, setPlayerName]=useState("");
    // const [tags, setTags]=useState("");
    // const [job, setJob]=useState("");
    // const [homePlace, setHomePlace]=useState("");
    // const [sex, setSex]=useState("");
    // const [age, setAge]=useState("");

    const accordionInfo = [
        {
            Name: "基本情報",
            Contents: <BasicCharaInfo 
                charaName = {characterName}
                setCharaName = {setCharacterName} />
        },
        {
            Name: "追加情報",
            Contents: <AdditionalInfo />
        },
        {
            Name: "能力値",
            Contents: <CharacterStatus />
        },
        {
            Name: "技能値",
            Contents: <CharacterSkills />
        },
        {
            Name: "所持品",
            Contents: <CharacterBelongings />
        },
        {
            Name: "メモ",
            Contents: <CharacterMemo />
        },
        {
            Name: "その他",
            Contents: <CharacterOthers />
        },
    ]
    return (
        <>
            <Header />
            <div align='right'>
                <Button variant="contained" onClick={() => navigate('/info')}sx={{ mt: 2}}>保存</Button>
            </div>
            <div>親要素[キャラ名]：{characterName}</div>
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