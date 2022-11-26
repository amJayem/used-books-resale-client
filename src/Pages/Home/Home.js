import React from 'react';
import AdvertiseItems from './components/AdvertiseItems';
import CategoryItem from './components/CategoryItem';
import ExtraSection from './components/ExtraSection';
import Hero from './components/Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AdvertiseItems/>
            <CategoryItem/>
            <ExtraSection/>
        </div>
    );
};

export default Home;