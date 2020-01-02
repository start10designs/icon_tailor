//Category.js
import React , {Component} from 'react';

class Category extends Component{
    render(){
        return (
            <section className="icon-categorie">
                <div className="container">
                    <div className="row">
                        <div className="col-lg col-sm-4 col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="listing-with-editor.html">
                                    <div className="tailor-bg">
                                        <div className="tailor-bg-cnt">
                                            <img src="img/line-icon.svg" alt="Line-icon" />
                                        </div>
                                    </div>
                                    <span>Line Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-sm-4 col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="index.html">
                                    <div className="tailor-bg">
                                        <div className="tailor-bg-cnt">
                                            <img src="img/brush.svg" alt="solid-icon" />
                                        </div>
                                    </div>
                                    <span>Solid Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-sm-4 col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="index.html">
                                    <div className="tailor-bg">
                                        <div className="tailor-bg-cnt">
                                            <img src="img/headphones.svg" alt="icon" id="img-main" />
                                        </div>
                                    </div>
                                    <span>iOS Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-sm-4 col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="index.html">
                                    <div className="tailor-bg">
                                        <div className="tailor-bg-cnt">
                                            <img src="img/playstore.svg" alt="icon" id="img-main" />
                                        </div>
                                    </div>
                                    <span>Android Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-sm-4 col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="index.html">
                                    <div className="tailor-bg">
                                        <div className="tailor-bg-cnt">
                                            <img src="img/domain.svg" alt="Website Icon" />
                                        </div>
                                    </div>
                                    <span>Website Icons</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg col-sm-4 col-6" id="show-in-resp">
                            <div className="icon-categorie-ico">
                                <a href="index.html">
                                    <div className="tailor-bg">
                                        <div className="tailor-bg-cnt">
                                            <img src="img/smartphone.svg" alt="icon" id="img-main" />
                                        </div>
                                    </div>
                                    <span>Mobile App Icons</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Category;