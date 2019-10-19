// Header.js

import React , {Component} from 'react';


class Header extends Component{
    render(){
        return (
            <header>
                <div className="container">
                    <div className="header-top">
                        <a className="navbar-brand" href="index.html">
                            <img src="img/icon-tailor-logo.svg" alt="Start My Icon" />
                        </a>
                        <div className="header-btn main_dropdown_header">
                            <div className="dropdown">
                                <button className=" btn language-btn-header dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    EN <i className="material-icons">keyboard_arrow_down</i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#" data-value="action"><span><img src="img/us-flag.png" /></span> English (US)</a></li>
                                    <li><a href="#" data-value="another action"><span><img src="img/france.svg" /></span> French</a></li>
                                </ul>
                                <a href="#" className="link-head" data-toggle="modal" data-target="#signup">Login</a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;