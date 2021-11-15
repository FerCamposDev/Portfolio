import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawer from '../components/Navigation/Drawer'
import Home from "../Pages/Home/Home";
import Proyectos from "../Pages/Projects/Projects";
import Resume from "../Pages/Resume/Resume";
import Contact from "../Pages/Contact/Contact";
import Footer from "../components/Footer";

export function Router() {
  let lang = localStorage.getItem("lang");
  if (!lang) {
    lang = "/en";
  } else {
    lang = "/" + lang;
  }

  return (
    <BrowserRouter basename={lang} >
      <Drawer />
      < Routes >
        <Route path='/inicio' element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/curriculum" element={<Resume />} />
        <Route path="/contacto" element={<Contact />} />
        {/* <Route path="/*" element={<Page404/>} /> */}
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}