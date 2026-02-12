import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import './App.css';
import config from './config';
import shipAnimation from './ship.json';

function App() {
  const [counts, setCounts] = useState({
    products: 0,
    categories: 0,
    countries: 0
  });

  const aboutRef = useRef(null);

  // Counter animation on load
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const counters = [
      { key: 'products', target: config.stats.products },
      { key: 'categories', target: config.stats.categories },
      { key: 'countries', target: config.stats.countries }
    ];

    counters.forEach(({ key, target }) => {
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepTime);
    });
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (section) => {
    if (section === 'about') {
      scrollToSection(aboutRef);
    } else if (section === 'products') {
      window.location.href = config.links.products;
    } 
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon"></div>
            <span className="logo-text">{config.companyName}</span>
          </div>
          <nav className="nav">
            <button onClick={() => handleNavClick('products')} className="nav-link">
              Products
            </button>
            
            <button onClick={() => handleNavClick('about')} className="nav-link">
              About
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          {/* Left Section - Tagline */}
          <div className="hero-left">
            <h1 className="hero-title">
              {config.tagline.split(', ').map((part, index) => (
                <span key={index} className="title-line">
                  {part}
                  {index === 0 && ','}
                </span>
              ))}
            </h1>
            <p className="hero-subtitle">{config.heroSubtitle}</p>
            <div className="sparkles">
              <span className="sparkle sparkle-1">✦</span>
              <span className="sparkle sparkle-2">✦</span>
            </div>
          </div>

          {/* Center Section - Lottie Animation */}
          <div className="hero-center">
            <div className="animation-container">
              <div className="animation-bg"></div>
              <Lottie 
                animationData={shipAnimation} 
                loop={true}
                className="lottie-animation"
              />
            </div>
          </div>

          {/* Right Section - Stats */}
          <div className="hero-right">
            <div className="info-card">
              <h3 className="info-label">Stats</h3>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-icon">📦</div>
                  <div className="stat-content">
                    <div className="stat-number">{counts.products.toLocaleString()}</div>
                    <div className="stat-label">Products</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🏷️</div>
                  <div className="stat-content">
                    <div className="stat-number">{counts.categories.toLocaleString()}</div>
                    <div className="stat-label">Categories</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🌍</div>
                  <div className="stat-content">
                    <div className="stat-number">{counts.countries}</div>
                    <div className="stat-label">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - CTA Buttons */}
        <div className="hero-bottom">
          <button 
            onClick={() => window.location.href = config.links.products}
            className="cta-button cta-primary"
          >
            Product Page
          </button>
        
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about" id="about">
        <div className="about-container">
          <div className="about-header">
            <span className="about-eyebrow">Who We Are</span>
            <h2 className="about-title">About Nellanickal Commercium</h2>
          </div>
          <div className="about-content">
            <p className="about-text">{config.about.description}</p>
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Our Mission</h4>
                <p>Connecting India's finest products to global markets with precision and care.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h4>Our Promise</h4>
                <p>Transparent communication, reliable delivery, and trustworthy partnerships.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Our Approach</h4>
                <p>Streamlined logistics from sourcing to shipment, making trade effortless.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon"></div>
                <span className="logo-text">{config.companyName}</span>
              </div>
              <p className="footer-tagline">{config.tagline}</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <button onClick={() => handleNavClick('products')}>Products</button>
                <button onClick={() => handleNavClick('payment')}>Payment</button>
                <button onClick={() => handleNavClick('about')}>About</button>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <p>Kerala, India</p>
                <p>info@nellanickal.com</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 {config.companyName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
