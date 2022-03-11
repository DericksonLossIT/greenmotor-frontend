import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/HomeEight/BannerSlider';
import FeaturedSolutions from '../components/HomeEight/FeaturedSolutions';
import AboutUs from '../components/HomeEight/AboutUs';
import Services from '../components/HomeEight/Services';
import Projects from '../components/HomeEight/Projects';
import FunFacts from '../components/Common/FunFacts';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import PricingStyleFour from '../components/Pricing/PricingStyleFour';
import OurTeamTwo from '../components/Common/OurTeamTwo';
import Faq from '../components/HomeSeven/Faq';
import Clients from '../components/HomeSeven/Clients';
import RecentStory from '../components/HomeEight/RecentStory';
import FreeTrial from '../components/HomeEight/FreeTrial';
import Footer from '../components/Layout/Footer';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <BannerSlider />
                <FeaturedSolutions />
                <FunFacts />
                <FreeTrial />
                <Clients />
                <Footer/> 
            </>
        );
    }
}

export default Index;