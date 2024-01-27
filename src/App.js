import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import React,{useState}  from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App=()=> {
 const  pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
 
  
 const getNewsProps=(category)=> {
    return {
      apiKey:apiKey,
      pageSize:pageSize,
      category:category,
    };
  }
  
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
           <Routes>
      <Route
        exact
        path="/"
        element={<News category="general" setProgress={
          setProgress} {...
          getNewsProps("general")} />}
      />
      <Route
        exact
        path="/business"
        element={<News category="business"  setProgress={
          setProgress}{...
          getNewsProps("business")} />}
      />
      <Route
        exact
        path="/entertainment"
        element={<News category="entertainment"  setProgress={
          setProgress}{...
          getNewsProps("entertainment")} />}
      />
      <Route
        exact
        path="/general"
        element={<News category="general" setProgress={
          setProgress} {...
          getNewsProps("general")} />}
      />
      <Route
        exact
        path="/health"
        element={<News category="health"  setProgress={
          setProgress} {...
          getNewsProps("health")} />}
      />
      <Route
        exact
        path="/science"
        element={<News category="science"  setProgress={
          setProgress}{...
          getNewsProps("science")} />}
      />
      <Route
        exact
        path="/sports"
        element={<News category="sports" setProgress={
          setProgress} {...
          getNewsProps("sports")} />}
      />
      <Route
        exact
        path="/technology"
        element={<News category="technology" setProgress={
          setProgress} {...
          getNewsProps("technology")} />}
      />
    </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
//rcc
//return using render()
//in function based return directly
