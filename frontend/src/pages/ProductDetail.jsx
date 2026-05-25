import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eq, setEq] = useState(null);
  const [loading, setLoading] = useState(true);
  const [booked, setBooked] = useState(false);
  const [form, setForm] = useState({ startDate: '', endDate: '' });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/equipment/${id}`)
      .then(res => { setEq(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  const handleBook = () => {
    axios.post('http://localhost:8080/api/bookings', {
      userId: 1,
      equipmentId: id,
      startDate: form.startDate,
      endDate: form.endDate,
      totalAmount: eq.pricePerDay
    }).then(() => setBooked(true))
      .catch(() => alert('Booking failed. Please try again.'));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!eq) return <div className="error-msg">Equipment not found.</div>;

  const emoji = eq.category === 'tractor' ? '🚜'
    : eq.category === 'power_tiller' ? '⚙️'
    : eq.category === 'harvester' ? '🌾' : '🚜';

  return (
    <div className="section">
      <button
        onClick={() => navigate(-1)}
        style={{background:'none',border:'none',color:'#2d6a1f',fontWeight:700,cursor:'pointer',marginBottom:'1rem',fontSize:'14px'}}
      >← Back</button>

      <div className="product-detail">
        <div className="detail-img">{emoji}</div>
        <h2 style={{fontSize:'1.1rem',fontWeight:800,color:'#1a2e0a',marginBottom:'4px'}}>{eq.name}</h2>
        <div className="rating" style={{marginBottom:'8px'}}>
          {'★'.repeat(Math.round(eq.rating || 0))} ({eq.reviews} reviews)
        </div>
        <div style={{fontSize:'1.4rem',fontWeight:800,color:'#2d6a1f',marginBottom:'4px'}}>
          {eq.salePrice
            ? `₹${eq.salePrice.toLocaleString('en-IN')}`
            : `₹${eq.pricePerDay}/day`}
        </div>
        {eq.emi && (
          <div style={{fontSize:'12px',color:'#6b7280',marginBottom:'1rem'}}>
            EMI from ₹{eq.emi}/month
          </div>
        )}
        <table className="spec-table">
          <tbody>
            <tr><td>Category</td><td>{eq.category}</td></tr>
            <tr><td>District</td><td>{eq.district}</td></tr>
            <tr><td>Type</td><td>{eq.type}</td></tr>
            <tr><td>Available</td><td>{eq.available ? '✓ Yes' : '✗ No'}</td></tr>
          </tbody>
        </table>

        {eq.type !== 'sale' && (
          <div style={{marginTop:'1rem'}}>
            <h3 style={{fontSize:'14px',fontWeight:700,marginBottom:'8px'}}>Book this equipment</h3>
            {booked ? (
              <div className="success-msg">✓ Booking confirmed! We will contact you shortly.</div>
            ) : (
              <div>
                <div className="form-row" style={{marginBottom:'8px'}}>
                  <div className="form-group">
                    <label>Start date</label>
                    <input type="date" value={form.startDate}
                      onChange={e => setForm({...form, startDate: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>End date</label>
                    <input type="date" value={form.endDate}
                      onChange={e => setForm({...form, endDate: e.target.value})} />
                  </div>
                </div>
                <button className="submit-btn" onClick={handleBook}>
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}