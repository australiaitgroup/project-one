import React from 'react';
import PersonalTable from './components/PersonalTable';

import './Information.scss';

const Information = () => (
  <div className="page__content homepage__content">
    <div>
      <h3 className="homepage__aboutMeHeader">
        About
        <span className="homepage__aboutMeHeaderHighlight">Me</span>
      </h3>
      <div className="homepage__aboutMeContent">
        Bright and optimistic, Tifa always cheers up the others when they're down. But don't let her looks fool you, she can decimate almost any enemy with her fists...
      </div>
    </div>
    <PersonalTable />
  </div>
);

export default Information; 