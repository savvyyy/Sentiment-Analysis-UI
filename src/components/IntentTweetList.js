import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import IntentTweet from './IntentTweet'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Loader from './LoaderComponent'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TweetList(props) {
  const classes = useStyles();
  if(props.loading){
    return <Loader />
  }
  else{
    return (
      <Card >
        <CardContent>
          {/* <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
          </FixedSizeList> */}
          <List>
            {
              props.data.map((el) => {
                let [intent, score] = el.intent.slice(1, length-1).split(',')
                return <IntentTweet key={el.id}
                                text={el.tweet}
                                intent={intent.slice(1, intent.length-1)}
                                score={score}
                        /> 
              })
            }
          </List>
        </CardContent>
      </Card>
    );
  }
}
