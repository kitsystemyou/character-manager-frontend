import React from "react";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CharacterContainer from "../modules/CharacterContainer";
import Search from "../modules/Search";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function CharacterList(){
    return(
        <div>
            <div className='search'>
                {/* 検索欄 */}
                <Search/>
            </div>
            <hr></hr>
            <div className='stack'>
                {/* キャラクター一覧 */}
                <Stack
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2} >
                    {/* データベースから持ってきて、Item1の中にいい感じに入れる */}
                    <Item>
                        aaaaa
                        <CharacterContainer />
                    </Item>                     
                    <Item>
                        aaaaa
                        <CharacterContainer />
                    </Item> 
                </Stack>
            </div>
        </div>
    );
}