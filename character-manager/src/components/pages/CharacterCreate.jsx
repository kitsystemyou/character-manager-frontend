import React from "react";
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/material/styles';
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
))(() => ({
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

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(7),
        paddingLeft: theme.spacing(7),
    },
}));

const CharacterCreate = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div align='right'>
                <Button variant="contained" onClick={() => navigate('/info')}sx={{ mt: 2}}>保存</Button>
            </div>
            <div className={classes.root}>
                {/* キャラクター一覧 */}
                <Accordion sx={{ boxShadow: 3, border: 1, borderColor: '#020826' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                        <Typography variant="h5" style={{ color: 'white' }}>基本情報</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <BasicCharaInfo />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 3, border: 1, borderColor: '#020826' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                        <Typography variant="h5" style={{ color: 'white' }}>追加情報</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <AdditionalInfo />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 3, border: 1, borderColor: '#020826' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                        <Typography variant="h5" style={{ color: 'white' }}>能力値</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterStatus />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 3, border: 1, borderColor: '#020826' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                        <Typography variant="h5" style={{ color: 'white' }}>技能値</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterSkills />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 3, border: 1, borderColor: '#020826' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                        <Typography variant="h5" style={{ color: 'white' }}>所持品</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterBelongings />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 3, border: 1, borderColor: '#020826' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                        <Typography variant="h5" style={{ color: 'white' }}>メモ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterMemo />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 3, border: 1, borderColor: '#020826' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                        <Typography variant="h5" style={{ color: 'white' }}>その他</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterOthers />
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <ScrollToTop />
            </div>
        </>
    );
}
export default CharacterCreate