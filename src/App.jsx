import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import About from "./Pages/About";
import Models from "./Pages/Models";
import Testimonials from "./Pages/Testimonials";
import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="models" element={<Models />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
