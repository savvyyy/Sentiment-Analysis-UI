import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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

export default function Sentiment() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.textAlign}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <CustomEmoji polarity={1} />
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <b>Score: </b>2.8
        </Typography>
        {/* <Typography variant="body2">
          <CustomEmoji polarity={1} />
          <CustomEmoji polarity={2} />
          <CustomEmoji polarity={3} />
          <CustomEmoji polarity={4} />
          <CustomEmoji polarity={5} />
        </Typography> */}
      </CardContent>
    </Card>
  );
}
