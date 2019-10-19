//banner.js
import React , {Component} from 'react';

class Banner extends Component{
    render(){
        return (
            <section className="banner">
                <div className="container">
                    <h1>Over 9,000 Ready to use icons <span className="green"> <b>100%</b> Free</span></h1>
                    <div className="search-bar">
                        <form>
                            <select className="form-control">
                                <option>Category </option>
                            </select>
                            <button className="search-btn btn">search</button>
                            <span className="table-work">
                                <input type="" name="" className="form-control" placeholder="Type your icon name" required />
                                <button className="search-btn btn" id="search-btn-mobile">search</button>
                            </span>
                            <span className="all-rights"> All Right Reserved* </span>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;