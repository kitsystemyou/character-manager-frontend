import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'
import StatusEditableTable from "../modules/EditableTable/StatusEditableTable";

export default function CharacterStatus(props) {
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
            <TextField id="outlined-read-only-input" label="不定の狂気" value={props.characterStatus.init_san*4/5} InputProps={{readOnly: true}}/>
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