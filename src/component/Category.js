//Category.js
import React , {Component} from 'react';

class Category extends Component{
    render(){
        return (
            <section className="icon-categorie">
                <div className="container">
                    <div className="row">
                        <div className="col-lg col-6" id="hide-in-resp"></div>
                        <div className="col-lg col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="#">
                                    <img src="img/line-icn.png" alt="icon" id="img-hover" />
                                    <img src="img/solid-icn.png" alt="icon" id="img-main" />
                                    <span>Line Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="#">
                                    <img src="img/line-icn.png" alt="icon" id="img-hover" />
                                    <img src="img/solid-icn.png" alt="icon" id="img-main" />
                                    <span>Solid Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="#">
                                    <img src="img/line-icn.png" alt="icon" id="img-hover" /> 
                                    <img src="img/solid-icn.png" alt="icon" id="img-main" />
                                    <span>iOS Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="#">
                                    <img src="img/line-icn.png" alt="icon" id="img-hover" />
                                    <img src="img/solid-icn.png" alt="icon" id="img-main" />
                                    <span>Android Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="#">
                                    <img src="img/line-icn.png" alt="icon" id="img-hover" />
                                    <img src="img/solid-icn.png" alt="icon" id="img-main" />
                                    <span>Website Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="#">
                                    <img src="img/line-icn.png" alt="icon" id="img-hover" />
                                    <img src="img/solid-icn.png" alt="icon" id="img-main" />
                                    <span>Mobile App Icons</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg col-6" id="hide-in-resp"></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Category;