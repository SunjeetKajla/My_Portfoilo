import { useState } from "react";
import NotFound from './components/404.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound>404 - Page Not Found</NotFound>} />
        </Routes>
      </Router>
    </>
  );
}
