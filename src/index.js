import renderTree from './render.js';
import store from './redux-store.js';

renderTree(store.getState(), store.dispatch.bind(store));

store.subscribe(()=>
{
    let state=store.getState();

    renderTree(state,store.dispatch.bind(store));
}
);
