import React from 'react';
import '../../styles/tailwind.scss';

const Layout = ({ children }) => {
  return <div className='px-50 py-10'>{children}</div>;
};

export default Layout;
