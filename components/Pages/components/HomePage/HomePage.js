import Page from '../../../Page/Page';
import Avatar from './components/Avatar/Avatar';
import Tagline from './components/Tagline/Tagline';
import AboutMe from './components/AboutMe/AboutMe';
import ContactTable from './components/ContactTable/ContactTable';
import './HomePage.css';

// 自我否定，自我怀疑
// RMR
// SOLID
// 半本秘籍走天下
// 单一职责，依赖注入
const HomePage = ({
  active,
}) => (
  <Page
    active={active}
    header={(
      <div className="homepage__header">
        <Avatar />
        <Tagline />
      </div>
    )}
  >
    <div className="homepage__content">
      <AboutMe />
      <ContactTable />
    </div>
  </Page>
);

export default HomePage;
