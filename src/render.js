import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Components/Layout.jsx';


let root = null;

const render = (state, dispatch) => (
  <React.StrictMode>
    <Layout state={state} dispatch={dispatch}></Layout>
  </React.StrictMode>
);

const renderTree = (state, dispatch) => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById('root'));
  }
  root.render(render(state, dispatch));
};

  export default renderTree;