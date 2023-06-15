import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'
import StatusEditableTable from "../modules/EditableTable/StatusEditableTable";

export default function CharacterStatus(props) {
  useEffect(() => props.setCharacterStatus(props.characterStatus),[props]);
  
  return (
    <Grid item xs container direction="column">
      <Grid item container>
        <StatusEditableTable 
          characterStatus = {props.characterStatus}
          setCharacterStatus = {props.setCharacterStatus}/>
      </Grid>
      <Grid item container>
        <Grid item xs={4} sx={{ pr: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined"
          onChange={(event)=>props.setCharacterStatus({...props.characterStatus, idea:event.target.value})}>
            <TextField id="idea" label="アイデア" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined"
          onChange={(event)=>props.setCharacterStatus({...props.characterStatus, knowledge:event.target.value})}>
            <TextField id="knowledge" label="知識" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined"
          onChange={(event)=>props.setCharacterStatus({...props.characterStatus, damage_bonus:event.target.value})}>
            <TextField id="damageBonus" label="ダメージ・ボーナス" variant="outlined" />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={4} sx={{ pr: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined"
          onChange={(event)=>props.setCharacterStatus({...props.characterStatus, init_san:event.target.value})}>
            <TextField id="initSan" label="初期正気度" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined"
          onChange={(event)=>props.setCharacterStatus({...props.characterStatus, current_san:event.target.value})}>
            <TextField id="currentSan" label="正気度" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined"
          onChange={(event)=>props.setCharacterStatus({...props.characterStatus, luck:event.target.value})}>
            <TextField id="luck" label="幸運" variant="outlined" />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}