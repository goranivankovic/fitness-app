import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Nav from './components/Nav/Nav';
import Health from './components/Health/Health';
import Traning from './components/Traning/Traning';
import AppComponent from './components/App/AppComponent';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';





import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();


function App() {
  return (
   
    
    <div>
      
      <Nav />
      <Home />
      <About />
      <Health />
      <Traning />
      <AppComponent />
      <Contact />
      <Footer /> 

      


  
    </div>

 
         
  
  );
}

export default App;
