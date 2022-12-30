import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles'
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

export default function CharacterDetail(){
    return(
        <Grid container>
            <Grid item>
                <Icon sx={{width:256, height: 256}} alt="complex" src="/NoImage.png" />
                <ColorButton variant="contained" sx={{mt:3}}> アイコンを選択 </ColorButton>
            </Grid>
        </Grid>
    )
};