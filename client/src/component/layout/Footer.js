// Footer.js

import React , {Component} from 'react';

class Footer extends Component{
    render(){
        return (
            <div>
                <footer id="footer">
                    <div class="container">
                        <div class="row">
                            <div class="foot-box">
                                <div class="firstfooter-block">
                                    <img alt="image" src="img/icon-tailor-logo.svg" alt="Start My Icon" class="img-fluid" id="foot-img" />
                                    <ul>
                                        <li><a href="index.html">Privacy Policy</a> </li>
                                        <li><a href="index.html">Terms of Service</a></li>
                                    </ul>
                                    <span>© Icon Tailor. 2019</span>
                                </div>
                                <div class="icons-footer">
                                    <ul>
                                        <li><a href="index.html" class="facebook_color"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="index.html" class="twitter_color"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="index.html" class="linkedin_color"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="index.html" class="insta_color"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="index.html" class="pinterest_color"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="foot-box">
                                <div class="links-footers">
                                    <h1 class="theme-heading-footer"> infomation </h1>
                                    <ul>
                                        <li><a href="index.html">About Us</a></li>
                                        <li><a href="index.html">Contact Us</a></li>
                                        <li><a href="index.html">Partnerships</a></li>
                                        <li><a href="index.html">Terms & Conditions</a></li>
                                        <li><a href="index.html">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="foot-box">
                                <div class="links-footers">
                                    <h1 class="theme-heading-footer"> Community</h1>
                                    <ul>
                                        <li><a href="index.html">Blog</a></li>
                                        <li><a href="index.html">Forum</a></li>
                                        <li><a href="index.html">Become a Author</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="foot-box">
                                <div class="links-footers">
                                    <h1 class="theme-heading-footer">Content </h1>
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
                            <div class="foot-box">
                                <div class="links-footers">
                                    <h1 class="theme-heading-footer">  COMPANY </h1>
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
                <div class="mini-footer">
                    <div class="container">
                        <p>Copyright © 2019 iconTailor all rights reseved.Powererd by <a href="https://www.startdesigns.com">Start Designs</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;