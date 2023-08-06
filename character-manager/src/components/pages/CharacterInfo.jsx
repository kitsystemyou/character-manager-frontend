import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from '../modules/Header';
import CharacterDetail from '../creations/CharacterDetail';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import characterAPI from "../modules/api/character"

const CharacterInfo = () => {
    const baseCharacter = 
    {
        "id": 1,
        "user_id": "string",
        "character_name": "kale",
        "player_name": "yoh",
        "game_system": "coc",
        "prof_img_path": "/path/to/image",
        "tags": "coc,hogehoge",
        "create_time": "2019-08-24",
        "update_time": "2019-08-24",
        "delete_time": "2019-08-24",
        "coc_meta_info": {
            "job": "student",
            "sex": "male",
            "age": "25",
            "height": "170",
            "weight": "60",
            "hair_color": "black",
            "eye_color": "black",
            "skin_color": "white",
            "home_place": "tokyo",
            "mental_disorder": "",
            "edu_background": "bachelar",
            "memo": "memo"
        },
        "coc_status_parameters":{
            "str": 13,
            "con": 13,
            "pow": 13,
            "dex": 13,
            "app": 13,
            "size": 13,
            "int": 13,
            "edu": 13,
            "hp": 13,
            "mp": 13,
            "init_san": 50,
            "current_san": 50,
            "idea": 13,
            "knowledge": 13,
            "damage_bonus": 13,
            "luck": 13,
            "max_job_point": 200,
            "max_concern_point": 200
        },
        "coc_skills": [{
            "skill_name":"こぶし",
            "job_point":"20",
            "concern_point":"10",
            "grow":"",
            "other":"",
            "skill_type":"attack"
        }]
      }
    const [oneCharacter, setCharacter] = useState(baseCharacter); // character にする
    // キャラクターID をpathパラメータから取得
    let { game_system, character_id } = useParams();
    oneCharacter.id = character_id
    console.log("pathParams: ", game_system, character_id)
    useEffect( () => {
    console.log("useEffect");
    characterAPI.getAll(oneCharacter.id).then( characterRes => { // API コール: character 取得
        console.log("characterRes", characterRes.result)
        setCharacter(characterRes.result) // 取得したデータで更新
      });
    console.log("end of useEffect")
    }, [oneCharacter.id]);

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
                {/* APIから取得したキャラクターデータを CharacterDetail に渡す */}
                <CharacterDetail character={oneCharacter}/>
            </Card>
        </div>
    );
};
export default CharacterInfo