import Article from './Article';
import classes from './News.module.css';


let News = (props)=>{
  let articlesJSX=props.news
    .articles
    .map(article=>
    
    <Article key={article.id} article={article}></Article>)
    
    return <div   className={classes.grid}> 
      {articlesJSX}
    </div>
  };
  
  export default News;  