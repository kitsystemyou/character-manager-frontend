import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles'
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Icon = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function AdditionalInfo(){
  return(
    <Grid container spacing={2}>
      <Grid item  >
        <ButtonBase sx={{width:128, height: 128}}>
          <Icon alt="complex" src="/coharu.png" />
        </ButtonBase>
      </Grid>
      <Grid item sm container>
        <Grid item xs container direction="column">
          <Grid item xs>
            <Typography variant="h3">
              追加情報
            </Typography>
            <Typography variant="h5" gutterBottom>
              システム：CoC
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}