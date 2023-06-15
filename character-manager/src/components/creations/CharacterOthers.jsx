import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'
import CharacterHistoryEditableTable from "../modules/EditableTable/CharacterHistoryEditableTable";
import CharacterDataEditableTable from "../modules/EditableTable/CharacterDataEditableTable";
import WealthEditableTable from "../modules/EditableTable/WealthEditableTable";
import { Typography } from "@mui/material";

export default function CharacterOthers() {
  return (
    <Grid item xs container direction="column">
      <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>探索者の履歴</Typography>
      <Grid item container sx={{ mb: 2 }}>
        <CharacterHistoryEditableTable />
      </Grid>
      <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>探索者のデータ</Typography>
      <Grid item container sx={{ mb: 2 }}>
        <CharacterDataEditableTable />
      </Grid>
      <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>収入と財産</Typography>
      <Grid item container sx={{ mb: 2 }}>
        <WealthEditableTable />
      </Grid>
      <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>読んだクトゥルフ神話の魔導書</Typography>
      <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
      <TextField id="memo" variant="outlined" rows={5} multiline/>
    </FormControl>
      <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>アーティファクト/学んだ呪文</Typography>
    <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
      <TextField id="memo"  variant="outlined" rows={5} multiline/>
    </FormControl>
      <Typography variant="h4" style={{ textalign: 'left' }} sx={{ mt: 2, mb: 2 }}>遭遇した超自然の存在</Typography>
    <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
      <TextField id="memo" variant="outlined" rows={5} multiline/>
    </FormControl>
    </Grid>
  );
}