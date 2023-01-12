import React,{useState} from 'react'
import {Outlet,Link,Router} from "react-router-dom";
const Navbar=(props)=>{
    const {handleMode,mode}=props;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:"sticky",top:"0px",zIndex:1}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/instant_news">Instant News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/instant_news">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/instant_news/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/instant_news/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/instant_news/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/instant_news/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/instant_news/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/instant_news/technology">Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {!mode?(<button className="btn btn-outline-success mx-2 my-2" onClick={handleMode}>Enable Light Mode</button>):(<button className="btn btn-outline-success mx-2 my-2" onClick={handleMode}>Enable Dark Mode</button>)}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default Navbar;