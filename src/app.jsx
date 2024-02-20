import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Header from "./Componets/Header.jsx";
import Slider from "./Componets/Slider.jsx";
import ProductionHouse from "./Componets/ProdctionHouse.jsx";
import GenreMovieList from "./Componets/GenreMovieList.jsx";
import Footer from "./Componets/Footer.jsx";

export function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="">

          <Header />

          <Slider />

          <ProductionHouse/>

          <GenreMovieList />

        <Footer />


      </div>
  )
}
