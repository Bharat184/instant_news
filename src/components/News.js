import React,{useState,useEffect} from 'react';
import NewsItem from './Newsitem.js';
import loading from '../static/loading.gif';
const News=(props)=>{
    const {category,mode}=props;
    const newsperpage=18;
    const [load,setLoad]=useState(true);
    const [news,setNews]=useState([]);
    const [pageno,setPageno]=useState(1);
    const [totalnews,setTotalnews]=useState(0);
    const [disptime,setDisptime]=useState(0);
    const [dispnews,setDispnews]=useState([]);

    const loadNews=async()=>{
      setLoad(true);
      let url=`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
      let i=pageno-1;
      let data=await fetch(url);
      let parsedData=await data.json();
      setNews(parsedData.articles);
      // console.log(parsedData.articles);
      setTotalnews(parsedData.articles.length);
      setDisptime(Math.ceil(parsedData.articles.length/newsperpage));
      // console.log(disptime);
      // console.log(pageno);
      if(disptime===pageno)
      {
        setDispnews(parsedData.articles.slice(newsperpage*i,totalnews));
      }
      else
      {
        setDispnews(parsedData.articles.slice(newsperpage*i,newsperpage*pageno));
      }
     setTimeout(()=>{
      setLoad(false);
      window.scrollTo(0,0);
     },1000)
  }

  const handleNext=()=>{
    setPageno(pageno+1);
  }

  const handlePrevious=()=>{
    setPageno(pageno-1);
  }

  useEffect(()=>{
    loadNews();
  },[category,pageno])
    return (
        <>
            {load?(<div className='container d-flex justify-content-center' style={{marginTop:"30vh",marginBottom:"15vh"}}><img src={loading} /></div>):(
              <>
                <div className="container d-flex justify-content-center flex-wrap bg-secondary my-3">
                {
                  dispnews.map((e,i)=>(
                  <NewsItem key={i} mode={mode} source={e.source.name} title={e.title} desc={e.description} src={e.urlToImage} link={e.url} />
                  ))
                }
              </div>
              <div className="container d-flex justify-content-between">
                <div><button className={pageno===1?"btn btn-primary disabled":"btn btn-primary"} onClick={handlePrevious}>&larr; Previous Page</button></div>
                <div><button className={pageno===disptime?"btn btn-primary disabled":"btn btn-primary"} onClick={handleNext}>Next Page &rarr;</button></div>
              </div>
              </>
            )}
        </>
    )
}
export default News;