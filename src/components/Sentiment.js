import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CustomEmoji from './CustomEmoji'
import Loader from './LoaderComponent'
import SentimentTweets from './FullScreenDialogue'

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
  if(props.loading){
    return <Loader />
  }
  else{
    let content = ''
    if(typeof props.data.tweets == 'undefined' ){
      content = <div><p>No Result Found!!</p></div>
    }else{
      content = <div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <CustomEmoji polarity={props.data.sentiment} />
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.data.sentiment}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <b>Score: </b>{props.data.average}
        </Typography>
        <SentimentTweets tweets={props.data.tweets} />
        </div>
    }

    return (
      <Card className={classes.textAlign}>
        <CardContent>
          {content}
        </CardContent>
      </Card>
    );
  }
}
