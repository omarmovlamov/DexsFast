import { useEffect, useState } from "react";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Product from "./components/Product";
import Subscribe from "./components/Subscribe";

function App() {
  const [moonSun, setMoonSun] = useState("fa-solid fa-sun");
  const [theme, setTheme] = useState("dark-theme");
  const changeMoon = () => {
    if (moonSun === "fa-solid fa-moon") {
      setMoonSun("fa-solid fa-sun");
    } else {
      setMoonSun("fa-solid fa-moon");
    }
  };
  useEffect(() => {
    const themeClass =
      moonSun === "fa-solid fa-sun" ? "dark-theme" : "light-theme";
    setTheme(themeClass);
  }, [moonSun]);

  return (
    <div className={theme}>
      <div className="moon">
        <button onClick={changeMoon}>
          <i className={moonSun}></i>
        </button>
      </div>

      <Header />
      <Hero />
      <Features />
      <Product />
      <Price />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
