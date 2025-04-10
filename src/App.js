import './App.css';
import { Header, Hero, Specials, About, Booking, Footer } from './components'
import { Routes, Route } from "react-router-dom";
import Menu from "./assets/data/menu";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Specials menu={Menu} />
              <About />
            </>
            } />
          <Route path="/reservation" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
