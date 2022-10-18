import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import News from "./pages/News/News";

function App() {
  return (
    <Router>
      <Navbar />
      {/* {popup?<Login style={{ position: "absolute" }} />} */}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
