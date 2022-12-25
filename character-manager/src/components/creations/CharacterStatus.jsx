import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'
import EditableTable from "../modules/EditableTable";

export default function CharacterStatus() {
  return (
    <Grid item xs container direction="column">
      <Grid item container>
        <EditableTable />
      </Grid>
      <Grid item container>
        <Grid item xs={4} sx={{ pr: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="idea" label="アイデア" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="knowledge" label="知識" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="damageBonus" label="ダメージ・ボーナス" variant="outlined" />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={4} sx={{ pr: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="initSan" label="初期正気度" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="currentSan" label="正気度" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ pl: 1 }}>
          <FormControl sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="luck" label="幸運" variant="outlined" />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}