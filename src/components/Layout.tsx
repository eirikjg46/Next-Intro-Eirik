// components/Layout.js
import Link from 'next/link';

const Layout = ({ children }) => (
  <div>
    <nav>
      <Link href="/"> Home </Link>
      <Link href="/quiz"> Quiz </Link>
      <Link href="/create"> Create </Link>
      {/* Add more navigation links as needed */}
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;