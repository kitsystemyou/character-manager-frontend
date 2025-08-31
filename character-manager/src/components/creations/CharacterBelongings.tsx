import React from "react";
import Grid from "@mui/material/Grid";
import WeaponEditableTable from "../modules/EditableTable/WeaponEditableTable";
import BelongingsEditableTable from "../modules/EditableTable/BelongingsEditableTable";
import { Typography } from "@mui/material";

interface Weapon {
  weapon: string;
  skill_point: string;
  damage: string;
  range: string;
  number_of_attacks: string;
  ammunition_capacity: string;
  failure_value: string;
  endurance: string;
}
interface Belonging {
  item: string;
  quantity: string;
  detail: string;
}
interface CharacterBelongingsType {
  weapons: Weapon[];
  belongings: Belonging[];
}

type Props = {
  characterBelongings: CharacterBelongingsType;
  setCharacterBelongings: React.Dispatch<React.SetStateAction<CharacterBelongingsType>>;
};

const CharacterBelongings: React.FC<Props> = ({ characterBelongings, setCharacterBelongings }) => {
  // 必要に応じてWeaponEditableTableやBelongingsEditableTableにpropsを渡す
  return (
    <Grid item xs container direction="column">
      <Typography variant="h4" style={{ textAlign: 'left' }} sx={{ mt: 2, mb: 2 }}>武器</Typography>
      <Grid item container sx={{ mb: 2 }}>
        <WeaponEditableTable />
      </Grid>
      <Typography variant="h4" style={{ textAlign: 'left' }} sx={{ mt: 2, mb: 2 }}>所持品</Typography>
      <Grid item container sx={{ mb: 2 }}>
        <BelongingsEditableTable />
      </Grid>
    </Grid>
  );
};

export default CharacterBelongings;