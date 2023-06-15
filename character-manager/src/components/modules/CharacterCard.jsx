import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#8c7851'),
  backgroundColor: '#8c7851',
  '&:hover': {
    backgroundColor: '#716040',
  }
}));

export default function CharacterCard(){
    const navigate = useNavigate();
    const characterOverviewInfo = [
        {
            id: 1,
            characterName: "山田花子",
            gameSystem: "クトゥルフ神話TRPG",
            tags:["2010対応", "ロスト", "2012対応", "テスト"],
            createTime: "YYYY-MM-DD hh:mm:ss",
            updateTime: "YYYY-MM-DD hh:mm:ss"
        },
        {
            id: 2,
            characterName: "山田花子",
            gameSystem: "クトゥルフ神話TRPG",
            tags:["2010対応", "ロスト", "2012対応", "テスト"],
            createTime: "YYYY-MM-DD hh:mm:ss",
            updateTime: "YYYY-MM-DD hh:mm:ss"
        },
        {
            id: 3,
            characterName: "山田花子",
            gameSystem: "クトゥルフ神話TRPG",
            tags:["2010対応", "ロスト", "2012対応", "テスト"],
            createTime: "YYYY-MM-DD hh:mm:ss",
            updateTime: "YYYY-MM-DD hh:mm:ss"
        },
        {
            id: 4,
            characterName: "山田花子",
            gameSystem: "クトゥルフ神話TRPG",
            tags:["2010対応", "ロスト", "2012対応", "テスト"],
            createTime: "YYYY-MM-DD hh:mm:ss",
            updateTime: "YYYY-MM-DD hh:mm:ss"
        },
        {
            id: 5,
            characterName: "山田花子",
            gameSystem: "クトゥルフ神話TRPG",
            tags:["2010対応", "ロスト", "2012対応", "テスト"],
            createTime: "YYYY-MM-DD hh:mm:ss",
            updateTime: "YYYY-MM-DD hh:mm:ss"
        },
        {
            id: 6,
            characterName: "山田花子",
            gameSystem: "クトゥルフ神話TRPG",
            tags:["2010対応", "ロスト", "2012対応", "テスト"],
            createTime: "YYYY-MM-DD hh:mm:ss",
            updateTime: "YYYY-MM-DD hh:mm:ss"
        }
    ]

    return(
        <>
        <Grid container spacing={1}>
        {characterOverviewInfo.map(coInfo => {
            return(            
                <Grid item sm container key={coInfo.id}>
                <Card sx={{width: 360 ,backgroundColor: '#F9F4EF', boxShadow: 3, border:2, borderColor:'#8c7851'}}>
                    <CardMedia sx={{ height: 250 }} image="/coharu.png" title="山田　花子" />
                    <CardContent align="left">
                        <Typography gutterBottom variant="h4" component="div">
                            {coInfo.characterName}
                        </Typography>
                        <Typography variant="body1" align="left">
                            システム：
                            {coInfo.gameSystem}
                        </Typography>
                        <Typography variant="body2" >
                            #{coInfo.tags[0]} #{coInfo.tags[1]} #{coInfo.tags[2]} #{coInfo.tags[3]}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <ColorButton variant="contained" onClick={() => {
                            if (coInfo.gameSystem === "クトゥルフ神話TRPG") {
                                coInfo.gameSystem = "coc"
                                console.log(coInfo.gameSystem)
                            }
                            navigate(`/info/${coInfo.gameSystem}/${coInfo.id}`)
                        }}> 詳細 </ColorButton>
                        <ColorButton variant="contained"> 編集 </ColorButton>
                        <ColorButton variant="contained"> 削除 </ColorButton>
                    </CardActions>
                    <CardContent align="left">
                        <Typography fontSize={10} color="text.secondary">
                                作成日: {coInfo.createTime}　　更新日： {coInfo.updateTime}
                        </Typography>
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