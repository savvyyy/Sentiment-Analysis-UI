import React from 'react';
import { render } from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/app.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

render(<AppRouter />, document.getElementById('app'));
