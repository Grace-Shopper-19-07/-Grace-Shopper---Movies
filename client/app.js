import React from 'react'
import {Navbar, Footer, Filter} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Filter />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
