import React from 'react';
import noimg from '../static/noimg.png';
const NewsItem=(props)=>{
    const {mode}=props;
    const style={display:"inline-block",width:"100%",borderRadius:"10px",padding:"2px 5px",textAlign:"center",color:"red"}
    return (
        <>
            <div className={!mode?"card my-3 mx-3 bg-dark":"card my-3 mx-3 bg-light"} style={{width: "18rem",textAlign:"justify"}}>
                {props.src?(<img src={props.src} className="card-img-top" alt="..." style={{padding:"5px",height:"200px"}} />):(<img src={noimg} className="card-img-top" alt="..." style={{padding:"5px",height:"200px"}} />)}
                    <div className="card-body" style={{height:"300px",overflow:"auto"}}>
                        <h5 className="card-title text-primary">{props.title?props.title:"No Title"}</h5>
                        <p className={!mode?"card-text text-info":"card-text text-dark"}>{props.desc}</p>
                    </div>
                        <a  target="_blank" href={props.link} className="btn btn-primary my-2" style={{width:"60%",margin:"auto"}}>Read full story</a>
                <div style={style} className="my-1">Published By: {props.source}</div>
            </div>
        </>
    )
}
export default NewsItem;