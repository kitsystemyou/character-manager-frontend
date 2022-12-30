import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@mui/material/styles';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';


const styles = theme => ({
    root: {
        paddingTop: theme.spacing(2), 
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#f9f4ef",
        '&:hover': {
            backgroundColor: theme.palette.common.white,
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        border: "1px solid grey",
    },
    searchIcon: {
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

function Search(props) {
    
    const { classes, search } = props;
    return (
        <div className={classes.root} >
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon 
                    onClick={(event) => search(event.target.value)}
                />
                </div>
                <Input
                    placeholder="検索"
                    disableUnderline
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>
        </div>
    )
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
