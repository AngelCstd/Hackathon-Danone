import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Hero } from "./components/Hero/Hero.jsx";
import { useEffect } from 'react';
// import {CircularProgressBar} from "./circularProgressBar.min.js";
// const pie = document.querySelector(".pie")

function App() {
  
  useEffect(() => {
    // Lógica o código que utiliza los componentes o funciones proporcionados por la biblioteca
    // const circle = new CircularProgressBar("pie");
    // circle.initial();
    // ... Otro código relacionado con la biblioteca
  }, []);
  return (
    <>
      <Header/>
      <Hero/>
      <Footer/>
    </>
  );
}

export default App;
