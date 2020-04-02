import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
// import NotFoundPage from '../components/NotFoundPage';
// import Header from '../components/Header';
import Tabs from '../components/Tabs'
import TextField from '../components/TextField';
// import PortfolioItemPage from '../components/PortfolioItemPage';
// import PortfolioPage from '../components/PortfolioPage';

const AppRouter = () => {
  const initialState = { text: '', source: 0}
  const [data, setData] = useState(initialState)
  return <div className="holder">
    <TextField textSearch={(searchData) => setData(searchData)}/>
    <Tabs data={data}/>
  </div>
};

export default AppRouter;
