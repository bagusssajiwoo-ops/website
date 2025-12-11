import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Profile from './components/Profile';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <ProductGrid />
                <About />
                <Profile />
                <Location />
            </main>
            <Footer />
        </div>
    );
}

export default App;
