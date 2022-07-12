import { useState } from 'react'
import logo from './logo.svg'
import '../src/components/menu.css'
import './App.css'
import { Navbar, Footer, HomepageHero, HPFeatured, PLPItem } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="Main-Global-Container">
      <Navbar />
      <HomepageHero />
      <div class="HP-Featured Full-Width"> 
        <h2 class="Sub-Heading"> Featured Collection</h2>
        <PLPItem />
        <PLPItem />
        <PLPItem />
      </div>
      <Footer />
    </div>
  )
}

export default App
