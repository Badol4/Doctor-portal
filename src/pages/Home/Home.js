import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero';
import InfoCArd from './info/InfoCArd';
import Services from './Services';



const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <InfoCArd></InfoCArd>
           <Services></Services>
           <Hero></Hero>
          
          
        </div>
    );
};

export default Home;