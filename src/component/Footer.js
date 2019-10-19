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
                                    <img src="img/icon-tailor-logo.svg" alt="Start My Icon" className="img-fluid" id="foot-img" />
                                    <ul>
                                        <li>Privacy Policy </li>
                                        <li>Terms of Service</li>
                                    </ul>
                                    <span>© Icon Tailor. 2019</span>
                                </div>
                                <div className="icons-footer">
                                    <ul>
                                        <li><a href="#" className="facebook_color"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="twitter_color"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="linkedin_color"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="insta_color"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#" className="pinterest_color"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="foot-box">
                                <div className="links-footers">
                                    <h1 className="theme-heading-footer"> infomation </h1>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Partnerships</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="foot-box">
                                <div className="links-footers">
                                    <h1 className="theme-heading-footer"> Community </h1>
                                    <ul>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Forum</a></li>
                                        <li><a href="#">Become a Author</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="foot-box">
                                <div className="links-footers">
                                    <h1 className="theme-heading-footer"> Content</h1>
                                    <ul>
                                        <li><a href="#">Categories</a></li>
                                        <li><a href="#">Authors</a></li>
                                        <li><a href="#">Top Icons</a></li>
                                        <li><a href="#">Latest Icons</a></li>
                                        <li><a href="#">Tags</a></li>
                                        <li><a href="#">Icon Editor </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="foot-box">
                                <div className="links-footers">
                                    <h1 className="theme-heading-footer"> COMPANY </h1>
                                    <ul>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Press & News</a></li>
                                        <li><a href="#">Feedback</a></li>
                                        <li><a href="#">Investor Relations</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="mini-footer">
                    <div className="container">
                        <p>Copyright © 2019 iconTailor all rights reseved.Powererd by Start Designs</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;