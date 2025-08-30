import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';

interface AdditionalInfoType {
  edu_background: string;
  mental_disorder: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
}
type Props = {
  additionalInfo: AdditionalInfoType;
};

const AdditionalInfoReadOnly: React.FC<Props> = (props) => {
  return(
    <Grid container spacing={2}>
      <Grid item sm container>
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="eduBackground" label="学校・学位" value = {props.additionalInfo.edu_background} variant="outlined" InputProps={{readOnly: true}}/>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="mentalDisorder" label="精神的な障害" value={props.additionalInfo.mental_disorder} variant="outlined" InputProps={{readOnly: true}}/>
            </FormControl>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={4} sx={{pr:1}}>
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="hairColor" label="髪の色" value={props.additionalInfo.hair_color} variant="outlined" InputProps={{readOnly: true}}/>
              </FormControl>  
            </Grid> 
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="eyeColor" label="瞳の色" value={props.additionalInfo.eye_color} variant="outlined" InputProps={{readOnly: true}}/>
              </FormControl>
            </Grid>
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="skinColor" label="肌の色" value={props.additionalInfo.skin_color} variant="outlined" InputProps={{readOnly: true}}/>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default AdditionalInfoReadOnly;