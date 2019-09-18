import React from 'react'
import {Navbar, Footer, Filter} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="flexContainer col">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
