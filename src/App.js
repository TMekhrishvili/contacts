import React from 'react'
import './reset.css'
import './index.css'
import ContactList from './pages/contact-list/ContactList'
import Search from './components/Search'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <div className="main">
        <section className="contact-list">
          <ContactList />
        </section>
        <section className="search">
          <Search />
        </section>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
