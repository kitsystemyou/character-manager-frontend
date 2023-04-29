import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'


export default function AdditionalInfo(){
  return(
    <Grid container spacing={2}>
      <Grid item sm container>
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="eduBackground" label="学校・学位" defaultValue="帝京平成大学" variant="outlined" InputProps={{readOnly: true}}/>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="mentalDisorder" label="精神的な障害" defaultValue="なし" variant="outlined" InputProps={{readOnly: true}}/>
            </FormControl>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={6} sx={{pr:1}}>
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="height" label="身長" defaultValue="193" variant="outlined" InputProps={{readOnly: true}}/>
              </FormControl>  
            </Grid> 
            <Grid item xs={6} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="weight" label="体重" defaultValue="ひみつ" variant="outlined" InputProps={{readOnly: true}}/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={4} sx={{pr:1}}>
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="hairColor" label="髪の色" defaultValue="黒" variant="outlined" InputProps={{readOnly: true}}/>
              </FormControl>  
            </Grid> 
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="eyeColor" label="瞳の色" defaultValue="黒" variant="outlined" InputProps={{readOnly: true}}/>
              </FormControl>
            </Grid>
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="skinColor" label="肌の色" defaultValue="肌色" variant="outlined" InputProps={{readOnly: true}}/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth sx={{ m: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="memo" label="その他・メモ欄" variant="outlined" defaultValue="エンジニアに必要なのは筋肉。筋肉があればプログラムが書ける。
健康のために始めたキックボクシングにはまり週7でジムに通う。
まじめな性格が災いし仕事のストレスでメンタルをやっている。
筋肉も鬱には勝てない。" rows={5} multiline InputProps={{readOnly: true}}/>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
  );
}