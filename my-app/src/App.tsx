import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./template/main/main.css";

import Header from "./template/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Footer from "./template/footer/Footer";

import Navigation from "./components/navigation";
//import AppRouter from "./components/navigation";

function App() {
  return (
    <div>
      <Header />
      <main className="main wrapper">
        <div>
          <Navigation />


{/*           {
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/services" Component={Services} />
              <Route path="*" Component={Error} />
            </Routes>
          } */}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
