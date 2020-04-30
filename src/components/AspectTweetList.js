import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AspectTweet from './AspectTweet'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FixedSizeList } from 'react-window';
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
              props.data.map((aspct) => {
                return <AspectTweet key={aspct.id}
                                    text={aspct.tweet || aspct.sentence}
                                    polarity={aspct.Polarity || aspct.polarity}
                                    sentiment={aspct.Sentiment || aspct.sentiment}
                                    aspect={aspct.Aspects || aspct.aspect} 
                        /> 
              })
            }
          </List>
        </CardContent>
      </Card>
    );
  }
}
