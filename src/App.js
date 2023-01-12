import React,{useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import NotFound from './components/NotFound';

const App=()=>{
  const [mode,setMode]=useState(true);
    const handleMode=()=>{
        setMode(!mode);
    }
    if(!mode)
    {
      document.body.className="bg-dark";
    }
    else
    {
      document.body.className="bg-light";
    }
  return (
    <>
     <BrowserRouter>
        <Navbar handleMode={handleMode} mode={mode} />
        <Routes>
            <Route path="/instant_news" element={<News category="general" mode={mode} />} />
            <Route path="/instant_news/sports" element={<News category="sports" mode={mode} />} />
            <Route path="/instant_news/business" element={<News category="business" mode={mode} />} />
            <Route path="/instant_news/entertainment" element={<News category="entertainment" mode={mode} />} />
            <Route path="/instant_news/health" element={<News category="health" mode={mode} />} />
            <Route path="/instant_news/science" element={<News category="science" mode={mode} />} />
            <Route path="/instant_news/technology" element={<News category="technology" mode={mode} />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  )
}
export default App;