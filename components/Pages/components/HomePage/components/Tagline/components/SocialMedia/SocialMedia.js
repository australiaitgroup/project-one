import './SocialMedia.css';

// 按复用拆分 Component
const SocialMedia = ({
  iconName,
}) => (
  <i className={`fab fa-${iconName} homepage__socialMediaItem`}></i>
);

export default SocialMedia;
