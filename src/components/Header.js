import React from 'react';
import Link from './Routes/Link';
const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="/one">One</Link>
      <Link href="/two">Two</Link>
      <Link href="/three">Three</Link>
      <Link href="/four">Four</Link>
    </div>
  );
};

export default Header;
