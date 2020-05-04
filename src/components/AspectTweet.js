import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CustomEmoji from './CustomEmoji';
import Typography from '@material-ui/core/Typography';
import { cyan } from '@material-ui/core/colors';
import Highlighter from "react-highlight-words";

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
    overflowWrap: "break-word",
  },
  highlight:{
    backgroundColor: 'cyan'
  }
}));

const Tweet = (props) => {
  const classes = useStyles();
  const highlightedText = <Highlighter
  unhighlightClassName={classes.inline}
  highlightClassName={classes.highlight}
  searchWords={props.aspect}
  autoEscape={true}
  textToHighlight={props.text}
/>
  return (<ListItem 
    button
  >
    <ListItemAvatar>
      <CustomEmoji polarity={props.sentiment} />
    </ListItemAvatar>
    <ListItemText primary={highlightedText} secondary={
            <React.Fragment>
              <span className={classes.aspect}>Aspect: {props.aspect.join(',')}</span>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              <b>Sentiment: </b>{props.sentiment}
              </Typography>
            </React.Fragment>
          } />
  </ListItem>)
};

export default Tweet;
