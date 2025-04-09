import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Booking from './components/Booking';
import Rating from "./components/Rating";
import About from "./components/About";
import SaladImg from "./assets/images/greek-salad.jpg"
import PastaImg from "./assets/images/pasta.jpg"
import BruchettaImg from "./assets/images/bruchetta.jpg"
import { Routes, Route } from "react-router-dom";

const menu = [
  {
    id: 1,
    title: "Greek Salad",
    price: 12.99,
    img: SaladImg,
    alt: "A greek salad",
    description: "A refreshing mix of tomatoes, cucumbers, bell peppers, red onions, Kalamata olives, and creamy feta, tossed in olive oil, oregano, and lemon juice. Served with warm pita bread."

  },
  {
    id: 2,
    title: "Penne pasta",
    price: 16.99,
    img: PastaImg,
    alt: "A penne pasta",
    description: "Fiery red sauce coats perfectly cooked penne, garnished with fresh basil, rosemary, and a chili pepper for an extra kick. A classic Italian favorite!"

  },
  {
    id: 3,
    title: "Bruchetta",
    price: 9.99,
    img: BruchettaImg,
    alt: "A bruchetta",
    description: "Toasted bread topped with creamy cheese and fresh tomatoes, basil, and a drizzle of olive oil. The perfect appetizer!"

  },
]

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Specials menu={menu} />
              <About />
            </>
            } />
          <Route path="/reservation" element={<Booking />} />
        {/* <Hero />
        <Specials menu={menu} />
        <About /> */}
        {/* <Booking /> */}
        </Routes>
      </main>
      {/* <Rating /> */}
      <Footer />
    </>
  );
}

export default App;
