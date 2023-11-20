import reportWebVitals from './reportWebVitals';
import renderTree from './render.js';
import {state, updateLogin, updatePassword} from './state.js';

renderTree(state, updateLogin,updatePassword);

reportWebVitals();
