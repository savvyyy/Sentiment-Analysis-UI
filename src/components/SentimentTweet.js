import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CustomEmoji from './CustomEmoji';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  user:{
    overflowWrap: "break-word"
  },
  created_at:{
    overflowWrap: "break-word"
  }
}));

const Tweet = (props) => {
  const classes = useStyles();
  return (<ListItem 
    button
  >
    <ListItemAvatar>
      <CustomEmoji polarity={props.sentiment} />
    </ListItemAvatar>
    <ListItemText primary={props.text} secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              <b>Sentiment: </b>{props.sentiment}
              </Typography>
              <span className={classes.user}>username: {props.username}</span>
              <span className={classes.created_at}>@{props.created_At}</span>
            </React.Fragment>
          } />
  </ListItem>)
};

export default Tweet;
