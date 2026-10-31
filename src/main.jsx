import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import SharedContext from './contextAPI/SharedContext.jsx'
import AuthContext from './contextAPI/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="259965694297-benhrjp7vfb1pgij22crmnrrcfooud8f.apps.googleusercontent.com">
      <SharedContext>
        <AuthContext>
        <App />
        </AuthContext>
        </SharedContext>
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
