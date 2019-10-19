//Signup.js
import React , {Component} from 'react';

class Signup extends Component{
    render(){
        return (
            <div className="signup">
                <div className="modal" id="signup">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <div className="modal-body">
                                <div className="popup-head">
                                    <h4>Sign up</h4>
                                    <p>With Your Social Network</p>
                                </div>
                                <div className="popup-content">
                                    <div className="social-connector">
                                        <a href="#" className="google"><span><img src="icon/search.svg" /></span> Google</a>
                                        <a href="#" className="facebook"><span><img src="icon/facebook-logo.svg" /></span> Facebook</a>

                                        <a href="#" className="twitter"><span><img src="icon/twitter.svg" /></span> Twitter</a>
                                    </div>
                                    <span className="or-opt"></span>

                                    <form className="row">
                                        <div className="form-group col-sm-6">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>

                                        <div className="form-group col-sm-6">

                                            <select className="form-control">
                                                <option>Job Position</option>
                                            </select>

                                        </div>

                                        <div className="form-group col-sm-12">
                                            <input type="password" className="form-control" placeholder="Password" />
                                            <span><img src="icon/eye.svg" /></span>
                                        </div>

                                        <div className="other-info col-sm-12">
                                            Your password must be at least 6 characters long and must contain letters, numbers and special characters. Cannot contain whitespace.
                                        </div>

                                        <div className="form-check col-sm-12">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="popupcheck" />
                                                <label className="custom-control-label" for="popupcheck"> I wish to receive newsletters, promotions and news from My Smart Icon.</label>
                                            </div>
                                            <a href="#" className="btn full-btn">Sign UP</a>
                                        </div>
                                        
                                        <span className="already">Already registered?<a href="#" data-toggle="modal" data-target="#signin" className="green"  data-dismiss="modal"> Sign in</a></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;