import React from "react";
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

interface SearchProps {
  search: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ search }) => {
  return (
    <Box sx={{ paddingTop: 2, marginLeft: 2, marginRight: 3 }}>
      <Box
        sx={theme => ({
          position: 'relative',
          borderRadius: 1,
          backgroundColor: '#f9f4ef',
          '&:hover': { backgroundColor: 'white' },
          marginLeft: 0,
          width: '100%',
          border: '1px solid grey',
          [theme.breakpoints.up('sm')]: {
            marginLeft: 1,
            width: 'auto',
          },
        })}
      >
        <Box
          sx={theme => ({
            width: theme.spacing(9),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <SearchIcon onClick={(event: any) => search(event.target.value)} />
        </Box>
        <Input
          placeholder="検索"
          disableUnderline
          sx={theme => ({
            color: 'inherit',
            width: '100%',
            paddingTop: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(10),
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
              width: 120,
              '&:focus': {
                width: 200,
              },
            },
          })}
        />
      </Box>
    </Box>
  );
};

export default Search;
