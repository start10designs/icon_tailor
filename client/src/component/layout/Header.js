// Header.js

import React , {Component} from 'react';
import Login from '../auth/Login';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {text:  "English (US)" };
        this.state.isLoggedIn = false;
        this.state.user = {};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        var selectedLanguage = e.target.attributes.getNamedItem('language').value;
        this.setState(state => ({
            text: selectedLanguage
        }));
        
    }

    componentDidUpdate(prevProps, prevState){
        this.state.isLoggedIn = this.props.auth.isAuthenticated;
        this.state.user = this.props.auth.user; 
        console.log(this.props.auth);
        console.log(this.state.isLoggedIn);
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render(){
        return (
            <header>
                <div class="container">
                    <div class="header-top">
                        <a class="navbar-brand" href="index.html">
                            <img src="img/icon-tailor-logo.svg" alt="Start My Icon" />
                        </a>
                        <div class="header-btn main_dropdown_header">
                            <div class="dropdown">
                                <button className=" btn language-btn-header dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    {this.state.text} <i className="material-icons">keyboard_arrow_down</i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a onClick={this.handleClick}  href="index.html" language="English (US)" data-value="action"><span><img src="img/us-flag.png" /></span> English (US)</a></li>
                                    <li><a onClick={this.handleClick}  href="index.html" language="French" data-value="another action"><span><img src="img/france.svg" /></span> French</a></li>
                                </ul>
                                { this.state.isLoggedIn ? this.state.user.name : <Login /> }
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Header);

//export default Header;