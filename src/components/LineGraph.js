import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import TextField from '../components/TextField';
import moment from 'moment';
import Loader from './LoaderComponent'

export default (props) => {

  const [data, setGraphData] = useState([]);
  const [vsData, setVsData] = useState([]);
  const originalData = props.data;

  useEffect(() => {
    let tData = [];

    props.data.map((item) => {
      tData.push({'date': item.date, 'source1': item.polarity});
    });
    setGraphData(tData);
  }, [props.data])

 
  const searchTweet = (props, data) => {
    let mergedData = mergeTwoSources(originalData, vsDatas);
    console.error("merge", mergedData);
    setGraphData(mergedData);
    setVsData(vsDatas);
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
  
  const vsDatas = [
    {
      date: '2013-03-24', polarity: 2400,
    },
    {
      date: '2013-03-25', polarity: 2000,
    },
    {
      date: '2013-03-26', polarity: 1500,
    },
    {
      date: '2013-03-27', polarity: 40,
    },
    {
      date: '2013-03-28', polarity: 1000,
    },
  ];

  if(props.loading){
    return <Loader />
  }
  else{
    return (
      <React.Fragment>
        <div className="holder">
          <TextField placeholder={"vs Tweet"} textSearch={searchTweet} />
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
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="source1" stroke="#8884d8" activeDot={{ r: 8 }} />
          {
            vsData.length > 0 && 
            <Line type="monotone" dataKey="source2" stroke="#82ca9d" />
          }
        </LineChart>
      </React.Fragment>
    );
  }
}
