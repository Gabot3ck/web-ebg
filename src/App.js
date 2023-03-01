import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/home/Home';
import { Nosotros } from './components/pages/nosotros/Nosotros';
import { Proyectos } from './components/pages/proyectos/Proyectos';
import { Contacto } from './components/pages/contacto/Contacto';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (<>
    <BrowserRouter>
      
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/proyectos" element={<Proyectos/>}/>
        <Route path="/contacto" element={<Contacto/>}/>

      </Routes>
      
    </BrowserRouter>
    
  </>);
}

export default App;

