import './App.css';
//export all components
import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Portfolio } from './components/portfolio/Portfolio';
import { Footer } from "./components/footer/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
