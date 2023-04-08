import React from 'react';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from '../modules/Header';
import CharacterDetail from '../creations/CharacterDetail';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";

const CharacterInfo = () => {

    return (
        <div>
            <Header />
            <Card sx={{ mt:2, border:2, borderColor: '#8c7851' }}>
                <Box sx={{backgroundColor: '#8c7851'}}>
                    <Grid container>
                        <Grid item sx={{m:1}}>
                            <Typography variant="h4" color='white' align='left'>キャラクター詳細</Typography>
                        </Grid>            
                        <div style={{ flexGrow: 1 }}></div>
                        <Button variant="contained" sx={{m:1}}>編集</Button>
                        <Button variant="contained" sx={{m:1}}>出力</Button> 
                    </Grid>
                </Box>
                <CharacterDetail />
            </Card>
        </div>
    );
};
export default CharacterInfo