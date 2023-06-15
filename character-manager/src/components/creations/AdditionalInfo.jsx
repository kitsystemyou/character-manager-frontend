import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'


export default function AdditionalInfo(props){
  useEffect(() => props.setAdditionalInfo(props.additionalInfo),[props]);

  return(
    <Grid container spacing={2}>
      <Grid item sm container>
        <Grid item xs container direction="column">
          <Grid item xs>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined"
            onChange={(event)=>props.setAdditionalInfo({...props.additionalInfo, edu_backgroud:event.target.value})}>
              <TextField id="eduBackground" label="学校・学位" variant="outlined"/>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined"
            onChange={(event)=>props.setAdditionalInfo({...props.additionalInfo, mental_disorder:event.target.value})}>
              <TextField id="mentalDisorder" label="精神的な障害" variant="outlined"/>
            </FormControl>
          </Grid>
          <Grid item xs container>
            <Grid item xs={6} sx={{pr:1}}>
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined"
            onChange={(event)=>props.setAdditionalInfo({...props.additionalInfo, height:event.target.value})}>
              <TextField id="height" label="身長" variant="outlined"/>
              </FormControl>  
            </Grid> 
            <Grid item xs={6} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined"
            onChange={(event)=>props.setAdditionalInfo({...props.additionalInfo, weight:event.target.value})}>
              <TextField id="weight" label="体重" variant="outlined"/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs container>
            <Grid item xs={4} sx={{pr:1}}>
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined"
            onChange={(event)=>props.setAdditionalInfo({...props.additionalInfo, hair_color:event.target.value})}>
              <TextField id="hairColor" label="髪の色" variant="outlined"/>
              </FormControl>  
            </Grid> 
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined"
            onChange={(event)=>props.setAdditionalInfo({...props.additionalInfo, eye_color:event.target.value})}>
              <TextField id="eyeColor" label="瞳の色" variant="outlined"/>
              </FormControl>
            </Grid>
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined"
            onChange={(event)=>props.setAdditionalInfo({...props.additionalInfo, skin_color:event.target.value})}>
              <TextField id="skinColor" label="肌の色" variant="outlined"/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined"
            onChange={(event)=>props.setAdditionalInfo({...props.additionalInfo, memo:event.target.value})}>
              <TextField id="memo" label="その他・メモ欄" variant="outlined" rows={5} multiline/>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}