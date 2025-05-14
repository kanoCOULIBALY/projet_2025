import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CodePage from './codepage';
import Message from './Message';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/verify" element={<CodePage />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();