import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from '../modules/Header';
import CharacterDetail from '../creations/CharacterDetail';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import characterAPI from "../modules/api/character"

// 型定義
interface CocMetaInfo {
  job: string;
  sex: string;
  age: number;
  height: number;
  weight: number;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  home_place: string;
  mental_disorder: string;
  edu_background: string;
  memo: string;
}
interface CocStatusParameters {
  str: number;
  con: number;
  pow: number;
  dex: number;
  app: number;
  size: number;
  inte: number;
  edu: number;
  hp: number;
  mp: number;
  init_san: number;
  current_san: number;
  idea: number;
  knowledge: number;
  damage_bonus: number;
  luck: number;
  max_job_point: number;
  max_concern_point: number;
}
interface CocSkill {
  skill_id: number;
  skill_name: string;
  job_point: number;
  concern_point: number;
  grow: number;
  other: number;
  skill_type: number;
  summary?: number;
}
interface CharacterType {
  id: number | string;
  user_id: string;
  character_name: string;
  player_name: string;
  game_system: string;
  prof_img_path: string;
  tags: string;
  create_time: string;
  update_time: string;
  delete_time: string;
  coc_meta_info: CocMetaInfo;
  coc_status_parameters: CocStatusParameters;
  coc_skills: CocSkill[];
}

const CharacterInfo = () => {
    const baseCharacter: CharacterType = {
        id: 1,
        user_id: "error",
        character_name: "エラー",
        player_name: "エラー",
        game_system: "エラー",
        prof_img_path: "",
        tags: "エラー",
        create_time: "1970-01-01",
        update_time: "1970-01-01",
        delete_time: "1970-01-01",
        coc_meta_info: {
            job: "エラー",
            sex: "エラー",
            age: 0,
            height: 0,
            weight: 0,
            hair_color: "エラー",
            eye_color: "エラー",
            skin_color: "エラー",
            home_place: "エラー",
            mental_disorder: "エラー",
            edu_background: "エラー",
            memo: "エラー"
        },
        coc_status_parameters: {
            str: -1,
            con: -1,
            pow: -1,
            dex: -1,
            app: -1,
            size: -1,
            inte: -1,
            edu: -1,
            hp: -1,
            mp: -1,
            init_san: -1,
            current_san: -1,
            idea: -1,
            knowledge: -1,
            damage_bonus: -1,
            luck: -1,
            max_job_point: -1,
            max_concern_point: -1
        },
        coc_skills: [{
            skill_id: -1,
            skill_name: "エラー",
            job_point: -1,
            concern_point: 0,
            grow: 0,
            other: 0,
            skill_type: 0
        }]
    };
    const [oneCharacter, setCharacter] = useState<CharacterType>(baseCharacter);
    // キャラクターID をpathパラメータから取得
    const { game_system, character_id } = useParams<{ game_system: string; character_id: string }>();
    useEffect(() => {
        if (!character_id) return;
        characterAPI.getAll(character_id).then((characterRes: any) => {
            for (let i = 0; i < characterRes.result.coc_skills.length; ++i) {
                const obj = characterRes.result.coc_skills[i];
                characterRes.result.coc_skills[i].summary = obj.concern_point + obj.grow + obj.job_point + obj.other;
            }
            setCharacter(characterRes.result);
        });
    }, [character_id]);

    return (
        <div>
            <Header />
            <Card sx={{ m: 2, border: 3, borderColor: '#8c7851' }}>
                <Box sx={{ borderBottom: 3, borderBottomColor: '#8c7851', backgroundColor: '#F9F4EF' }}>
                    <Grid container alignItems="center">
                        <Grid item sx={{ m: 1 }}>
                            <Typography sx={{ ml: 1 }} variant="h5" color='#020826' align='left'>{oneCharacter.character_name}</Typography>
                        </Grid>
                        <div style={{ flexGrow: 1 }}></div>
                        <Typography sx={{ ml: 1 }} variant="h5" color='#020826' align='left'>PL: {oneCharacter.player_name} </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#8c7851', borderColor: '#8c7851', color: '#FFF' }} sx={{ m: 1 }}>編集</Button>
                        <Button variant="contained" style={{ backgroundColor: '#8c7851', borderColor: '#8c7851', color: '#FFF' }} sx={{ m: 1 }}>出力</Button>
                    </Grid>
                </Box>
                {/* APIから取得したキャラクターデータを CharacterDetail に渡す */}
                <CharacterDetail character={oneCharacter} />
            </Card>
        </div>
    );
};
export default CharacterInfo;