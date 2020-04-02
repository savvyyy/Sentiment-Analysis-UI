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
  aspect:{
    overflowWrap: "break-word"
  }
}));

const Tweet = (props) => {
  console.log('propsss2', props)
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
              <span className={classes.aspect}>Aspect: {props.aspect.join(',')}</span>
            </React.Fragment>
          } />
  </ListItem>)
};

export default Tweet;
