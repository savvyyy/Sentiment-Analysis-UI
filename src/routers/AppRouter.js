import React, { useState } from 'react';
import Tabs from '../components/Tabs'
import TextField from '../components/TextField';
const AppRouter = () => {
  const initialState = { text: '', source: 'twitter', tab: 0 }
  const [data, setData] = useState(initialState)
  const setSourceData = (tab) => {
    let sourceData;
    if(tab == 2){
      sourceData = 'restraunt'
    }else{
      sourceData = 'twitter'
    } 
    setData({ text: data.text, source: sourceData, tab })
  }
  const tabs = (data.text)? <Tabs data={data} searchForSource={(tab) => setSourceData(tab)}/>: ''
  return <div className="holder">
    <TextField tab={data.tab} textSearch={(searchData) => setData(searchData)}/>
    {tabs}
  </div>
};

export default AppRouter;
