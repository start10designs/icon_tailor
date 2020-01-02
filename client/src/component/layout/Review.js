//Review.js
import React , {Component} from 'react';

class Review extends Component{
    render(){
        return (
            <section className="customer-review">
                <div className="container">
                    <div className="col-md-12 customer-head">
                        <h3>Hear it from our customers</h3>
                    </div>
                    <div className="col-md-12">
                        <div className="reviews">
                            <div className="shadow-outer">
                                <div className="reviews-cnt reviews-cnt-corners">
                                    <span id="quote"></span>
                                    <p>"Really love the product! It saves so mmuch time and helps a lot in organizing our feedback. Awesome idea and huge potential."</p>
                                    <ul>
                                        <li>
                                            <span className="customer-profile-pic">
                                                <img src="img/dp-one.png" alt="profile" />
                                            </span>
                                            <span className="customer-profile-detail">
                                                Kate Zalewska<br /><span id="profile-detail-sub-text">Product Owner at Growbots</span>
                                            </span>
                                            <div className="clearfix"></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="reviews-cnt reviews-cnt-middle">
                                    <span id="quote"></span>
                                    <p>"Really love the product! It saves so much time and helps a lot in organizing our feedback. Awesome idea and huge potential."</p>
                                    <ul>
                                        <li>
                                            <span className="customer-profile-pic">
                                                <img src="img/dp-two.png" alt="profile" />
                                            </span>
                                            <span className="customer-profile-detail">
                                                Kate Zalewska<br /><span id="profile-detail-sub-text">Product Owner at Growbots</span>
                                            </span>
                                            <div className="clearfix"></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="reviews-cnt reviews-cnt-corner-last">
                                    <span id="quote"></span>
                                    <p>"Really love the product! It saves so mmuch time and helps a lot in organizing our feedback. Awesome idea and huge potential."</p>
                                    <ul>
                                        <li>
                                            <span className="customer-profile-pic">
                                                <img src="img/dp-three.png" alt="profile" />
                                            </span>
                                            <span className="customer-profile-detail">
                                                Kate Zalewska<br /><span id="profile-detail-sub-text">Product Owner at Growbots</span>
                                            </span>
                                            <div className="clearfix"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Review;