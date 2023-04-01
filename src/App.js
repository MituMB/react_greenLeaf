// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header, Navbar } from "./components";
import BlogList from "./pages/BlogList";
import BlogSingle from "./pages/BlogSingle";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-list/:id" element={<BlogSingle />} />
          <Route path="/user-acc" element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
