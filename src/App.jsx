import './App.css';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import CollectionCard from './components/CollectionCard/CollectionCard';
import ShopButton from './components/ShopButton/ShopButton';
// import background from './assets/background.png'; // Corrected import
// import chair1 from './assets/chair 1.png'; // Import chair image

function App() {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <div className="mainPage">
        {/* <img className="backgroundImg" src={background} alt="Background" /> */}
        <div className="mainPage_content">
          <div className="main_line1"></div>
          <div className="main_line2"></div>
          <div className="text">
            <div className="subtitle">INTERIOR</div>
            <div className="title">
              Home Designs
              <br />
              Made Easy
              
            </div>
            <div className="price">
              $416.00 <span className="price_starting">Starting</span>
            </div>
            <ShopButton />

          </div>
        </div>
      </div>
      <div className="chairsCollection">
        <div className="collectionCardsContainer">
         <CollectionCard>
         <div className="cardText">New Chair <br />
         Collection 2022</div>
           <ShopButton className="transparentBg" />
         </CollectionCard>
         <CollectionCard>
         <div className="cardText">Lamp Desk</div>
           <ShopButton className="transparentBg" />
         </CollectionCard>
         <CollectionCard>
         <div className="cardText">Modern Chair <br />
         Collection 2022</div>
           <ShopButton className="transparentBg" />
         </CollectionCard>
        </div>
      </div>
    </>
  );
}

export default App;
