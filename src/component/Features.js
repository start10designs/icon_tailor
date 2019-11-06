//Features.js
import React , {Component} from 'react';

class Features extends Component{
    render(){
        return (
            <section className="start-features">
                <div className="container">
                    <div className="inner-haeding">
                        <h2> <span><img src="img/icon-tailor-logo.svg" alt="Start My Icon" /></span> Features</h2>
                    </div>
                    <div className="features-box">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="features-inner-box">
                                    <span className="features-icon">
                                        <img src="img/formats.png" />
                                    </span>
                                    <div className="features-inner-content">
                                        <span> Formats  </span>
                                        <p>PNG, SVG, EPS, PSD, Base 64, Iconfont or all of them</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="features-inner-box">
                                    <span className="features-icon">
                                        <img src="img/continuous.png" />
                                    </span>
                                    <div className="features-inner-content">
                                        <span> Continuous Production</span>
                                        <p>We produce over 60,000 icons every month</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="features-inner-box">
                                    <span className="features-icon">
                                        <img src="img/collections.png"/>
                                    </span>
                                    <div className="features-inner-content">
                                        <span> Collections </span>
                                        <p>The most important feature of Smart My Icon .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="features-inner-box">
                                    <span className="features-icon">
                                        <img src="img/editable.png" /> </span>
                                            <div className="features-inner-content">
                                        <span>  Editable Vectors </span>
                                        <p>We produce over 60,000 icons every month</p>
                                    </div>
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