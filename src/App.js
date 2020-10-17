import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Team from './Components/Team';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Header/>
        <Services/>
        <Pricing/>
        <Team/>
        <Clients/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
