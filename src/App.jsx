import './App.css';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import CollectionCard from './components/CollectionCard/CollectionCard';
import ShopButton from './components/ShopButton/ShopButton';
import ArrivalsCard from './components/ArrivalsCard/ArrivalsCard';
import CompareBtn from './components/CompareBtn/CompareBtn';
// import background from './assets/background.png';
// import chair1 from './assets/chair 1.png';

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
      <div className="newArrivals">
        <div className="proTeamCon">
          <div className="proTeamHr"></div>
          PROFESSIONAL TEAM
        </div>
        <div className="newArrivals_titleNavCon">
        <div className="newArrivals_title">The Best New Arrivals</div>
        <div className="newArrivals_nav">
          <div className="nav_el active_navEl">Desk</div>
          <div className="nav_el">Bedroom</div>
          <div className="nav_el">Lighting</div>
          <div className="nav_el">Accessories</div>
        </div>
        </div>
        <div className="arrivalsCardsCon">
          <ArrivalsCard>
          <CompareBtn />
          </ArrivalsCard>
        </div>
      </div>
    </>
  );
}

export default App;
