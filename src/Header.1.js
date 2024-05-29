import React from 'react';
import './header.css';

const Header = ({title}) => {
    return (
        <header>
            <h3>{title}</h3>
        </header>
    );
};
Header.defaultProps ={
   title:"To Do List"
}
export default Header;
