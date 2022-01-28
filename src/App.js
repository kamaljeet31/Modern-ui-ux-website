import { Article, Brand, Cta } from './Components'
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
    <div>
      <h1>GPT-3</h1>
      <Article />
      <Brand />
      <Cta />
      <Header />
      <Features />
      <Blog />
      <Possibility />
      <WhatGPT3 />
      <Footer />
    </div>
  )
}

export default App
