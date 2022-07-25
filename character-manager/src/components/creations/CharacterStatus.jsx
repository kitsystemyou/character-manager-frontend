import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";

function createData(name, str, con, pow, dex, app, siz, int, edu, hp, mp) {
  return { name, str, con, pow, dex, app, siz, int, edu, hp, mp};
}

const rows = [
  createData('初期値', '','','','','','','','','',''),
  createData('増減値', '','','','','','','','','',''),
  createData('一時的', '','','','','','','','','',''),
  createData('現在値', '','','','','','','','','',''),
];

export default function CharacterStatus(){
  return(
    <Grid container spacing={2}>
      <Grid item sm container>
        <Grid item xs container direction="column">
          <Grid item xs>
            <TableContainer sx={{backgroundColor:'white'}}>
              <Table showColumnRightBorder aria-label="status table">
                <TableHead>
                  <TableRow>
                    <TableCell> </TableCell>
                    <TableCell align="center">STR</TableCell>
                    <TableCell align="center">CON</TableCell>
                    <TableCell align="center">POW</TableCell>
                    <TableCell align="center">DEX</TableCell>
                    <TableCell align="center">APP</TableCell>
                    <TableCell align="center">SIZ</TableCell>
                    <TableCell align="center">INT</TableCell>
                    <TableCell align="center">EDU</TableCell>
                    <TableCell align="center">HP </TableCell>
                    <TableCell align="center">MP </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">初期値</TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField align="right" id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                    <TableCell align="right">            
                      <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
                        <TextField id="height" variant="outlined"/>
                      </FormControl>  
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={2} container>
            <Grid item xs={4} sx={{pr:1}}>
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="idea" label="アイデア" variant="outlined"/>
              </FormControl>  
            </Grid> 
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="knowledge" label="知識" variant="outlined"/>
              </FormControl>
            </Grid>
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="damageBonus" label="ダメージ・ボーナス" variant="outlined"/>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={2} container>
            <Grid item xs={4} sx={{pr:1}}>
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="initSan" label="初期正気度" variant="outlined"/>
              </FormControl>  
            </Grid> 
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="currentSan" label="正気度" variant="outlined"/>
              </FormControl>
            </Grid>
            <Grid item xs={4} sx={{pl:1}}>         
              <FormControl sx={{ m: 1 , width: 1 , backgroundColor:'white' }} variant="outlined">
              <TextField id="luck" label="幸運" variant="outlined"/>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}