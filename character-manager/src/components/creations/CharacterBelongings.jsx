import React from "react";
import Grid from "@mui/material/Grid";
import WeaponEditableTable from "../modules/EditableTable/WeaponEditableTable";
import BelongingsEditableTable from "../modules/EditableTable/BelongingsEditableTable";
import { Typography } from "@mui/material";

export default function CharacterSkills() {
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
}