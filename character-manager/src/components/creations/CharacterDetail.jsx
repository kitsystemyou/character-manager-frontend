import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles'
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AdditionalInfo from "../creations/AdditionalInfo";
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


export default function CharacterDetail(){
    const accordionInfo = [
        {
            Name: "追加情報",
            Contents: <AdditionalInfo />
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
    const rows = [
        { id: 1,skillName:"目星",sum:80},
        { id: 2,skillName:"聞き耳",sum:50},
        { id: 3,skillName:"コンピュータ",sum:60},
        { id: 4,skillName:"拳銃",sum:20},
    ];
    const columns = [
        { field: 'skillName', headerName: '技能名', flex: 1, editable: false, sortable: true, headerAlign: 'center'},
        { field: 'sum', headerName: '技能値', flex: 1, editable: false, sortable: true, headerAlign: 'center', align: 'center' },
    ];
    return(
        <Grid container>
            <Grid item xs={3} sx={{p:1,minWidth:160, minHeight: 160, maxWidth:480, maxHeight: 480}}>
                <Icon alt="complex" src="/coharu.png" />
            </Grid>
            <Grid item xs={9}>
                <Grid container sx={{ m: 1 }}>
                    <Grid item xs={12} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth id="outlined-read-only-input" label="PC名前" defaultValue="山田　花子" InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth id="outlined-read-only-input" label="PL名前" defaultValue="ぶためん" InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={4} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth id="outlined-read-only-input" label="職業" defaultValue="整体師" InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={4} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth id="outlined-read-only-input" label="性別" defaultValue="漢女" InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={4} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth id="outlined-read-only-input" label="年齢" defaultValue="18♡" InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={3} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth id="outlined-read-only-input" label="SAN値" defaultValue="100" InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={3} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth id="outlined-read-only-input" label="HP" defaultValue="10" InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={3} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth id="outlined-read-only-input" label="MP" defaultValue="12" InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={3} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth id="outlined-read-only-input" label="DB" defaultValue="+1d4" InputProps={{readOnly: true}}/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:1, mb:1, pr:2}}>
                        <TextField fullWidth sx={{backgroundColor:'white' }}id="outlined-read-only-input" label="タグ名" defaultValue="aaa" InputProps={{readOnly: true}}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ m: 1 }}>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="STR" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="CON" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="POW" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="DEX" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="APP" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="SIZ" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="INT" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="EDU" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="アイデア" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="幸運" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ mr: 1 }}>
                    <TextField fullWidth sx={{backgroundColor:'white'}}id="outlined-read-only-input" label="知識" defaultValue="10" InputProps={{readOnly: true}}/>
                </Grid>
            </Grid>
            <Grid item xs={12}>
            <hr />
            </Grid>
            <Grid container>
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