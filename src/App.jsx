import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Categories from './components/sections/Categories';
import FeaturedProducts from './components/sections/FeaturedProducts';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <Categories />
                <FeaturedProducts />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
