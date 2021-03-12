import React from 'react'
import './reset.css'
import './index.css'
import ContactList from './pages/contact-list/ContactList'
import Search from './components/Search'
import Footer from './components/Footer'
import Header from './components/Header'
import CrudButtons from './components/CrudButtons'
import { GlobalProvider } from './context/GlobalStates';

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <div className="main">
          <section className="contact-list">
            <CrudButtons />
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
    </GlobalProvider>
  )
}

export default App
