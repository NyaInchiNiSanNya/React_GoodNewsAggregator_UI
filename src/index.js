import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './Components/Navigation/Navigation';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='Grid'>
    <Navigation></Navigation>
    <Content></Content>
    <Header></Header>
    </div>
  </React.StrictMode>
);
 
reportWebVitals();
