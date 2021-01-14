import Page from '../../../Page/Page';
import PageTitle from '../../../PageTitle/PageTitle';
import './ResumePage.css';

// props drill down
const ResumePage = ({ 
  active,
}) => (
  <Page 
    active={active}
    header={(<PageTitle>Resume</PageTitle>)}
  >
    <div className="resumePage__sub">
      <Education />
      <Experience />
    </div>
    <div className="resumePage__sub">
      <div>
        <h3 className="resumeSub__title">Design <span className="resumeSub__titleHighlight">Skills</span></h3>
        <div className="skill">
          <h4 className="skill__title">Web Design</h4>
          <div className="skill__level skill__level--webDesign"></div>
        </div>
        <div className="skill">
          <h4 className="skill__title">Graphic Design</h4>
          <div className="skill__level skill__level--graphicDesign"></div>
        </div>
        <div className="skill">
          <h4 className="skill__title">Print Design</h4>
          <div className="skill__level skill__level--printDesign"></div>
        </div>
      </div>
      <div>
        <h3 className="resumeSub__title">Coding <span className="resumeSub__titleHighlight">Skills</span></h3>
        <div className="skill">
          <h4 className="skill__title">HTML Design</h4>
          <div className="skill__level skill__level--htmlDesign"></div>
        </div>
        <div className="skill">
          <h4 className="skill__title">CSS Design</h4>
          <div className="skill__level skill__level--cssDesign"></div>
        </div>
        <div className="skill">
          <h4 className="skill__title">JavaScript Design</h4>
          <div className="skill__level skill__level--jsDesign"></div>
        </div>
      </div>
    </div>
  </Page>
);

export default ResumePage;
