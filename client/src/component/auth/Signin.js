//Signin.js
import React , {Component} from 'react';
import { Link } from "react-router-dom";
class Signin extends Component{

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        console.log(userData);
    };



    render(){
        const { errors } = this.state;
        return (
            <div className="signup">
                <div className="modal" id="signin">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <div className="modal-body">
                                <div className="popup-head">
                                    <h4>Sign in</h4>
                                    <p>With Your Social Network</p>
                                </div>
                                <div className="popup-content">
                                    <div className="social-connector">
                                        
                                        <a href="/" className="google"> <span><img alt="image" src="icon/search.svg" /></span> Google </a>
                                        <a href="/" className="facebook"> <span><img alt="image" src="icon/search.svg" /></span> Facebook </a>
                                        <a href="/" className="twitter"> <span><img alt="image" src="icon/search.svg" /></span> Twitter </a>
                                    </div>
                                    <span className="or-opt"></span>
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <input 
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                type="email" 
                                                className="form-control" 
                                                placeholder="Username or email" 
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input 
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password" 
                                            />
                                            <span><img alt="image" src="icon/eye.svg" alt="icon" /></span>
                                        </div>

                                        <div className="form-check pdt-0">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="popupcheck2" />
                                                <label className="custom-control-label" htmlFor="popupcheck2"> Keep me signed in</label>
                                            </div>
                                        </div>
                                        <a href="/" className="btn full-btn">Sign in</a>
                                        <div className="rem-pass">
                                            <span className="float-left">Not a member? <a href="/" className="green"  data-toggle="modal" data-target="#signup"   data-dismiss="modal">Sign up</a></span>
                                            <span className="float-right"><a href="/" className="green" data-toggle="modal" data-target="#reset"   data-dismiss="modal">I can't remember my password</a></span>
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