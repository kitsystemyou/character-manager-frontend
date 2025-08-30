import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';
import StatusEditableTable from "../modules/EditableTable/StatusEditableTable";

interface CharacterStatusType {
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
type Props = {
  characterStatus: CharacterStatusType;
  setCharacterStatus: React.Dispatch<React.SetStateAction<CharacterStatusType>>;
  characterSkillsTableStatus: any;
  setCharacterSkillsTableStatus: React.Dispatch<React.SetStateAction<any>>;
};

const CharacterStatus: React.FC<Props> = (props) => {
  useEffect(() => props.setCharacterStatus(props.characterStatus),[props]);
  useEffect(() => props.setCharacterSkillsTableStatus(props.characterSkillsTableStatus),[props]);
  
  return (
    <Grid item xs container direction="column">
      <Grid item container>
        <StatusEditableTable 
          characterStatus = {props.characterStatus}
          setCharacterStatus = {props.setCharacterStatus}
          characterSkillsTableStatus = {props.characterSkillsTableStatus}
          setCharacterSkillsTableStatus = {props.setCharacterSkillsTableStatus}/>
      </Grid>
      <Grid item container>
        <Grid item xs={3} sx={{ pr: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="outlined-read-only-input" label="初期正気度" value={props.characterStatus.init_san} InputProps={{readOnly: true}}/>
          </FormControl>
        </Grid>
        <Grid item xs={3} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="outlined-read-only-input" label="不定の狂気" value={Number(props.characterStatus.init_san)*4/5} InputProps={{readOnly: true}}/>
          </FormControl>
        </Grid>
        <Grid item xs={3} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="outlined-read-only-input" label="ダメージ・ボーナス" value={props.characterStatus.damage_bonus} InputProps={{readOnly: true}}/>
          </FormControl>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default CharacterStatus;