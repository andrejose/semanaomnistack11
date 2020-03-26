import React from 'react';

//function Header(props) {
//<h1>{ props.title }</h1>
function Header({ children }) {
  return (
    <header>
        <h1>{children}</h1>
    </header>
  );
}

export default Header;