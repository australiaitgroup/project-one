import React from 'react';

import './Info.scss';

const Info = ({
  title,
  children
}) => (
  <tr>
    <td>{title}</td>
    <td>{children}</td>
  </tr>
);

export default Info;
