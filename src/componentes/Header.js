import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Estamos comenzando con ReactJS</h1>

            {/* <nav>
                <a href="#/">Home</a>
                <a href="#/">Blog</a>
                <a href="#/">Photos</a>
                <a href="#/">Contact</a>
            </nav> */}
        </header>
        );
      }
  }

  export default Header;