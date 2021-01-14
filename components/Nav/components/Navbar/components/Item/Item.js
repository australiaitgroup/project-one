// 在一个全新的 React 项目中，项目无法启动，console 出现以下错误，如何解决？
// Uncaught SyntaxError: Unexpected token '<'
// <a ....>...</a> 这个东西不是合法的 JavaScript
// 在 JS 里面直接写 html，这种写法是 JSX
// JSX 不是合法的 JavaScript
// JSX 是 Facebook 为了更加方便的书写 React 而开发的
// 而 React 本身是不包括 JSX 的
// 书写更加 RMR
// 如何把 JSX -> 合法的 JS？
// Tell me by your exp, could I write React app without JSX

// compile 编译
// 计算机只认识汇编语言 01 8bit
// 能不能只用二进制写代码? Yes, but no RMR
// c, c艹, Java, c井
// -> 汇编 -> 二进制 
// 把 Human Readable 代码转化成 Machine Readable 代码, compile

// Babel.js
// Use next generation JavaScript, today.
// 并不是每个浏览器都践行最新的 ES 标准
// 最新的 ES 标准是有 RMR 的好处的
// Babel: Non ES stander -> ES stander, compiler
// Facebook，React 只是扩展了这个 compiler，使 Babel 能够编译 JSX

// presets
import './Item.css';

const Item = ({
  active,
  href,
  children, // jsx 保留字段
}) => {
  let className = 'navbar__item';

  if (active) {
    className += ' navbar__item--active';
  }

  return (
    <a className={className} href={href}>{children}</a>
  );
};

export const A = () => {};
export const B = () => {};
export const MY_NAME = 'LONG ZHAO';

export default Item;
