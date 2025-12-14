import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Page imports
import HomePage from './pages/HomePage'
import DivisionsPage from './pages/DivisionsPage'
import BrokeragePage from './pages/BrokeragePage'
import LogisticsPage from './pages/LogisticsPage'
import HedgingPage from './pages/HedgingPage'
import MarketsPage from './pages/MarketsPage'
import MaterialsPage from './pages/MaterialsPage'
import ContactPage from './pages/ContactPage'

// Legal pages
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import DisclaimerPage from './pages/DisclaimerPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/divisions" element={<DivisionsPage />} />
        <Route path="/brokerage" element={<BrokeragePage />} />
        <Route path="/logistics" element={<LogisticsPage />} />
        <Route path="/hedging" element={<HedgingPage />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Legal pages */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
