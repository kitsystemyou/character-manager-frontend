import React from "react";
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Header from "../modules/Header";
import BasicCharaInfo from "../creations/BasicCharacterInfo";
import AdditionalInfo from "../creations/AdditionalInfo";
import CharacterStatus from "../creations/CharacterStatus"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography } from "@mui/material";

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
    <MuiAccordionSummary {...props}/>
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
    return(
        <>
        <Header />
        <div className={classes.root}>
        {/* キャラクター一覧 */}
            <Accordion sx={{ boxShadow: 3, border:1, borderColor:'#020826'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "white"}} />}>
                    <Typography variant="h5" style={{color:'white'}}>基本情報</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BasicCharaInfo />
                </AccordionDetails>        
            </Accordion>           
            <Accordion sx={{ boxShadow: 3, border:1, borderColor:'#020826'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "white"}} />}>
                    <Typography variant="h5" style={{color:'white'}}>追加情報</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AdditionalInfo />
                </AccordionDetails>        
            </Accordion>     
            <Accordion sx={{ boxShadow: 3, border:1, borderColor:'#020826'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "white"}} />}>
                    <Typography variant="h5" style={{color:'white'}}>能力値</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CharacterStatus />
                </AccordionDetails>        
            </Accordion>     
        </div>
        </>
    );
}
export default CharacterCreate