import classes from './Content.module.css';
import News from './ContentType/News/News';
import { Routes, Route } from 'react-router-dom';
import Settings from './ContentType/Settings';
import Admin from './ContentType/Admin';
import Login from './ContentType/Login';

let Content = (props)=>{
    return <div className={`${classes.Content}`} >
    <Routes>
        <Route path='/news' element={<News news={props.content.state.content.news} />}>
        <Route path='sport' element={<News news={props.content.state.content.news} category="sport" />} />
        <Route path='science' element={<News news={props.content.state.content.news} category="science"/>} />
        <Route path='animals' element={<News news={props.content.state.content.news} category="animals"/>} />
        <Route path='auto' element={<News news={props.content.state.content.news} />} category="auto"/>
        <Route path='lifestyle' element={<News news={props.content.state.content.news} category="lifestyle" />} />
        </Route>
        
        <Route path='/settings' element={<Settings />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login 
        newLogin={props.content.state.content.login.tempLoginField} 
        newPassword={props.content.state.content.login.tempPasswordField}
        updateLogin={props.content.updateLogin} 
        updatePassword={props.content.updatePassword}/>} />

      </Routes>
    </div>
  };
  
  export default Content;  