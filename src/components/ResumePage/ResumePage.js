import React from 'react';

import './ResumePage.css';

const ResumePage = () => (
  <section id="RESUME" className="page page--active">
    <div className="page__header">
      <h2 className="page__title">RESUME</h2>
    </div>
    <div className="page__content">
      <div className="resumePage__sub">
        <div>
          <h3 className="resumeSub__title">Education</h3>
          <div className="timelines">
            <div className="timeline">
              <h4 className="experience__title">Specialization Course</h4>
              <div className="experience__meta">
                <span className="experience__year">2010</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">Apple Inc.</span>
              </div>
              <div className="experience__description">
                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
              </div>
            </div>
            <div className="timeline">
              <h4 className="experience__title">Specialization Course</h4>
              <div className="experience__meta">
                <span className="experience__year">2010</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">Apple Inc.</span>
              </div>
              <div className="experience__description">
                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
              </div>
            </div>
            <div className="timeline">
              <h4 className="experience__title">Specialization Course</h4>
              <div className="experience__meta">
                <span className="experience__year">2010</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">Apple Inc.</span>
              </div>
              <div className="experience__description">
                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
              </div>
            </div>  
          </div>
        </div>
        <div>
          <h3 className="resumeSub__title">Experience</h3>
          <div className="timelines">
            <div className="timeline">
              <h4 className="experience__title">Specialization Course</h4>
              <div className="experience__meta">
                <span className="experience__year">2010</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">Apple Inc.</span>
              </div>
              <div className="experience__description">
                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
              </div>
            </div>
            <div className="timeline">
              <h4 className="experience__title">Specialization Course</h4>
              <div className="experience__meta">
                <span className="experience__year">2010</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">Apple Inc.</span>
              </div>
              <div className="experience__description">
                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
              </div>
            </div>
            <div className="timeline">
              <h4 className="experience__title">Specialization Course</h4>
              <div className="experience__meta">
                <span className="experience__year">2010</span>
                &nbsp;
                <i className="experience__divider"></i>
                &nbsp;
                <span className="experience__company">Apple Inc.</span>
              </div>
              <div className="experience__description">
                Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
              </div>
            </div>  
          </div>
        </div>
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
    </div>
  </section>
);

export default ResumePage;
