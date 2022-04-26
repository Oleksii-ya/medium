import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes'
import TopBar from 'components/TopBar'

const App = () => {
  return (
    <>
      <Router>
        <TopBar/>
        <Routes />
      </Router>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);