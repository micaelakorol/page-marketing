import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import App from "../App";
import Render from "../components/Render";
import DesarrolloWeb from "../pages/DesarrolloWeb/DesarrolloWeb";
import GestionRedes from "../pages/GestionRedes/GestionRedes";
import Contacto from "../pages/Contacto/Contacto";
import Blog from "../pages/Blog/Blog";
import Politicas from "../pages/Politicas/Politicas";
import Cookies from "../pages/Politicas/Cookies";
import TyC from "../pages/Politicas/TyC";
import Error from "../pages/Error";
  
 export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Render />} />
        <Route path="/desarrollo" element={<DesarrolloWeb />} />
        <Route path="/redes-anuncios" element={<GestionRedes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/politicas-de-privacidad' element={<Politicas />} />
        <Route path='/politicas-de-cookies' element={<Cookies />} />
        <Route path='/terminos-y-condiciones' element={<TyC />} />
        <Route path='*' element={<Error />} />
      </Route>
    )
  );