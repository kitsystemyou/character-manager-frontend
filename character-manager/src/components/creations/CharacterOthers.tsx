import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';
import CharacterHistoryEditableTable from "../modules/EditableTable/CharacterHistoryEditableTable";
import CharacterDataEditableTable from "../modules/EditableTable/CharacterDataEditableTable";
import WealthEditableTable from "../modules/EditableTable/WealthEditableTable";
import { Typography } from "@mui/material";

interface History {
  sceinario: string;
  memo: string;
}
interface CharacterData {
  profile: string;
  datum: string;
}
interface Wealth {
  wealth: string;
  remarks: string;
}
interface CharacterOthersType {
  history: History[];
  character_data: CharacterData[];
  wealth: Wealth[];
  magic_book: string;
  artifact: string;
  mythical_creature: string;
}

type Props = {
  characterOthers: CharacterOthersType;
  setCharacterOthers: React.Dispatch<React.SetStateAction<CharacterOthersType>>;
};

const CharacterOthers: React.FC<Props> = ({ characterOthers, setCharacterOthers }) => {
  return (
    <Grid item xs container direction="column">
      <Typography variant="h4" style={{ textAlign: 'left' }} sx={{ mt: 2, mb: 2 }}>探索者の履歴</Typography>
      <Grid item container sx={{ mb: 2 }}>
        <CharacterHistoryEditableTable />
      </Grid>
      <Typography variant="h4" style={{ textAlign: 'left' }} sx={{ mt: 2, mb: 2 }}>探索者のデータ</Typography>
      <Grid item container sx={{ mb: 2 }}>
        <CharacterDataEditableTable />
      </Grid>
      <Typography variant="h4" style={{ textAlign: 'left' }} sx={{ mt: 2, mb: 2 }}>収入と財産</Typography>
      <Grid item container sx={{ mb: 2 }}>
        <WealthEditableTable />
      </Grid>
      <Typography variant="h4" style={{ textAlign: 'left' }} sx={{ mt: 2, mb: 2 }}>読んだクトゥルフ神話の魔導書</Typography>
      <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
        <TextField id="magic_book" variant="outlined" rows={5} multiline value={characterOthers.magic_book} onChange={e => setCharacterOthers({ ...characterOthers, magic_book: e.target.value })} />
      </FormControl>
      <Typography variant="h4" style={{ textAlign: 'left' }} sx={{ mt: 2, mb: 2 }}>アーティファクト/学んだ呪文</Typography>
      <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
        <TextField id="artifact" variant="outlined" rows={5} multiline value={characterOthers.artifact} onChange={e => setCharacterOthers({ ...characterOthers, artifact: e.target.value })} />
      </FormControl>
      <Typography variant="h4" style={{ textAlign: 'left' }} sx={{ mt: 2, mb: 2 }}>遭遇した超自然の存在</Typography>
      <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
        <TextField id="mythical_creature" variant="outlined" rows={5} multiline value={characterOthers.mythical_creature} onChange={e => setCharacterOthers({ ...characterOthers, mythical_creature: e.target.value })} />
      </FormControl>
    </Grid>
  );
};

export default CharacterOthers;