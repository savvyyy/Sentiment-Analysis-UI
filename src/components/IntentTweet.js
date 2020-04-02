import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Tweet = (props) => (
  <ListItem 
    button
  >
    <ListItemText primary={props.text} secondary={props.aspect} />
  </ListItem>
);

export default Tweet;
