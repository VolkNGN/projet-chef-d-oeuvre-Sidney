import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
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

    emailjs.send('service_rw438w9', 'template_mbkv15q', formData, 'z8AEj50JueW5yLuH2')
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
    <div className="form-map-container">
      <div className="form-container">
        <h2>Contactez-moi</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="firstName">Prénom*</label>
            <input
              data-testid="first-name-input"
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
              data-testid="last-name-input"
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
              data-testid="phone-input"
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
              data-testid="email-input"
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
              data-testid="message-input"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="input textarea"
            />
          </div>
          <ReCAPTCHA
            data-testid="recaptcha"
            sitekey="6LfO6zIqAAAAANEjledOosh6iH85drMUkVfUXraC"
            onChange={handleRecaptchaChange}
          />
          <button data-testid="submit-button" type="submit" className="button">Envoyer</button>
        </form>
      </div>
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.594721462992!2d4.415929715495396!3d44.014326379109155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b47b1c22d5a09b%3A0xc85b2069144e8122!2s32%20Avenue%20G%C3%A9n%C3%A9ral%20Vincent%2C%2030700%20Uz%C3%A8s!5e0!3m2!1sen!2sfr!4v1633685684080!5m2!1sen!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="social-media">
          <h2>Retrouvez également mon travail sur :</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/ilonalafabrick" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook size={40} />
            </a>
            <a href="https://www.instagram.com/ilonaperrier/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
