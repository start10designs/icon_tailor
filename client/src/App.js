import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Banner from './component/layout/Banner';
import Heading from './component/layout/Heading';
import Category from './component/layout/Category';
import Features from './component/layout/Features';
import BrowseIcon from './component/layout/BrowseIcon';
import IconEditorVideo from './component/layout/IconEditorVideo';
import ContactUs from './component/layout/ContactUs';
import Review from './component/layout/Review';
import ContactDesigner from './component/layout/ContactDesigner';
//import Signup from './component/auth/Signup';
import Signin from './component/auth/Signin';

//import ResetPassword from './component/auth/ResetPassword';

class App extends Component {

  
  render(){
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Banner />
          <Heading />
          <Category />
          <Features />
          <BrowseIcon />
          <IconEditorVideo />
          <ContactUs />
          <Review/>
          <ContactDesigner/>
          <Footer/>
          <Signin />
        </div>
      </Provider>
      
    )
  }
}

export default App;
