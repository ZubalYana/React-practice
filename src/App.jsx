import './App.css'
import Header from './components/Header/Header'
import Logo from './components/Logo/Logo'

function App() {

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <img className='backgroundImg' src="/background.png" alt="" />

    </>
  )
}

export default App
