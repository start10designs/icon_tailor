import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      password: "",
      errors: {},
      isLoggedIn: false,
      user: {},
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.toggle();
    }
    if (nextProps.errors) {
      this.setState({
          errors: nextProps.errors
      });
    }
  }

  onSubmit = e => {
      e.preventDefault();
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      //console.log(userData);
      this.props.loginUser(userData); // since we handle the redirect 
  };
  render() {
    const { errors } = this.state;

    return (

      <div>
        <a onClick={this.toggle} className="link-head" >Login</a>
        <div className="signup">
          <Modal show={this.state.modal} onHide={this.toggle} id="signup">
          <button type="button" className="close" onClick={this.toggle}>&times;</button>
            <Modal.Body>
            <div className="popup-head">
                <h4>Sign in</h4>
                <p>With Your Social Network</p>
            </div>
            <div className="popup-content">
              <div className="social-connector">
                  <a href="/" className="google"> <span><img src="icon/search.svg" /></span> Google </a>
                  <a href="/" className="facebook"> <span><img src="icon/search.svg" /></span> Facebook </a>
                  <a href="/" className="twitter"> <span><img src="icon/search.svg" /></span> Twitter </a>
              </div>
              <span className="or-opt"></span>
              <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <input 
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          type="email" 
                          id="email"
                          className={classnames("form-control", {
                            invalid: errors.email || errors.emailnotfound
                          })}
                          placeholder="Username or email" 
                      />
                      <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                      </span>
                  </div>

                  <div className="form-group">
                      <input 
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      type="password" 
                      id="password"
                      className={classnames("form-control", {
                        invalid: errors.password || errors.passwordincorrect
                      })}
                      placeholder="Password" 
                      />
                      <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                      </span>
                      <span><img src="icon/eye.svg" alt="icon" /></span>
                  </div>

                  <div className="form-check pdt-0">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="popupcheck2" />
                          <label className="custom-control-label" htmlFor="popupcheck2"> Keep me signed in</label>
                      </div>
                  </div>
                  <button type="submit" className="btn full-btn">Sign in </button>
                  <div className="rem-pass">
                      <span className="float-left">Not a member? <a href="/" className="green"  data-toggle="modal" data-target="#signup"   data-dismiss="modal">Sign up</a></span>
                      <span className="float-right"><a href="/" className="green" data-toggle="modal" data-target="#reset"   data-dismiss="modal">I can't remember my password</a></span>
                  </div>
              </form>
          </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);