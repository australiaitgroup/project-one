import React from 'react';
import NavBar from '../NavBar';
import HomePage from '../HomePage';
import Footer from '../Footer';

import './App.scss';

const App = () => (
  <div className="container">
    <NavBar />
    <div className="pages">
      <HomePage />
    </div>
    <Footer />
  </div>
);

export default App;
