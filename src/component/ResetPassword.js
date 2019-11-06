//ResetPassword.js
import React , {Component} from 'react';

class ResetPassword extends Component{
    render(){
        return (
            <div class="signup">
                <div class="modal" id="reset">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <div class="modal-body">
                                <div class="popup-head">
                                    <h4>Reset password</h4>
                                    <p>Enter your username or email to reset your password</p>
                                </div>
                                <div class="popup-content">
                                    <form>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Type Your Email" />
                                        </div>
                                        <a href="#" class="btn full-btn">Sign in</a>
                                        <div class="rem-pass">
                                            <span class="float-left">Sign in  <a href="JavaScript:void (0)" class="green"  data-toggle="modal" data-target="#signin"   data-dismiss="modal">Sign in</a></span>
                                            <span class="float-right">Not a member? <a href="JavaScript:void (0)" class="green"  data-toggle="modal" data-target="#signup"   data-dismiss="modal">Sign up</a></span>

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

export default ResetPassword;