import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', district: 'Pune', role: 'FARMER'
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert('Please enter name and phone number.');
      return;
    }
    axios.post('http://localhost:8080/api/users/register', form)
      .then(() => setSuccess(true))
      .catch(err => alert(err.response?.data || 'Phone may already be registered.'));
  };

  return (
    <div>
      <div className="mini-hero">
        <h1>Register or Contact us</h1>
        <p>Sign up as a farmer or equipment owner.</p>
      </div>
      <div className="section">
        <div className="form-card">
          <h3>Create your account</h3>
          {success ? (
            <div className="success-msg">✓ Registered successfully! We will contact you soon.</div>
          ) : (
            <div>
              <div className="form-group">
                <label>Full name</label>
                <input placeholder="Ramesh Khedkar" value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input placeholder="9876543210" value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>District</label>
                  <select value={form.district}
                    onChange={e => setForm({...form, district: e.target.value})}>
                    {['Pune','Nashik','Nagpur','Aurangabad','Solapur','Kolhapur','Latur']
                      .map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input placeholder="email@gmail.com" value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>I am a</label>
                <select value={form.role}
                  onChange={e => setForm({...form, role: e.target.value})}>
                  <option value="FARMER">Farmer — want to rent or buy</option>
                  <option value="OWNER">Equipment owner — want to list</option>
                </select>
              </div>
              <button className="submit-btn" onClick={handleSubmit}>
                Register now →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}