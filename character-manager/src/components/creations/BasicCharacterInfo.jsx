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
  useEffect(() => {
    props.setbasicCharaInfo(props.basicCharaInfo)
    console.log("BasicCharacterInfo",props.basicCharaInfo)
  },[props]);

  return(
    <Grid container spacing={2}>
      <Grid item >
        <Icon sx={{width:256, height: 256}} alt="complex" src="/NoImage.png" />
        <ColorButton variant="contained" sx={{mt:3}}> アイコンを選択 </ColorButton>
      </Grid>
      <Grid item sm container>
        <Grid item xs container direction="column" sx={{mr:2}}>
          <Grid item xs>
            <FormControl id="characterNameInput" fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField label="キャラクター名" variant="outlined"
              value={props.basicCharaInfo.character_name || ""}
              onChange={(event)=>props.setbasicCharaInfo({...props.basicCharaInfo, character_name:event.target.value})}/>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl id="playerNameInput" fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField label="プレイヤー名" variant="outlined"
              value={props.basicCharaInfo.player_name || ""}
              onChange={(event)=>props.setbasicCharaInfo({...props.basicCharaInfo, player_name:event.target.value})}/>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl id="tagsInput" fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined" >
              <TextField label="タグ名" variant="outlined"
              value={props.basicCharaInfo.tags || ""}
              onChange={(event)=>props.setbasicCharaInfo({...props.basicCharaInfo, tags:event.target.value})}/>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}