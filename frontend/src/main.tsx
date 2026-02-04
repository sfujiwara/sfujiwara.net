import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '8f6be096-fe15-4de7-b7df-f696cc9ef3a1',
    clientToken: 'pubbb5f48079df1b286511ffda958c56250',
    site: 'datadoghq.com',
    service: 'sfujiwara.net',
    env: 'production',
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackBfcacheViews: true,
    defaultPrivacyLevel: 'mask-user-input',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
