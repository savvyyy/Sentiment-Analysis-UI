import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CustomEmoji from './CustomEmoji'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textAlign: {
    textAlign: "center"
  }
});

export default function Sentiment(props) {
  const classes = useStyles();

  return (
    <Card className={classes.textAlign}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <CustomEmoji polarity={props.data.sentiment} />
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <b>Score: </b>{props.data.score}
        </Typography>
      </CardContent>
    </Card>
  );
}
