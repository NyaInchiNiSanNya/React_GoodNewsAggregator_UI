import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Components/Layout.jsx';


let root = null;

const render = (props, updateLogin, updatePassword) => (
  <React.StrictMode>
    <Layout state={props} updateLogin={updateLogin} updatePassword={updatePassword}></Layout>
  </React.StrictMode>
);

const renderTree = (props, updateLogin, updatePassword) => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById('root'));
  }
  root.render(render(props, updateLogin, updatePassword));
};

  export default renderTree;