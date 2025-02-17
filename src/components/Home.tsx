import React, { useEffect, useState } from 'react';
import AnimatedGlobe from './AnimatedGlobe';
import AnimatedTextFlow from './AnimatedText';
import "./Home.css"
const Home = () => {

    return (
        <div className="home">
            <AnimatedTextFlow />
            <AnimatedGlobe />
        </div>
    );
};

export default Home;