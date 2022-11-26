import React from 'react';
import Categories from '../Categories/Categories';
import AdvertiseItems from './components/AdvertiseItems';
import ExtraSection from './components/ExtraSection';
import Hero from './components/Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AdvertiseItems/>
            <Categories/>
            <ExtraSection/>
        </div>
    );
};

export default Home;