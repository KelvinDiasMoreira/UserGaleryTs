import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/index.tsx'
import { GlobalStyles } from './GlobalStyles'
import { UserContextProvider } from './hooks/UserContext.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
    <GlobalStyles/>
    <App />
    </UserContextProvider>
  </React.StrictMode>,
)
