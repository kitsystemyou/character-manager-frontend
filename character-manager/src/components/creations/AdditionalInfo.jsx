import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'


export default function AdditionalInfo(props) {
  useEffect(() => {
    props.setAdditionalInfo(props.additionalInfo)
    console.log("additionalInfo",props.additionalInfo)}, [props]);

  return (
    <Grid container spacing={2}>
      <Grid item sm container>
        <Grid item xs={6} sx={{ pr: 1 }}>
          <FormControl id="jobInput" fullWidth sx={{ m: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField label="職業" variant="outlined"
            value={props.additionalInfo.job || ""}
            onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, job: event.target.value })} />
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ pl: 1 }}>
          <FormControl id="homePlaceInput" fullWidth sx={{ m: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField label="出身" variant="outlined" 
            value={props.additionalInfo.home_place || ""}
            onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, home_place: event.target.value  })}/>
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ pr: 1 }}>
          <FormControl id="sexInput" sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField label="性別" variant="outlined" 
            value={props.additionalInfo.sex || ""}
            onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, sex: event.target.value  })}/>
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ pl: 1 }}>
          <FormControl id="ageInput" sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField label="年齢" variant="outlined" 
            value={props.additionalInfo.age || ""}
            onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, age: event.target.value  })}/>
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ pl: 1 }}>
          <FormControl id="eduBackground" sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField label="学校・学位" variant="outlined"
            value={props.additionalInfo.edu_background || ""}
            onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, edu_background: event.target.value })}/>
          </FormControl>
        </Grid>
        <Grid item xs={6} sx={{ pl: 1 }}>
          <FormControl id="mentalDisorder" sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField label="精神的な障害" variant="outlined" 
            value={props.additionalInfo.mental_disorder || ""}
            onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, mental_disorder: event.target.value })}/>
          </FormControl>
        </Grid>
          <Grid item xs={6} sx={{ pr: 1 }}>
            <FormControl id="height" sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
              <TextField label="身長" variant="outlined" 
              value={props.additionalInfo.height || ""}
              onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, height: event.target.value })}/>
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ pl: 1 }}>
            <FormControl id="weight" sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
              <TextField label="体重" variant="outlined" 
              value={props.additionalInfo.weight || ""}
              onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, weight: event.target.value })}/>
            </FormControl>
          </Grid>
          <Grid item xs={4} sx={{ pr: 1 }}>
            <FormControl id="hairColor" sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
              <TextField label="髪の色" variant="outlined" 
              value={props.additionalInfo.hair_color || ""}
              onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, hair_color: event.target.value })}/>
            </FormControl>
          </Grid>
          <Grid item xs={4} sx={{ pl: 1 }}>
            <FormControl id="eyeColor" sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
              <TextField label="瞳の色" variant="outlined" 
              value={props.additionalInfo.eye_color || ""}
              onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, eye_color: event.target.value })}/>
            </FormControl>
          </Grid>
          <Grid item xs={4} sx={{ pl: 1 }}>
            <FormControl id="skinColor" sx={{ m: 1, width: 1, backgroundColor: 'white' }} variant="outlined">
              <TextField label="肌の色" variant="outlined" 
              value={props.additionalInfo.skin_color || ""}
              onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, skin_color: event.target.value })}/>
            </FormControl>
          </Grid>
        <Grid item xs>
          <FormControl id="memo" fullWidth sx={{ m: 1, backgroundColor: 'white' }} variant="outlined">
            <TextField id="memo" label="その他・メモ欄" variant="outlined" rows={5} multiline 
            value={props.additionalInfo.memo || ""}
            onChange={(event) => props.setAdditionalInfo({ ...props.additionalInfo, memo: event.target.value })}/>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}