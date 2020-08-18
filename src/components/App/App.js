import React from 'react';
import NavBar from '../NavBar';
import HomePage from '../HomePage';
import ResumePage from '../ResumePage';
import Footer from '../Footer';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    const navItems = [
      { key: 'HOME', value: 'Home', page: (<HomePage />)},
      { key: 'RESUME', value: 'Resume', page: (<ResumePage />)},
      { key: 'SERVICE', value: 'Service', page: (<div>Service</div>)},
      { key: 'BLOG', value: 'Blog', page: (<div>Blog</div>)},
      { key: 'CONTACT', value: 'Contact', page: (<div>Contact</div>)},
    ];

    this.state = {
      currentPage: navItems[0].key,
      navItems,
    }
  }

  componentDidMount() {
    this.changePageTimer = setTimeout(() => {
      this.setCurrentPage('RESUME');
    }, 3000);
  }

  componentDidUpdate() {
    if (this.state.currentPage !== 'HOME' && this.changePageTimer) {
      clearTimeout(this.changePageTimer)
    }
  }
  
  setCurrentPage(pageName) {
    this.setState({
      currentPage: pageName,
    });
  }

  render() {
    const { currentPage, navItems } = this.state;

    return (
      <div className="container">
        <NavBar 
          navItems={navItems}
          currentPage={currentPage} 
          onNavItemClick={(page) => this.setState({ currentPage: page })} 
        />
        <div className="pages">
          {navItems.map((navItem) => {
            if (currentPage !== navItem.key) {
              return null;
            }

            return (
              <React.Fragment key={navItem.key}>
                {navItem.page}
              </React.Fragment>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
