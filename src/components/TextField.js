import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import BusinessIcon from '@material-ui/icons/Business';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
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
  console.log('TextField', props)
  let selectOptions = '';
  const classes = useStyles();
  const [source, setSource] = useState('twitter');
  const [intentSource, setIntentSource] = useState('restraunt')
  const [text, setText] = useState("")
  const handleChange = (event) => {
    setSource(event.target.value);
  };
  const handleIntentChange = (event) => {
    setIntentSource(event.target.value);
  };
  const handleChangeSearch = (event) => {
    event.preventDefault;
    if(props.returnText) {
      props.returnText(event.target.value);
    }
    setText(event.target.value);
  };
  const searchTweet = _ => {
    let sourceData = props.tab == 2? intentSource: source
    props.textSearch({text, source: sourceData, tab: props.tab})
  }

  const preventSubmit = (event) => {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
    }
  }
  
  switch (props.tab) {
    case 1:
      selectOptions = 
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={source}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value='twitter'><TwitterIcon color="primary"/></MenuItem>
          <MenuItem value='restraunt'><BusinessIcon color="primary"/></MenuItem>
          <MenuItem value='laptop'><SmartphoneIcon color="primary"/></MenuItem>          
        </Select> 
      break;
    case 2:
      selectOptions = 
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={intentSource}
          onChange={handleIntentChange}
          input={<BootstrapInput />}
        >
          <MenuItem value='restraunt'><BusinessIcon color="primary"/></MenuItem>
          <MenuItem value='laptop'><SmartphoneIcon color="primary"/></MenuItem>          
        </Select> 
      break;
    default:
      selectOptions = 
        <MenuItem value='twitter'><TwitterIcon color="primary"/></MenuItem> 
      break;
  }
  
  return (
    <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder={props.placeholder || "Search Hashtags"}
        inputProps={{ 'aria-label': '' }}
        onChange={handleChangeSearch}
        onKeyDown={preventSubmit}
        onKeyPress={preventSubmit}
        defaultValue = {props.source2Text || ''}
      />
      <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={searchTweet}>
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      { selectOptions }
    </Paper>
  );
}