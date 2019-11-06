//ContactDesigner.js
import React , {Component} from 'react';

class ContactDesigner extends Component{
    render(){
        return (
            <section className="main_become_review become-bg">
                <div className="container">
                    <div className="col-md-6">
                        <div className="becamestarticons">
                            <h1>Become a <span><img src="img/icon-tailor-logo.png" alt="Start My Icon" /></span> Designer</h1>
                            <p>Are you a designer?
                                <br /> Would you like to collaborate with Start My Icon?</p>
                            <div className="left-btn left-btnn">
                                <a href="#" className="btn black-bt">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactDesigner;