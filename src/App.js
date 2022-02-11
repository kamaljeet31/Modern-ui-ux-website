import './App.css'
import { Brand, Cta, Navbar } from './Components'
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from './Containers'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Cta />
      <Features />
      <Blog />
      <Possibility />
      <WhatGPT3 />
      <Footer />
    </div>
  )
}

export default App
