import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CharacterContainer from "../modules/CharacterContainer";
import Header from "../modules/Header";
import Search from "../modules/Search";
import CharacterCard from "../modules/CharacterCard";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F9F4EF',
  padding: theme.spacing(1),
  marginTop: theme.spacing(1),
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  textalign: 'left',  
}));



const CharacterList = () => {
    const characterID = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
    ]
    return(
        <div>
            <Header />
            {/* 検索欄はmui v5に対応できてないので一旦保留 */}
            {/* <Search/> */}
            <hr />
            <div>
                <CharacterCard />
            </div>
            <div className='stack'>
                {/* キャラクター一覧 */}
                <Stack direction="column" justifyContent="center" alignItems="stretch">
                    {/* データベースから持ってきて、Item1の中にいい感じに入れる */
                        characterID.map(cId => {
                            return(
                                <Item sx={{ boxShadow: 3, border:2, borderColor:'#8c7851', borderRadius: 5}} key = {cId.id}>
                                    <CharacterContainer />
                                </Item>
                            )      
                        })
                    }
                </Stack>
            </div>
           
        </div>
    );
}
export default  CharacterList