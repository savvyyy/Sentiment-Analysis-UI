import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AspectTweet from './AspectTweet'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Loader from './LoaderComponent'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listView:{
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  textAlign: {
    textAlign: "center"
  }
}));

export default function TweetList(props) {
  const classes = useStyles();
  if(props.loading){
    return <Loader />
  }
  else{
    let content = ''
    if(typeof props.data[0] == 'undefined' ){
      content = <div className={classes.textAlign}><p>No Result Found!!</p></div>
    }else{
      content = <List className={classes.listView}>
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
    }
    return (
      <Card >
        <CardContent>
          {content}
        </CardContent>
      </Card>
    );
  }
}
