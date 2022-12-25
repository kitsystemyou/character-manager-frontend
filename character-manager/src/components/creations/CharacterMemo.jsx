import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'

export default function CharacterMemo() {
  return (
    <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
      <TextField id="memo" label="メモ欄" variant="outlined" rows={10} multiline/>
    </FormControl>
  );
}