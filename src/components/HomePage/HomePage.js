import React from 'react';
import Introduction from './components/Introduction';
import Information from './components/Information';

import './HomePage.scss';

const HomePage = () => (
  <section id="HOME" className="page page--active">
    <Introduction />
    <Information />
  </section>
);

export default HomePage;