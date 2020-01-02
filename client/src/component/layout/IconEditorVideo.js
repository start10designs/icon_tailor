//IconEditorVideo.js
import React , {Component} from 'react';

class IconEditorVideo extends Component{
    render(){
        return (
            <section class="main-iconEditor-video">
                <div class="container">
                    <div class="row">
                        <div class="col editor-player">
                            <div class="video-main-parent">
                                <span></span>
                                <div class="video-child">
                                    <h3>icon Editor Video</h3>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="features-inner-box power-section-content">

                                <div class="features-inner-content feateures-icons-class">
                                    <span> Poweful <span class="green" id="green"> icon</span> Editor
                                    </span>
                                    <p>Do you want to change icon color, stroke and position?
                                        <br /> At <span><img src="img/icon-tailor-logo.svg" alt="Start My Icon" /></span> you can edit its size, position and colors until you find the appropriate style for your project.
                                    </p>
                                    <div class="center-btn center-btnn">
                                        <a href="index.html" class="btn view-all-icon">Start now</a>
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