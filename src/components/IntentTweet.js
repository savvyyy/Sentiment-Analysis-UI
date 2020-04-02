import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  aspect:{
    overflowWrap: "break-word"
  }
}));

const Tweet = (props) => {
  const classes = useStyles();
  return (<ListItem 
      button
    >
    <ListItemText primary={props.text} secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              <b>Intent: </b>{props.intent}
              </Typography>
              <span>Score: {props.score}</span>
            </React.Fragment>
          } />
  </ListItem>)
};

export default Tweet;
