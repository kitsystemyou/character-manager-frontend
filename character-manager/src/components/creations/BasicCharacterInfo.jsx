import React, { useEffect }  from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

const Icon = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#8c7851'),
  fontSize: 20,
  backgroundColor: '#8c7851',
  '&:hover': {
    backgroundColor: '#716040',
  }
}));

export default function BasicCharacterInfo(props){
  const changeForm = (e) => {
    console.log(e.target.value)
  }
    
  useEffect(() => props.setCharaName(props.charaName),[props]);

  return(
    <Grid container spacing={2}>
      <Grid item >
        <Icon sx={{width:256, height: 256}} alt="complex" src="/NoImage.png" />
        <ColorButton variant="contained" sx={{mt:3}}> アイコンを選択 </ColorButton>
      </Grid>
      <Grid item sm container>
        <Grid item xs container direction="column" sx={{mr:2}}>
          <Grid item xs>
            <FormControl id="characterNameInput" fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined" onChange={(event)=>props.setCharaName(event.target.value)}>
              <TextField label="キャラクター名" variant="outlined"/>
            </FormControl>
            <h2>{props.charaName}</h2>
          </Grid>
          <Grid item xs>
            <FormControl id="playerNameInput" fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined" onChange={changeForm}>
              <TextField label="プレイヤー名" variant="outlined"/>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl id="tagsInput" fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined" onChange={changeForm}>
              <TextField label="タグ名" variant="outlined"/>
            </FormControl>
          </Grid>
          <Grid item xs container>
            <Grid item xs={6} sx={{pr:1}}>
              <FormControl id="jobInput" fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined" onChange={changeForm}>
              <TextField label="職業" variant="outlined"/>
              </FormControl>  
            </Grid> 
            <Grid item xs={6} sx={{pl:1}}>        
              <FormControl id="homePlaceInput" fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined" onChange={changeForm}>
              <TextField label="出身" variant="outlined"/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs container>
            <Grid item xs={6} sx={{pr:1}}>
              <FormControl id="sexInput" sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined" onChange={changeForm}>
              <TextField label="性別" variant="outlined"/>
              </FormControl>  
            </Grid> 
            <Grid item xs={6} sx={{pl:1}}>         
              <FormControl id="ageInput" sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined" onChange={changeForm}>
              <TextField label="年齢" variant="outlined"/>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}