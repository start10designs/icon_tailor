//Signin.js
import React , {Component} from 'react';

class Signin extends Component{
    render(){
        return (
            <div class="signup">
                <div class="modal" id="signin">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <div class="modal-body">
                                <div class="popup-head">
                                    <h4>Sign in</h4>
                                    <p>With Your Social Network</p>
                                </div>
                                <div class="popup-content">
                                    <div class="social-connector">
                                        <a href="#" class="google"><span><img src="icon/search.svg" /></span> Google</a>
                                        <a href="#" class="facebook"><span><img src="icon/facebook-logo.svg" /></span> Facebook</a>
                                        <a href="#" class="twitter"><span><img src="icon/twitter.svg" /></span> Twitter</a>
                                    </div>
                                    <span class="or-opt"></span>
                                    <form>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Username or email" />
                                        </div>

                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password" />
                                            <span><img src="icon/eye.svg" /></span>
                                        </div>

                                        <div class="form-check pdt-0">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="popupcheck2" />
                                                <label class="custom-control-label" for="popupcheck2"> Keep me signed in</label>
                                            </div>
                                        </div>
                                        <a href="#" class="btn full-btn">Sign in</a>
                                        <div class="rem-pass">
                                            <span class="float-left">Not a member? <a href="JavaScript:void (0)" class="green"  data-toggle="modal" data-target="#signup"   data-dismiss="modal">Sign up</a></span>
                                            <span class="float-right"><a href="JavaScript:void(0)" class="green" data-toggle="modal" data-target="#reset"   data-dismiss="modal">I can't remember my password</a></span>
                                        </div>
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

export default Signin;