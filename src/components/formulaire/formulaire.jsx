import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './formulaire.css';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Veuillez vérifier que vous n\'êtes pas un robot.');
      return;
    }

    emailjs.send('service_rw438w9', 'template_jief2ui', formData, 'z8AEj50JueW5yLuH2')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('L\'envoi du message a échoué.');
      });

    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    });

    setRecaptchaToken(null);
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="firstName">Prénom*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="input textarea"
          />
        </div>
        <ReCAPTCHA
          sitekey="6LfO6zIqAAAAANEjledOosh6iH85drMUkVfUXraC"
          onChange={handleRecaptchaChange}
        />
        <button type="submit" className="button">Envoyer</button>
      </form>
    </div>
  );
};

export default Formulaire;
