import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import characterAPI from "../modules/api/character";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TagButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(0.5, 1),
    fontSize: '0.75rem',
    backgroundColor: '#fff',
    color: '#333',
    '&:hover': {
      backgroundColor: '#ccc',
    },
  }));

export default function CharacterCard(){
    const navigate = useNavigate();
    const [characterOverviewInfo, setCharacterOverviewInfo] = useState([]);

    // APIからデータを取得
    useEffect(() => {
        fetchCharacterList();
      }, []);

    const fetchCharacterList = async () => {
    try {
        const characterRes = await characterAPI.getCharacterList();
        setCharacterOverviewInfo(characterRes.result);
    } catch (error) {
        console.error("キャラクターリスト取得エラー", error);
    }
    };

    const handleEdit = async(id) => {
        navigate(`/characters/${id}/edit`);
    };
    
    const handleDelete = async (id) => {
    if (window.confirm('本当に削除しますか？')) {
        try {
        await characterAPI.delete(id);
        // 削除後に一覧を再取得
        fetchCharacterList();
        } catch (error) {
        console.error("削除エラー", error);
        }
    }
    };
  
    return(
        <>
        <Grid container spacing={1}>
        {characterOverviewInfo.map(coInfo => {
            return(            
                <Grid item sm container key={coInfo.id}>
                <Card sx={{width: 360 ,backgroundColor: '#FFF', boxShadow: 3, border:2, borderColor:'#8c7851'}}>
                    <CardMedia sx={{ mt: 1, mr: 1, ml: 1, height: 250, borderRadius: 2}} image="/coharu.png" title={coInfo.character_name} />
                    <CardContent sx={{pb:0}} align="left">
                        <Typography  variant="h5" component="div">
                            {coInfo.character_name}
                        </Typography>
                        <Typography variant="body1" align="left">
                            システム：
                            {coInfo.game_system}
                        </Typography>
                        <Stack direction="row" flexWrap="wrap">
                            <TagButton key="tagbutton" variant="contained">
                                #{coInfo.tags}
                            </TagButton>
                        </Stack>
                    </CardContent>
                    <CardContent sx={{ pt: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography fontSize={10} color="text.secondary">
                            作成日: {coInfo.create_time}<br />
                            更新日: {coInfo.update_time}
                        </Typography>
                        <Stack direction="row" >
                            <IconButton 
                                sx={{color:"#020826", '&:hover': { color: (theme) => theme.palette.primary.main }}}
                                onClick={() => {
                                let systemPath = coInfo.game_system;
                                if (systemPath === "クトゥルフ神話TRPG") {
                                systemPath = "coc";
                                }
                                navigate(`/characters/${coInfo.id}`);
                            }}>
                                <InfoIcon />
                            </IconButton>
                            <IconButton sx={{color:"#020826", '&:hover': { color: (theme) => theme.palette.primary.main }}}
                                onClick={() => handleEdit(coInfo.id)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton sx={{color:"#020826" , '&:hover': { color: (theme) => theme.palette.error.main }}}
                                onClick={() => handleDelete(coInfo.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                    </CardContent>
                </Card>
                </Grid>
            )
        })
    }
    </Grid>
    </>
  );
}