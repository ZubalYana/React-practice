import './App.css'
import Header from './components/Header/Header'
import Logo from './components/Logo/Logo'
import CollectionCard from './components/CollectionCard/CollectionCard'
import ShopButton from './components/ShopButton/ShopButton'

function App() {

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <div className="mainPage">
      <img className='backgroundImg' src="/background.png" alt="" />
      <div className="mainPage_content">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="text">
        <div className="subtitle">INTERIOR</div>
        <div className="title">Home Designs<br />Made Easy</div>
        <div className="price">$416.00 <span className='price_starting'>Starting</span></div>
        </div>
      </div>
      </div>
      <div className="chairsCollection">
        <div className="collectionCardsContainer">
        <CollectionCard>
        <ShopButton></ShopButton>
        </CollectionCard>
        </div>
      </div>

    </>
  )
}

export default App
