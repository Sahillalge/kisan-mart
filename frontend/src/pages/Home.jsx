import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Rent or <em>Buy</em> Farm Equipment<br/>at your doorstep</h1>
        <p>Tractors, power tillers, harvesters and more. Affordable rentals from ₹400/day. Buy new and used machinery with easy EMI.</p>
        <div className="hero-btns">
          <Link to="/rent" className="btn-yellow">Browse Rentals</Link>
          <Link to="/buy" className="btn-outline">Shop and Buy →</Link>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat"><div className="stat-num">2,400+</div><div className="stat-label">Machines listed</div></div>
        <div className="stat"><div className="stat-num">18 districts</div><div className="stat-label">Coverage</div></div>
        <div className="stat"><div className="stat-num">₹12 Cr+</div><div className="stat-label">Farmer savings</div></div>
      </div>

      <div className="section">
        <div className="section-label">Top categories</div>
        <div className="section-title">What do you need today?</div>
        <div className="cards-grid">
          <Link to="/rent" style={{textDecoration:'none'}}>
            <div className="card">
              <div className="card-img">🚜</div>
              <div className="card-body">
                <div className="card-name">Tractors</div>
                <div className="card-meta">35–75 HP range</div>
                <div className="card-price">₹800<span>/day rent</span></div>
              </div>
            </div>
          </Link>
          <Link to="/buy" style={{textDecoration:'none'}}>
            <div className="card">
              <div className="card-img">⚙️</div>
              <div className="card-body">
                <div className="card-name">Power Tillers</div>
                <div className="card-meta">7–15 HP</div>
                <div className="card-price">₹85,000<span> buy</span></div>
              </div>
            </div>
          </Link>
          <Link to="/rent" style={{textDecoration:'none'}}>
            <div className="card">
              <div className="card-img">🌾</div>
              <div className="card-body">
                <div className="card-name">Harvesters</div>
                <div className="card-meta">Combine and mini</div>
                <div className="card-price">₹2,400<span>/day rent</span></div>
              </div>
            </div>
          </Link>
          <Link to="/rent" style={{textDecoration:'none'}}>
            <div className="card">
              <div className="card-img">💧</div>
              <div className="card-body">
                <div className="card-name">Sprayers</div>
                <div className="card-meta">Boom and knapsack</div>
                <div className="card-price">₹350<span>/day rent</span></div>
              </div>
            </div>
          </Link>
        </div>

        <div className="testimonial">
          <p>Renting a harvester through KisanMart saved me over ₹4 lakh compared to a broker. Booking was simple and the machine arrived on time.</p>
          <div className="testi-author">
            <div className="avatar">RK</div>
            <div>
              <div className="author-name">Ramesh Khedkar</div>
              <div className="author-sub">Sugarcane farmer, Solapur</div>
            </div>
          </div>
        </div>

        <div className="cta-banner">
          <h3>Own farm equipment? Earn while it is idle.</h3>
          <p>Farmers earn ₹30,000–₹1,20,000 per season by listing. Free sign-up — zero commission on first 3 bookings.</p>
          <Link to="/contact"><button className="btn-amber">Start listing free →</button></Link>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>KisanMart</h4>
            <div>Pune, Maharashtra</div>
            <div>support@kisanmart.in</div>
            <div>1800-XXX-XXXX</div>
          </div>
          <div>
            <h4>Quick links</h4>
            <div>Rent equipment</div>
            <div>Buy equipment</div>
            <div>List your machine</div>
          </div>
        </div>
        <div className="footer-bottom">© 2025 KisanMart · Made for Indian farmers</div>
      </footer>
    </div>
  );
}