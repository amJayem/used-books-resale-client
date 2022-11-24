import React from 'react';
import Categories from '../Categories/Categories';
import ExtraSection from './components/ExtraSection';
import Hero from './components/Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Categories/>
            <ExtraSection/>
        </div>
    );
};

export default Home;