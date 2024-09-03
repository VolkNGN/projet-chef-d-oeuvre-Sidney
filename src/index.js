import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initializePrivacySandbox = async () => {
  if (window.InterestCohort) {
    try {
      const cohort = await window.InterestCohort();
      console.log('User cohort:', cohort);
      // Utilisez ces informations pour adapter le contenu ou la publicité
    } catch (error) {
      console.error('Error fetching user cohort:', error);
    }
  } else {
    console.log('Topics API not supported in this browser.');
  }
};

const setAuthCookie = (token) => {
  document.cookie = `auth_token=${token}; path=/; max-age=3600; SameSite=Lax`;
};

const getAuthCookie = () => {
  const cookie = document.cookie.split('; ').find(row => row.startsWith('auth_token='));
  return cookie ? cookie.split('=')[1] : null;
};

const Index = () => {
  useEffect(() => {
    // Initialize Privacy Sandbox features
    initializePrivacySandbox();

    // Example usage of setting and getting a cookie
    setAuthCookie('your-auth-token');
    const authToken = getAuthCookie();
    console.log('Retrieved auth token:', authToken);
  }, []);

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
