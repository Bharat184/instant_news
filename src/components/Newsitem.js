import React from 'react';
import noimg from '../static/noimg.png';
const NewsItem=(props)=>{
    const {mode}=props;
    const style={display:"inline-block",width:"80%",borderRadius:"10px",padding:"2px 5px",textAlign:"center",color:"red"}
    return (
        <>
            <div className={!mode?"card my-3 mx-3 bg-dark":"card my-3 mx-3 bg-light"} style={{width: "18rem"}}>
                {props.src?(<img src={props.src} class="card-img-top" alt="..." />):(<img src={noimg} class="card-img-top" alt="..." />)}
                    <div className="card-body">
                        <h5 className="card-title text-primary">{props.title?props.title:"No Title"}</h5>
                        <p className={!mode?"card-text text-info":"card-text text-dark"}>{props.desc}</p>
                        <a  target="_blank" href={props.link} className="btn btn-primary">Read full story</a>
                    </div>
                <div style={style} className="my-1">Published By: {props.source}</div>
            </div>
        </>
    )
}
export default NewsItem;