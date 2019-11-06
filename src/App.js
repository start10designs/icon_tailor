import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Banner from './component/Banner';
import Heading from './component/Heading';
import Category from './component/Category';
import Features from './component/Features';
import BrowseIcon from './component/BrowseIcon';
import IconEditorVideo from './component/IconEditorVideo';
import ContactUs from './component/ContactUs';
import Review from './component/Review';
import ContactDesigner from './component/ContactDesigner';
import Signup from './component/Signup';
import Signin from './component/Signin';
import ResetPassword from './component/ResetPassword';

class App extends Component {
  render(){
    return (
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
        <Signup />
        <Signin />
        <ResetPassword />
      </div>
    )
  }
}

export default App;
