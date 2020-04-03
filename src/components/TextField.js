import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    margin: '35px 4px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function TextField(props) {
  let searchText = '';
  const classes = useStyles();
  const [source, setSource] = useState('');
  const [text, setText] = useState("")
  const handleChange = (event) => {
    setSource(event.target.value);
  };
  const handleChangeSearch = (event) => {
    event.preventDefault;
    if(props.returnText) {
      props.returnText(event.target.value);
    }
    setText(event.target.value);
  };
  const searchTweet = _ => {
    props.textSearch({text, source})
  }

  const preventSubmit = (event) => {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
    }
  }

  return (
    <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder={props.placeholder || "Search Tweets"}
        inputProps={{ 'aria-label': 'search tweets' }}
        onChange={handleChangeSearch}
        onKeyDown={preventSubmit}
        onKeyPress={preventSubmit}
      />
      <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={searchTweet}>
        <SearchIcon />
      </IconButton>
      {/* <Divider className={classes.divider} orientation="vertical" /> */}
      {/* <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={source}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
        <MenuItem value={0}><TwitterIcon color="primary"/></MenuItem>
      </Select> */}
    </Paper>
  );
}