import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawer from '../components/Drawer'
import { Home } from "../components/Home";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import Footer from "../components/Footer";
import { Proyectos } from "../components/Proyectos";
// import { AboutMe } from "../components/AboutMe";

export function Router() {

  let lang = localStorage.getItem("lang");
  if (!lang) {
    lang = "";
  } else {
    lang = "/" + lang;
  }

  return (
    <BrowserRouter basename={lang} >
      <Drawer />
      < Routes >
        <Route path='/inicio' element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        {/* <Route path="/sobremi" component={AboutMe} /> */}
        {/* <Route path="/*" element={<Page404/>} /> */}
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}