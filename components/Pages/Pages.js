import HomePage from './components/HomePage/HomePage';
import ResumePage from './components/ResumePage/ResumePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import './Pages.css';

const Pages = () => (
  <div className="pages">
    <HomePage />
    <ResumePage active />
    <ServicesPage />
    <div id="BLOG" className="page"></div>
    <div id="CONTACT" className="page"></div>
  </div>
);

export default Pages;
