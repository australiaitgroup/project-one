import React from 'react';

import './SocialMedia.scss';

const SocialMedia = ({
  type,
}) => (
  <i className={`fab fa-${type} homepage__socialMediaItem`} />
);

export default SocialMedia;
