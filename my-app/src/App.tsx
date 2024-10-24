import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './main.css'
import Header from './Header';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Error from './pages/error';
import Footer from './Footer';
//import Main from './Main';



function App() {
  return (
    <div >
    <Header />


    <main className='main wrapper'>
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/Page2' Component={Page2} />
        <Route path='/Page3' Component={Page3} />
        <Route path='*' Component={Error} />
      </Routes>
    </Router>
    </main>

    <Footer />
    </div>

  );
}

export default App;
