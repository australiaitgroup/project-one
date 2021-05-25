import React from 'react';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';


// Declarative

// JS 直接写 HTML -> JSX
// JSX 插入 JS 片段

// JSX 内的 true/false (boolean), null, undefined, [] 值不会被渲染出来
// {} 不被接受
// 0 会被渲染出来

const Page = ({ 
  page,
}) => (
  <div className="pages">
    {page === 'HOME' && (<HomePage />)}
    {page === 'RESUME' && (<ResumePage />)}
    {page === 'SERVICES' && (<ServicesPage />)}
    {page === 'CONTACT' && (<div id="CONTACT" className="page">CONTACT</div>)}
    {page === 'BLOG' && (<div id="BLOG" className="page">BLOG</div>)}
  </div>
);

export default Page;
