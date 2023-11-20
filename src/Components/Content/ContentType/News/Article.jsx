import classes from './Article.module.css';


let Article = (props)=>{
    return <div >
        <div > 
            <img className={classes.img} src={props.article.picture}></img>
        </div>
    {props.article.header}
    </div>
  };
  
  export default Article;  