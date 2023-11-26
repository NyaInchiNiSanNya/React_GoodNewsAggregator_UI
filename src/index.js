import renderTree from './render.js';
import store from './state.js';

renderTree(store.getState(), store.dispatch.bind(store));

store.subscribe(renderTree);
