import react from 'react'
import { Home } from './components/screens/Home/Home'
import { Header } from './components/layout/Header/Header'
import { Main } from './components/screens/Main/Main'
import { Footer } from './components/layout/Footer/Footer'

function App() {

  return (
    <div>
      <Home></Home>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App