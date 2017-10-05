import React from "react";

class Header extends React.Component {
    render() {
        return <div className="page-header-cnt">
            <header className="container main-header">
                <a href="/" className="main-logo">
                    <img src='images/logo.png' alt="Nasza firma" />
                </a>
                <nav className="main-nav">
                    <ul>
                        <li><a href="/">Start</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    }
}

export {Header}
