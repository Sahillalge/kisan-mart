import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Rent() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/equipment/rent')
      .then(res => { setEquipment(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = filter === 'all'
    ? equipment
    : equipment.filter(e => e.category === filter);

  const emojis = {
    tractor: '🚜', harvester: '🌾',
    power_tiller: '⚙️', sprayer: '💧',
    rotavator: '🌱', thresher: '🔧'
  };

  return (
    <div>
      <div className="mini-hero">
        <h1>Rent Farm Equipment</h1>
        <p>Delivered to your farm. Pay per day or hour.</p>
      </div>
      <div className="section">
        <div className="tab-row">
          {['all','tractor','harvester','power_tiller','sprayer'].map(f => (
            <button
              key={f}
              className={`tab ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'power_tiller' ? 'Power Tiller' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {loading && <div className="loading">Loading equipment...</div>}

        {!loading && filtered.length === 0 && (
          <div className="error-msg">
            No equipment found. Add data via Postman first!
          </div>
        )}

        <div className="cards-grid">
          {filtered.map(eq => (
            <div className="card" key={eq.id} onClick={() => navigate(`/product/${eq.id}`)}>
              <div className="card-img">{emojis[eq.category] || '🚜'}</div>
              <div className="card-body">
                <div className="card-name">
                  {eq.name}
                  <span className="badge-rent">RENT</span>
                </div>
                <div className="card-meta">{eq.district}</div>
                <div className="rating">
                  {'★'.repeat(Math.round(eq.rating || 0))}
                  <span style={{color:'#6b7280',fontSize:'11px'}}> ({eq.reviews})</span>
                </div>
                <div className="card-price">₹{eq.pricePerDay}<span>/day</span></div>
                <button className="card-btn">Book now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}