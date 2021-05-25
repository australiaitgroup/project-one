import React from 'react';

const ServicesPage = () => (
  <div id="SERVICES" className="page">
    <div className="page__header">
      <h2 className="page__title">Services</h2>
    </div>
    <div className="page__content">
      <div className="servicesPage__services">
        <h3 className="services__title">
          My
          <span className="services__titleHightLight">Services</span>
        </h3>
        <div className="services">
          <div className="serviceItem">
            <div className="serviceItem__imageContainer">
              <img alt="HTML5" src="./assets/html5.png" className="serviceItem__image"></img>
            </div>
            <h4 className="serviceItem__name">HTML5</h4>
            <div className="serviceItem__description">Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</div>
          </div>
          <div className="serviceItem">
            <div className="serviceItem__imageContainer">
              <img alt="CSS3" src="./assets/css3.png" className="serviceItem__image"></img>
            </div>
            <h4 className="serviceItem__name">CSS3</h4>
            <div className="serviceItem__description">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</div>
          </div>
          <div className="serviceItem">
            <div className="serviceItem__imageContainer">
              <img alt="JavaScript" src="./assets/js.png" className="serviceItem__image"></img>
            </div>
            <h4 className="serviceItem__name">JavaScript</h4>
            <div className="serviceItem__description">JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.</div>
          </div>
        </div>
      </div>
      <div className="servicesPage__clients">
        <h3 className="services__title">
          Clients
        </h3>
        <div className="clients">
          <img alt="REA Group" src="./assets/rea.png" className="clientItem"></img>
          <img alt="carsales.com.au" src="./assets/carsales.svg" className="clientItem"></img>
          <img alt="Seek" src="./assets/seek.png" className="clientItem"></img>
        </div>
      </div>
    </div>
  </div>
);

export default ServicesPage;
