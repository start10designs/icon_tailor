// Footer.js

import React , {Component} from 'react';

class Footer extends Component{
    render(){
        return (
            <div>
                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="foot-box">
                                <div className="firstfooter-block">
                                    <img alt="image" src="img/icon-tailor-logo.svg" alt="Start My Icon" className="img-fluid" id="foot-img" />
                                    <ul>
                                        <li><a href="index.html">Privacy Policy</a> </li>
                                        <li><a href="index.html">Terms of Service</a></li>
                                    </ul>
                                    <span>© Icon Tailor. 2019</span>
                                </div>
                                <div className="icons-footer">
                                    <ul>
                                        <li><a href="index.html" className="facebook_color"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="index.html" className="twitter_color"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="index.html" className="linkedin_color"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="index.html" className="insta_color"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="index.html" className="pinterest_color"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="foot-box">
                                <div className="links-footers">
                                    <h1 className="theme-heading-footer"> infomation </h1>
                                    <ul>
                                        <li><a href="index.html">About Us</a></li>
                                        <li><a href="index.html">Contact Us</a></li>
                                        <li><a href="index.html">Partnerships</a></li>
                                        <li><a href="index.html">Terms & Conditions</a></li>
                                        <li><a href="index.html">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="foot-box">
                                <div className="links-footers">
                                    <h1 className="theme-heading-footer"> Community</h1>
                                    <ul>
                                        <li><a href="index.html">Blog</a></li>
                                        <li><a href="index.html">Forum</a></li>
                                        <li><a href="index.html">Become a Author</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="foot-box">
                                <div className="links-footers">
                                    <h1 className="theme-heading-footer">Content </h1>
                                    <ul>
                                        <li><a href="index.html">Categories</a></li>
                                        <li><a href="index.html">Authors</a></li>
                                        <li><a href="index.html">Top Icons</a></li>
                                        <li><a href="index.html">Latest Icons</a></li>
                                        <li><a href="index.html">Tags</a></li>
                                        <li><a href="index.html">Icon Editor </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="foot-box">
                                <div className="links-footers">
                                    <h1 className="theme-heading-footer">  COMPANY </h1>
                                    <ul>
                                        <li><a href="index.html">Careers</a></li>
                                        <li><a href="index.html">Press & News</a></li>
                                        <li><a href="index.html">Feedback</a></li>
                                        <li><a href="index.html">Investor Relations</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="mini-footer">
                    <div className="container">
                        <p>Copyright © 2019 iconTailor all rights reseved.Powererd by <a href="https://www.startdesigns.com">Start Designs</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;