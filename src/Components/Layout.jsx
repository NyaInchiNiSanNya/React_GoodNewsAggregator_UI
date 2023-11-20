import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Header from './Header/Header';
import classes from './Layout.module.css';
import { BrowserRouter } from 'react-router-dom';

let Layout = (props) => {
    return (
      <BrowserRouter>
        <div className={classes.Grid}>
          <Navigation></Navigation>
          <Content  content={props} ></Content>
          <Header></Header>
        </div>
        </BrowserRouter>
    );
    
  };

  export default Layout;