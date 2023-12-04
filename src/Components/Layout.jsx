import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Header from './Header/Header';
import classes from './Layout.module.css';
import { BrowserRouter } from 'react-router-dom';

let Layout = (props) => {
  debugger;
    return (
      
      <BrowserRouter>
        <div className={classes.Grid}>
          <Navigation></Navigation>
          <Content  state={props.state} dispatch={props.dispatch} ></Content>
          <Header></Header>
        </div>
        </BrowserRouter>
    );
    
  };

  export default Layout;