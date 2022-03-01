import React,{useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';

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
            <Route path="/" element={<News category="general" mode={mode} />} />
            <Route path="/sports" element={<News category="sports" mode={mode} />} />
            <Route path="/business" element={<News category="business" mode={mode} />} />
            <Route path="/entertainment" element={<News category="entertainment" mode={mode} />} />
            <Route path="/health" element={<News category="health" mode={mode} />} />
            <Route path="/science" element={<News category="science" mode={mode} />} />
            <Route path="/technology" element={<News category="technology" mode={mode} />} />
        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  )
}
export default App;