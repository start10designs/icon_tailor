//Features.js
import React , {Component} from 'react';

class Features extends Component{
    render(){
        return (
            <section className="start-features">
                <div className="container">
                    <div className="inner-haeding">
                        <h2> <span><img alt="image" src="img/icon-tailor-logo.svg" alt="Start My Icon"/></span> Features</h2>
                    </div>
                    <div className="features-box">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="features-inner-box">
                                    <a href="index.html">
                                        <span className="features-icon">
                                            <img alt="image" src="img/formats.svg"/>
                                        </span>
                                        <div className="features-inner-content">
                                        <span>Formats</span>
                                            <p>PNG, SVG, EPS, PSD, Base 64, Iconfont or all of them</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="features-inner-box">
                                    <a href="index.html">
                                        <span className="features-icon">
                                            <img alt="image" src="img/round.svg"/>
                                        </span>
                                        <div className="features-inner-content">
                                            <span> Continuous Production</span>
                                            <p>We produce over 60,000 icons every month</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="features-inner-box">
                                    <a href="index.html">
                                        <span className="features-icon">
                                            <img alt="image" src="img/book.svg"/>
                                        </span>
                                        <div className="features-inner-content">
                                            <span> Collections</span>
                                            <p>The most important feature of Smart My Icon .</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="features-inner-box">
                                    <a href="index.html">
                                        <span className="features-icon">
                                            <img alt="image" src="img/editable-vector.svg"/>
                                        </span>
                                        <div className="features-inner-content">
                                            <span> Editable Vectors </span>
                                            <p>We produce over 60,000 icons every month</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Features;