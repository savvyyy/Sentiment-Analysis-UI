import React, { useState } from 'react';
import Tabs from '../components/Tabs'
import TextField from '../components/TextField';

const AppRouter = () => {
  const initialState = { text: '', source: 0}
  const [data, setData] = useState(initialState)
  const tabs = (data.text)? <Tabs data={data}/>: ''
  return <div className="holder">
    <TextField textSearch={(searchData) => setData(searchData)}/>
    {tabs}
  </div>
};

export default AppRouter;
