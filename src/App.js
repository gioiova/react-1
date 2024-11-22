import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import './App.css';

const App = () => {
    const navigation = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
    ];

    return (
        <div className="app-container">
            <Header navigation={navigation} />
            <main>
                <Section title="Welcome to My App" content="This is the first section of the app." />
                <Section title="Learn More" content="This is the second section with more information." />
            </main>
            <Footer navigation={navigation} />
        </div>
    );
};

export default App;
