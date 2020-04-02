import React, {useState} from 'react';
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
  const [graphData, setGraphData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.error("newVaue", newValue);
    switch (newValue) {
      case 0:
        let sentiment = getSentimentAnalysis();
        setSentiment(sentiment)
        break;
      case 1:
        let aspects = getAspectAnalysis();
        setAspectTweet(aspects)
        break;
      case 2:
        let intents = getIntentAnalysis();
        setIntentTweet(intents)
        break;
      case 3:
        let graphData = getGraphData();
        setGraphData(graphData)
        break;
    }
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const getSentimentAnalysis = _ => {
    let {data} = axios.get('https://www.google.com/')
    return [];
  }

  const getAspectAnalysis = _ => {
    let {data} = axios.get('https://www.google.com/')
    return [];
  }

  const getIntentAnalysis = _ => {
    let {data} = axios.get('https://www.google.com/')
    return [];
  } 

  const getGraphData = _ => {
    // let {data} = axios.get('https://www.google.com/')
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
      <p>{data.text}</p>
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
          <Sentiment />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AspectTweetList />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <IntentTweetList />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <LineGraph data = {graphData}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}