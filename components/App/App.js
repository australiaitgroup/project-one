// Component
// 300 多行 HTML -> 10 多个 30多行的小模块
// App
//   - Nav
//     - Logo
//     - Navbar
//       - NavbarItem
//       - NavbarItem
//   - Pages
//     - HomePage
//     - ResumePage

// template string
// const createNavbarItem = (href, children) => `
//   <a className="navbar__item" href="${href}">${children}</a>
// `;

// readable, maintainable
// function component == html element
// html element 传值? class id ... key=value
// const createNavbarItem = (props) => (
//   <a className="navbar__item" href={props.foo}>{props.bar}</a>
// );

// createNavbarItem({ foo: 'HOME', bar: 'Home' });

// 在 jsx 内，通过尖括号({})注入 js 代码
// key=value
// object
// { foo: 'HOME', bar: 'Home', name: 'alice' }
// JSX 传递 args 的方法, 和 html attrs 相同  使用 key=value 的形势
// properties -> props
// ES6 解构赋值, 以后能用就一定要用

// const NavbarItem = (props) => {
  // const { foo, bar } =  props;

// const NavbarItem = ({ foo, bar }) => {
//   // 入参 = props; props = 解构
//   // 入参 = 解构
//   // a = b; b = c;
//   // a = c;

//   return (
//     <a className="navbar__item" href={foo}>{bar}</a>
//   )
// };

// function component 标准写法
// readable, maintainable
// var 的命名要 reasonable

// children
// text
// content
// title
// displayValue

// function component == html dom element


// navBar camelCase

// jsx 区分 html element 和 Component 的方式
// 首字母是否大写
// angularJS -> React -> Vue -> angularJS Angular

// jQuery 命令式, DOM 操作
// angularJS Declarative, Component, Cross platform
// React performance 几百倍优于 angularJS (安卓和 IOS 打天下的年代)
// angularJS 重做成 Angular

// Performance 性能优化
// 区分 html element 和 react component 算法/逻辑
// div span a ui li section ...
// if else
// array log n, 遍历
// if (div span a ui li section 包括 tagName) 
// if (自定义的 component 不包括 tagName)
// ---
// if (tagName 首字母是小写)
// 尤雨溪 VUE 创作者
// 复杂的东西往简单去做，简单的东西往易用去做








// arrow function 箭头函数
// 1. class -> className, ...
// 2. self close tag
// 3. 调用自己的 component
// 4. 调用 component 如何传递数据 （props）
// 5. component 划分 (SOLID, RMR)
// 6. jsx 的基本工作原理
// 7. 为什么有 jsx 的地方，就一定需要有 React?
// 8. 为什么会出现 jsx

// eslint + jest (react testing lib | enzyme)
// 写小功能，多写多测试
// 1. CSS -> Nav...
// 正常工作
// 2. CSS -> App
// !debug
// 3. install dev server
// debug
// 4. bug

import Nav from  '../Nav/Nav';
import Pages from '../Pages/Pages';
import './App.css';

const App = () => (
  <div className="app">
    <div className="container">
      <Nav />
      <Pages />
    </div>
  </div>
);

export default App;

// =>

// 为什么有 jsx 的地方，就一定需要有 React?
// React.createElement('div', { className: 'main' }, [
//   React.createElement('div', { className: 'container' }),
//   // ...
// ]);

