import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawer from '../components/Navigation/Drawer'
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
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
        <Route path='/home' element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/*" element={<Page404/>} /> */}
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}