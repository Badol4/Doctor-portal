import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import InfoCArd from './info/InfoCArd';
import Services from './Services';
import Tastemonial from './Tastemonial';



const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <InfoCArd></InfoCArd>
           <Services></Services>
           <Hero></Hero>
           <Tastemonial></Tastemonial>
           <Contact></Contact>
           <Footer></Footer>
          
          
        </div>
    );
};

export default Home;