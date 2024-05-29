import React from 'react'
import './footer.css';

const Footer = ({length}) => {
    // const date = new Date();
  return (
    <footer>
      {/* Copyrights <span className="foot">&copy;</span> {date.getFullYear()} */}
      {length} List {length===1 ? "item" : "items"}
      </footer>
  );
}

export default Footer;