import React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from '../modules/Header';
import CharacterDetail from '../creations/CharacterDetail';

const Accordion = styled((props) => (
    <MuiAccordion {...props} />
))(() => ({
    '&:not(:last-child)':{
        borderBottom:0,
    },
    '&:before':{
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
))(({ theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#8c7851',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F9F4EF',
    padding: theme.spacing(2),
    borderTop: '1px solid',
    borderBottom: '1px solid',
}))

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(7),
        paddingLeft: theme.spacing(7),
    },
}));

const CharacterInfo = () => {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Accordion  expanded = { true } sx={{ boxShadow: 3, border: 1, borderColor: '#020826' }}>
                    <AccordionSummary focusVisible>
                        <Typography variant="h5" style={{ color: 'white' }}>キャラクター詳細</Typography>
                        <div style={{ flexGrow: 1 }}></div>
                        <Button variant="contained">編集</Button>
                        <Button variant="contained">出力</Button>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CharacterDetail />
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};
export default CharacterInfo