import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
       
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
