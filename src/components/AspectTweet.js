import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CustomEmoji from './CustomEmoji';

const Tweet = (props) => (
  <ListItem 
    button
  >
    <ListItemAvatar>
      <CustomEmoji polarity={props.polarity} />
    </ListItemAvatar>
    <ListItemText primary={props.text} secondary={props.aspect} />
  </ListItem>
);

export default Tweet;
