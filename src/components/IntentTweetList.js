import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import IntentTweet from './IntentTweet'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TweetList() {
  const classes = useStyles();
  const tweets = [
    {
      id: 1,
      tweet: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      aspect: 'Food',
      polarity: 3
    },
    {
      id: 2,
      tweet: 'Montrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
      aspect: 'Service',
      polarity: 4
      
    },
    {
      id: 3,
      tweet: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"',
      aspect: 'City',
      polarity: 5
    },
    {
      id: 4,
      tweet: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
      aspect: 'Phone',
      polarity: 1
    },
    {
      id: 5,
      tweet: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
      aspect: 'Cafe',
      polarity: 2
    }
  ]
  return (
    <Card >
      <CardContent>
        {/* <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
        </FixedSizeList> */}
        <List>
          {
            tweets.map((el) => {
              return <IntentTweet key={el.id}
                              text={el.tweet}
                              polarity={el.polarity}
                              aspect={el.aspect} 
                      /> 
            })
          }
        </List>
      </CardContent>
    </Card>
  );
}
