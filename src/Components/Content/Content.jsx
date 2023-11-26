import classes from './Content.module.css';
import News from './ContentType/News/News';
import { Routes, Route } from 'react-router-dom';
import Settings from './ContentType/Settings';
import Admin from './ContentType/Admin';
import Login from './ContentType/Login';

let Content = (props) => {
  debugger;
  return <div className={`${classes.Content}`} >
    <Routes>
      <Route path='/news' element={<News news={props.state.content.news} />}>
        <Route path='sport' element={<News news={props.state.content.news} category="sport" />} />
        <Route path='science' element={<News news={props.state.content.news} category="science" />} />
        <Route path='animals' element={<News news={props.state.content.news} category="animals" />} />
        <Route path='auto' element={<News news={props.state.content.news} />} category="auto" />
        <Route path='lifestyle' element={<News news={props.state.content.news} category="lifestyle" />} />
      </Route>

      <Route path='/settings' element={<Settings />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/login' element={<Login
        newLogin={props.state.content.login.tempLoginField}
        newPassword={props.state.content.login.tempPasswordField}
        dispatch={props.dispatch}></Login>
      } />

    </Routes>
  </div>
};

export default Content;  