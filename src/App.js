import "./App.css";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About";
import ScrollToTop from "./Component/ScrollToTop";
import DogCollars from "./Component/DogCollars";
import Martingale from "./Component/Martingale";
import Leashes from "./Component/Leashes";
import Tags from "./Component/Tags";

const App = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/dogcollar" element={<DogCollars />} />
          <Route exact path="/martingale" element={<Martingale />} />
          <Route exact path="/leashes" element={<Leashes />} />
          <Route exact path="/pettags" element={<Tags />} />
        </Routes>
      </ScrollToTop>
    </>
  );
};
export default App;
