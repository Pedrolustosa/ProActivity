import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lumen/bootstrap.min.css';
import Menu from './components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
        <Menu/>
        <div className='container'>
          <App />
        </div>
  </Router>,
  document.getElementById('root')
);
