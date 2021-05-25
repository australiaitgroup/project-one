import React from 'react';
import Header from './app/Header';
import Page from './app/Page';
import Footer from './app/Footer';



// 当我在代码中需要一个地方去持久化保存可更改的值的时候？
// 我需要的东西是什么

// Class Component
// 返回一段 JSX 片段
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'HOME',
    };

    // 无论 caller 是谁，都指向 this
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(newPage) {
    // Cannot read property 'setState' of undefined
    this.setState({
      page: newPage,
    });
  }

  render() {
    const { page } = this.state;

    // 简单的标准的 JS 赋值, 这里没有 React 的参与
    // React 就不知道需要去做协调，去更新结果
    
    // this.state.page = 'SERVICES'
    
    return (
      <div className="main">
        <div className="container">
          <Header 
            // 函数是普通老百姓
            onPageChange={this.handlePageChange}
            page={page} 
          />
          <Page page={page} />
          <Footer />
        </div>
      </div>
    );
  }
}


// Function Component
// 通过声明 Function 来创建的组件
// 但是 Function Component 无法持久化状态
// const App = () => {
//   // variable，相应的 button 点击后可以更改赋值，实现了页面和导航切换
//   // 如何 onclick？
//   // 如何 赋值？

// let page = 'BLOG';
    
//     return (
//       <div className="main">
//         <div className="container">
//           <Header page={page} />
//           <Page page={page} />
//           <Footer />
//         </div>
//       </div>
//     );
// }

export default App;
