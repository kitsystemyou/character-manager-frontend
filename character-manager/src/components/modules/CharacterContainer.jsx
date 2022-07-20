import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles'
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Button } from "@mui/material";

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



export default function CharacterContainer(){
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
              山田　花子
            </Typography>
            <Typography variant="h5" gutterBottom>
              システム：CoC
            </Typography>
            <Typography variant="body1">
              #2010対応 #ロスト #2012対応 #テスト
            </Typography>
            <Typography variant="caption" display="block">
              作成日：YYYY-MM-DD hh:mm:ss 更新日：YYYY-MM-DD hh:mm:ss 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item direction="column" >
          <ColorButton variant="contained" sx={{m:0.25}}> 詳細 </ColorButton>
          <ColorButton variant="contained" sx={{m:0.25}}> 編集 </ColorButton>
          <ColorButton variant="contained" sx={{m:0.25}}> 削除 </ColorButton>
      </Grid>
    </Grid>
  );
}