import classes from './MainNav.module.css';
import './../../Layout.css';
import NavButton from './NavButton';
import logo from '../../../img/Log.png';

let MainNav = () => {
    return <div className={`${classes.main_nav_block} main_block`}>
      
      <img className={classes.logo} src={logo} alt='megumin-logo'></img>
      
      <div  className={classes.buttons}>
      <NavButton link='news/' label='Новости'>Новости</NavButton>
      <NavButton link='news/sport' label='Спорт'>Спорт</NavButton>
      <NavButton link='news/lifestyle' label='Лайфстайл'>Лайфстайл</NavButton>
      <NavButton link='news/science' label='Наука'>Наука</NavButton>
      <NavButton link='news/animals' label='Животные' >Животные</NavButton>
      <NavButton link='news/auto' label='Авто' >Авто</NavButton>
      </div>
    
    </div>
  };
  
  export default MainNav;