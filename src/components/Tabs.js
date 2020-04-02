import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AspectTweetList from './AspectTweetList'
import IntentTweetList from './IntentTweetList'
import LineGraph from './LineGraph';
import Sentiment from './Sentiment'
import axios from 'axios'
// import sentimentData from './../data/sentiment.json'
// import aspectData from './../data/sentiment.json'
// import sentimentData from './../data/sentiment.json'

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs(props) {
  
  const { data } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [sentiment, setSentiment] = useState({});
  const [aspectTweets, setAspectTweet] = useState([]);
  const [intentTweets, setIntentTweet] = useState([]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 1:
        getAspectAnalysis().then( (response) => {
          let {data} = response
          setAspectTweet(data) 
        }).catch((error) => {
          alert(error)
        })
        
        break;
      case 2:
        getIntentAnalysis().then( (response) => {
          let {data} = response
          setIntentTweet(data)
        }).catch((error) => {
          alert(error)
        })
        break;
      default:
        getSentimentAnalysis().then( (response) => {
          let {data} = response
          setSentiment(data)
        }).catch((error) => {
          alert(error)
        })
        break;
    }
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const getSentimentAnalysis = _ => {
    return axios.get('./../data/sentiment.json')
  }

  const getAspectAnalysis = _ => {
    return axios.get('./../data/aspect.json')
  }

  const getIntentAnalysis = _ => {
    return axios.get('./../data/intent.json')
  } 

  const getGraphData = _ => {
    
    const data = [
      {
        date: '2013-03-24', polarity: 4000,
      },
      {
        date: '2013-03-25', polarity: 5000,
      },
      {
        date: '2013-03-26', polarity: 2099,
      },
      {
        date: '2013-03-27', polarity: 900,
      }
    ];
    return data;
  } 

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Sentiment Analysis" {...a11yProps(0)} />
          <Tab label="Aspect Analysis" {...a11yProps(1)} />
          <Tab label="Intent Analysis" {...a11yProps(2)} />
          <Tab label="Graph" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Sentiment data={sentiment}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AspectTweetList data={aspectTweets}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <IntentTweetList data={intentTweets}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <LineGraph data = {graphData}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}