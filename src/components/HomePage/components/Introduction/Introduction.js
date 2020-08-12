import React from 'react';
import SocialMedia from  './components/SocialMedia';
import avatar from './assets/avatar.png';

import './Introduction.scss';

const Introduction = () => (
  <div className="page__header homepage__header">
    <img className="homepage__avatar" src={avatar} alt="Avatar" />
    <div className="homepage__title">
      <h2 className="homepage__name">Tifa Lockhart</h2>
      <div className="homepage__position">Final Fantasy VII</div>
      <div className="homepage__socialMedias">
        <SocialMedia type="twitter" />
        <SocialMedia type="facebook-f" />
        <SocialMedia type="instagram" />
      </div>
    </div>
  </div>
);

export default Introduction;