import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import FAQ from './components/FAQ';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import VideoIntro from './components/VideoIntro';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './App.css';
import SplineScene from './components/SplineScene';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Add window load event to ensure all assets are loaded
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <div className="relative">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="app-container">
                    <Navbar />
                    <Hero />
                    <Marquee />
              
                    <About />
                    <WhatWeDo />
                    <HowWeWork />
                    <VideoIntro />
                    <Projects />
                    <Testimonials />
                    <FAQ />
                    <Contact />
                    <SplineScene />
                </div>
            )}
        </div>
    );
};

export default App;