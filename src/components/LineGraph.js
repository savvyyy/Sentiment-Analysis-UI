import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush
} from 'recharts';
import TextField from '../components/TextField';
import moment from 'moment';
import Loader from './LoaderComponent'
import axios from 'axios'
  // const [source2Text, setSource2]  = useState('');
  let  source2Text = '';
export default (props) => {
  const [data, setGraphData] = useState([]);
  const [vsData, setVsData] = useState([]);
  const [loading, setLoading] = useState(false)
  const originalData = props.data;
  const source1Text = props.sourceText;
  // const [source2Text, setSource2]  = useState('');

  const CustomTooltip = (props) => {
    return (
    <div class='container'>
      {
        props.payload[0] ?
          <div class="source">
            <p><h3><text>{props.payload[0].payload.date}</text></h3></p>
            <p><h4><b>#{source1Text}</b></h4></p>
            <p><text>Polarity : {props.payload[0].payload.source1}</text></p>
          </div>
        : ""
      }
      {
        props.payload[1] ?
          <div class="source">
            <p><h4><b>#{source2Text}</b></h4></p>
            <p><text>Polarity : {props.payload[1].payload.source2}</text></p>
          </div>
        : ""
      }
    </div>);

 }

  useEffect(() => {
    let tData = [];

    props.data.map((item) => {
      tData.push({'date': item.date, 'source1': item.polarity});
    });
    setGraphData(tData);
  }, [props.data])

  const getGraphData = (data) => {
    setLoading(true)
    return axios.get('http://127.0.0.1:5000/graph?hashtag='+data.text)
  }
 
  const searchTweet = (props) => {
    getGraphData(props).then( (response) => {
      let {data} = response
      let mergedData = mergeTwoSources(originalData, data);
      setGraphData(mergedData);
      setVsData(data);
      setLoading(false)
    }).catch((error) => {
      alert(error)
    })
  }
  const mergeTwoSources = (source1, source2)=> {
    let mergeData = [];
    let s1Index = 0, s2Index = 0;
    let s1Length = source1.length;
    let s2Length = source2.length;
    let s1LastData = 0;
    let s2LastData = 0;
    while(s1Index < s1Length && s2Index < s2Length) {
      let d1 = moment(source1[s1Index].date).valueOf();
      let d2 = moment(source2[s2Index].date).valueOf();
     

      if(d1 < d2) {
        mergeData.push({'date' : source1[s1Index].date, 'source1': source1[s1Index].polarity, 'source2': s2LastData});
        s1LastData = source1[s1Index].polarity;
        s1Index++;
      }
      else if(d1 > d2) {
        mergeData.push({'date' : source2[s2Index].date, 'source1': s1LastData, 'source2': source2[s2Index].polarity});
        s2LastData = source1[s2Index].polarity;
        s2Index++;
      }
      else {
        mergeData.push({'date' : source1[s1Index].date, 'source1': source1[s1Index].polarity, 'source2': source2[s1Index].polarity});
        s1LastData = source1[s1Index].polarity;
        s2LastData = source2[s2Index].polarity;
        s1Index++;
        s2Index++;
      }
    }
    while(s1Index < s1Length) {
      mergeData.push({'date' : source1[s1Index].date, 'source1': source1[s1Index].polarity, 'source2': s2LastData});
      s1Index++;
    }
    while(s2Index < s2Length) {
      mergeData.push({'date' : source2[s2Index].date, 'source1': s1LastData, 'source2': source2[s2Index].polarity});
      s2Index++;
    }
    return mergeData;
  }

  const returnText = (props) => {
    // console.log('errorrrrr', props)
    source2Text = props
  }

  if(props.loading || loading){
    return <Loader />
  }
  else{
    return (
      <React.Fragment>
        <div className="holder">
          <TextField source2Text={source2Text} placeholder={"vs Tweet"} textSearch={searchTweet} returnText={returnText} />
        </div>
        <LineChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <Brush dataKey="date" height={30} stroke="#8884d8" />
          <YAxis />
          <Tooltip content={<CustomTooltip/>}/>
          <Line type="linear" dataKey="source1" stroke="#8884d8" activeDot={{ r: 4 }} />
          {
            vsData.length > 0 &&
            <Line type="linear" dataKey="source2" stroke="#d88487" />
          }
        </LineChart>
      </React.Fragment>
    );
  }
}