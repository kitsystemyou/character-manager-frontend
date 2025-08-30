import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AdditionalInfoReadOnly from "../creations/AdditionalInfoReadOnly";
import CharacterBelongings from "../creations/CharacterBelongings";
import CharacterMemo from "../creations/CharacterMemo";
import CharacterOthers from "../creations/CharacterOthers";
import CharacterDetailTabs from "../modules/CharacterDetailTabs";
import { DataGrid } from '@mui/x-data-grid';

interface CocMetaInfo {
  job: string;
  sex: string;
  age: number;
  height: number;
  weight: number;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  home_place: string;
  mental_disorder: string;
  edu_background: string;
  memo: string;
}
interface CocStatusParameters {
  str: number;
  con: number;
  pow: number;
  dex: number;
  app: number;
  size: number;
  inte: number;
  edu: number;
  hp: number;
  mp: number;
  init_san: number;
  current_san: number;
  idea: number;
  knowledge: number;
  damage_bonus: number;
  luck: number;
  max_job_point: number;
  max_concern_point: number;
}
interface CocSkill {
  skill_id: number;
  skill_name: string;
  job_point: number;
  concern_point: number;
  grow: number;
  other: number;
  skill_type: number;
  summary?: number;
}
interface CharacterType {
  id: number | string;
  user_id: string;
  character_name: string;
  player_name: string;
  game_system: string;
  prof_img_path: string;
  tags: string;
  create_time: string;
  update_time: string;
  delete_time: string;
  coc_meta_info: CocMetaInfo;
  coc_status_parameters: CocStatusParameters;
  coc_skills: CocSkill[];
}
type Props = {
  character: CharacterType;
};

const Icon = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Accordion = styled((props: any) => (
    <MuiAccordion  {...props} />
))(({theme}) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(7),
        paddingLeft: theme.spacing(7),
    },
    marginRight: theme.spacing(1),
    '&:not(:last-child)': {
        borderBottom: 0,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
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

const AccordionSummary = styled((props: any) => (
    <MuiAccordionSummary {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F9F4EF',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
    padding: theme.spacing(2),
    borderTop: '3px solid',
    borderBottom: '3px solid',
    borderColor: '#8c7851'
}));


const CharacterDetail: React.FC<Props> = (props) => {
    const detailsInfo = [
        {
            Name: "追加情報",
            Contents: <AdditionalInfoReadOnly additionalInfo = {props.character.coc_meta_info} />
        },
        {
            Name: "武器・所持品",
            Contents: <CharacterBelongings characterBelongings={{weapons: [], belongings: []}} setCharacterBelongings={() => {}} />
        },        
        {
            Name: "その他",
            Contents: <CharacterOthers characterOthers={{history: [], character_data: [], wealth: [], magic_book: "", artifact: "", mythical_creature: ""}} setCharacterOthers={() => {}} />
        },
        {
            Name: "探索者の履歴",
            Contents: <CharacterOthers characterOthers={{history: [], character_data: [], wealth: [], magic_book: "", artifact: "", mythical_creature: ""}} setCharacterOthers={() => {}} />
        },
        {
            Name: "メモ",
            Contents: <CharacterMemo characterMemo={{memo: ""}} setCharacterMemo={() => {}} />
        },        

    ];
    const rows = props.character.coc_skills.map(skill => ({
        id: skill.skill_id,
        skillName: skill.skill_name,
        sum: skill.concern_point + skill.grow + skill.job_point + skill.other
    }));
    const columns = [
        { field: 'skillName', headerName: '技能名', flex: 1, editable: false, sortable: true, headerAlign: 'center' as const},
        { field: 'sum', headerName: '技能値', flex: 1, editable: false, sortable: true, headerAlign: 'center' as const, align: 'center' as const },
    ];
    return(
        <Grid container>
            <Grid item xs={3} sx={{p:1,minWidth:160, minHeight: 160, maxWidth:280, maxHeight: 280}}>
                <Icon alt="complex" src="/NoImage.png" sx={{ width: "100%", height: "100%", objectFit: "contain", maxWidth: 280, maxHeight: 280 }} />
            </Grid>
            <Grid item xs={9} container sx={{ p: 1 }}>
                <Grid item xs={4} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="職業" value={props.character.coc_meta_info.job} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={2} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="身長" value={props.character.coc_meta_info.height} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={2} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="体重" value={props.character.coc_meta_info.weight} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="性別" value={props.character.coc_meta_info.sex} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="年齢" value={props.character.coc_meta_info.age} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={2} sx={{ pr: 1 }}>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="SAN値" value={props.character.coc_status_parameters.init_san} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="STR" value={props.character.coc_status_parameters.str} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="CON" value={props.character.coc_status_parameters.con} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="POW" value={props.character.coc_status_parameters.pow} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="DEX" value={props.character.coc_status_parameters.dex} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="APP" value={props.character.coc_status_parameters.app} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="SIZ" value={props.character.coc_status_parameters.size} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="INT" value={props.character.coc_status_parameters.inte} InputProps={{readOnly: true}}/>
                </Grid>                
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="EDU" value={props.character.coc_status_parameters.edu} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={3} sx={{ pr: 1 }}>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="HP" value={props.character.coc_status_parameters.hp} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="MP" value={props.character.coc_status_parameters.mp} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="アイデア" value={props.character.coc_status_parameters.idea} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="幸運" value={props.character.coc_status_parameters.luck} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard"  label="知識" value={props.character.coc_status_parameters.knowledge} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={1} sx={{ pr: 1 }}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="DB" value={props.character.coc_status_parameters.damage_bonus} InputProps={{readOnly: true}}/>
                </Grid>
                <Grid item xs={12} sx={{ pr: 1}}>
                    <TextField fullWidth id="standard-read-only-input" variant="standard" label="タグ名" value={props.character.tags} InputProps={{readOnly: true}}/>
                </Grid>
            </Grid>
            <Grid item xs={12}>
            <hr />
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={3} sx={{ pl: 1, pr: 1 }}>
                    <div style={{ height: 400, maxHeight: '50vh', overflowY: 'auto', marginBottom: '1rem' }}>
                        <DataGrid
                        rows={rows}
                        columns={columns}
                        disableColumnMenu={true}
                        hideFooter
                        showCellRightBorder
                        showColumnRightBorder  
                        headerHeight={40}          
                        rowHeight={40}
                        sx={{ height: '100%' }}/>
                    </div>
                </Grid>
                <Grid item xs={9} sx={{ pl: 1 ,pr: 1, mb: 1}}>
                    <CharacterDetailTabs dInfo = {detailsInfo}/>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default CharacterDetail;