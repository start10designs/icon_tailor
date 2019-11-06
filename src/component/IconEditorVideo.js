//IconEditorVideo.js
import React , {Component} from 'react';

class IconEditorVideo extends Component{
    render(){
        return (
            <section className="main-iconEditor-video">
                <div className="container">
                    <div className="row">
                        <div className="col editor-player">
                            <div className="video-main-parent">
                                <div className="video-child">
                                    <h3>icon Editor Video</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="features-inner-box power-section-content">
                                <div className="features-inner-content feateures-icons-className">
                                    <span> Poweful <span className="green" id="green"> icon</span> Editor </span>
                                    <p>Do you want to change icon color, stroke and position?
                                        <br /> At <span className="green" id="green">icon Tailor</span> you can edit its size, position and colors until you find the appropriate style for your project.
                                    </p>
                                    <div className="center-btn center-btnn">
                                        <a href="#" className="btn view-all-icon">Start now</a>
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

export default IconEditorVideo;