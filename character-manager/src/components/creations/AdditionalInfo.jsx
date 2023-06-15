import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'


export default function AdditionalInfo(){
  return(
    <Grid container spacing={2}>
      <Grid item sm container>
        <Grid item xs container direction="column">
          <Grid item xs>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="eduBackground" label="学校・学位" variant="outlined"/>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="mentalDisorder" label="精神的な障害" variant="outlined"/>
            </FormControl>
          </Grid>
          <Grid item xs container>
            <Grid item xs={6} sx={{pr:1}}>
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="height" label="身長" variant="outlined"/>
              </FormControl>  
            </Grid> 
            <Grid item xs={6} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="weight" label="体重" variant="outlined"/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs container>
            <Grid item xs={4} sx={{pr:1}}>
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="hairColor" label="髪の色" variant="outlined"/>
              </FormControl>  
            </Grid> 
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="eyeColor" label="瞳の色" variant="outlined"/>
              </FormControl>
            </Grid>
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="skinColor" label="肌の色" variant="outlined"/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="memo" label="その他・メモ欄" variant="outlined" rows={5} multiline/>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}