import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';

interface CharacterMemoType {
  memo: string;
}

type Props = {
  characterMemo: CharacterMemoType;
  setCharacterMemo: React.Dispatch<React.SetStateAction<CharacterMemoType>>;
};

const CharacterMemo: React.FC<Props> = ({ characterMemo, setCharacterMemo }) => {
  return (
    <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
      <TextField
        id="memo"
        label="メモ欄"
        variant="outlined"
        rows={10}
        multiline
        value={characterMemo.memo}
        onChange={e => setCharacterMemo({ memo: e.target.value })}
      />
    </FormControl>
  );
};

export default CharacterMemo;