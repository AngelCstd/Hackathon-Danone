import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Hero } from "./components/Hero/Hero.jsx";
import { CalculadoraCalorias } from './components/CalculadoraCalorias/CalculadoraCalorias.jsx';


function App() {

  return (
    <>
      <Header/>
      <CalculadoraCalorias/>
      {/* <Hero/> */}
      <Footer/>
    </>
  );
}

export default App;
