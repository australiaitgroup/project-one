import React from 'react';
import Info from './components/Info';

import './PersonalTable.scss';

const PersonalTable = () => (
  <table className="homepage__contact">
    <tbody>
      <Info title="Age">20</Info>
      <Info title="Residence">Gaia</Info>
      <Info title="Address">Level 3 / 57 Coronation Drive, Brisbane</Info>
      <Info title="Email">
        <a href="mailto:info@jiangren.com.au">
          info@jiangren.com.au
        </a>
      </Info>
      <Info title="Phone">+0123 123 456 789</Info>
    </tbody>
  </table>
);

export default PersonalTable;