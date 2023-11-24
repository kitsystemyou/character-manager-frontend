import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles'
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AdditionalInfoReadOnly from "../creations/AdditionalInfoReadOnly";
import CharacterBelongings from "../creations/CharacterBelongings";
import CharacterMemo from "../creations/CharacterMemo";
import CharacterOthers from "../creations/CharacterOthers";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid } from '@mui/x-data-grid';

const Icon = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

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


export default function CharacterDetail(props){
    const accordionInfo = [
        {
            Name: "追加情報",
            Contents: <AdditionalInfoReadOnly additionalInfo = {props.character.coc_meta_info} />
        },
        {
            Name: "武器・所持品",
            Contents: <CharacterBelongings />
        },        
        {
            Name: "その他",
            Contents: <CharacterOthers />
        },
        {
            Name: "探索者の履歴",
            Contents: <CharacterOthers />
        },
        {
            Name: "メモ",
            Contents: <CharacterMemo />
        },        

    ];
    const rows = props.character.coc_skills.map((obj,index) => {
        const {skill_name, summary} = obj;
        const res = Object.assign({id:index+1},{skill_name},{summary});
        console.log(res)
        return res
    });
    const columns = [
        { field: 'skill_name', headerName: '技能名', flex: 1, editable: false, sortable: true, headerAlign: 'center'},
        { field: 'summary', headerName: '技能値', flex: 1, editable: false, sortable: true, headerAlign: 'center', align: 'center' },
    ];
    return(
        <Grid container>
            <Grid item xs={3} sx={{p:1,minWidth:160, minHeight: 160, maxWidth:480, maxHeight: 480}}>
                <Icon alt="complex" src="/coharu.png" />
            </Grid>
            <Grid item xs={9} container sx={{ p: 1 }}>
                    <Grid item xs={12} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth id="outlined-read-only-input" label="PC名前" value={props.character.character_name} InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth id="outlined-read-only-input" label="PL名前" value={props.character.player_name} InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={4} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth id="outlined-read-only-input" label="職業" value={props.character.coc_meta_info.job} InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={4} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth id="outlined-read-only-input" label="性別" value={props.character.coc_meta_info.sex} InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={4} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth id="outlined-read-only-input" label="年齢" value={props.character.coc_meta_info.age} InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={3} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth id="outlined-read-only-input" label="SAN値" value={props.character.coc_status_parameters.init_san} InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={3} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth id="outlined-read-only-input" label="HP" value={props.character.coc_status_parameters.hp} InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={3} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth id="outlined-read-only-input" label="MP" value={props.character.coc_status_parameters.mp} InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={3} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth id="outlined-read-only-input" label="DB" value={props.character.coc_status_parameters.damage_bonus} InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:1, mb:1, pr:1}}>
                        <TextField fullWidth sx={{backgroundColor:'white' }}id="outlined-read-only-input" label="タグ名" value={props.character.tags} InputProps={{readOnly: true}}/>
                    </Grid>
                </Grid>
            <Grid item xs={12} container sx={{ m: 1 }}>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="STR" value={props.character.coc_status_parameters.str} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="CON" value={props.character.coc_status_parameters.con} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="POW" value={props.character.coc_status_parameters.pow} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="DEX" value={props.character.coc_status_parameters.dex} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="APP" value={props.character.coc_status_parameters.app} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="SIZ" value={props.character.coc_status_parameters.size} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="INT" value={props.character.coc_status_parameters.inte} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="EDU" value={props.character.coc_status_parameters.edu} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="アイデア" value={props.character.coc_status_parameters.idea} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="幸運" value={props.character.coc_status_parameters.luck} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="知識" value={props.character.coc_status_parameters.knowledge} InputProps={{readOnly: true}}/>
                </Grid>
            </Grid>
            <Grid item xs={12}>
            <hr />
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={3} sx={{ pr: 1 }}>
                    <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    disableColumnMenu={true}
                    hideFooter
                    showCellRightBorder
                    showColumnRightBorder/>
                </Grid>
                <Grid item xs={9} sx={{ pl: 1 ,pr: 1 }}>
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
                </Grid>
            </Grid>
        </Grid>
    )
};