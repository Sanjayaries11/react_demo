import React from 'react'
import './footer.css';

const Footer = () => {
    const date = new Date();
  return (
    <footer>Copyrights <span className="foot">&copy;</span> {date.getFullYear()}</footer>
  );
}

export default Footer;