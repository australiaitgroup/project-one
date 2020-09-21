import React from 'react';
import NavBar from '../NavBar';
import HomePage from '../HomePage';
import Footer from '../Footer';

import './App.scss';
import Navigation from '../NavBar/components/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 'HOME',
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(pageName) {
    return (event) => {
      event.preventDefault();

      this.setState({
        activePage: pageName,
      });
    };
  }

  render() {
    const { activePage } = this.state;

    return (
      <div className="container">
        <NavBar 
          activePage={activePage}
          onNavItemClick={this.changePage}
        />
        <div className="pages">
          {activePage === 'HOME' && <HomePage />}
          {activePage === 'RESUME' && <div>Resume</div>}
          {activePage === 'SERVICE' && <div>Service</div>}
          {activePage === 'BLOG' && <div>Blog</div>}
          {activePage === 'CONTACT' && <div>Contact</div>}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
