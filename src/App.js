import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/home/Home';
import { Nosotros } from './components/pages/nosotros/Nosotros';
import { Proyectos } from './components/pages/proyectos/Proyectos';
import { Contacto } from './components/pages/contacto/Contacto';
import { ObrasCiviles } from './components/pages/servicios/oocc/ObrasCiviles';
import { ObrasViales } from './components/pages/servicios/oocc/ObrasViales';
import { ObrasSanitarias } from './components/pages/servicios/oocc/ObrasSanitarias';
import { ObrasElectricas } from './components/pages/servicios/oocc/ObrasElectricas';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (<>
    <BrowserRouter>
      
      <Routes>
        <Route index element={ <Home/> } />
        <Route path="/nosotros" element={ <Nosotros/> } />
        <Route path="/proyectos" element={ <Proyectos/> } />
        <Route path="/contacto" element={ <Contacto/> } />
        <Route path='/oocc' element={ <ObrasCiviles/> } />
        <Route path='/oocc/obras_viales' element={ <ObrasViales/> } />
        <Route path='oocc/obras_electricas' element={ <ObrasElectricas/> } />
        <Route path='/oocc/obras_sanitarias' element={ <ObrasSanitarias/> } />

      </Routes>
      
    </BrowserRouter>
    
  </>);
}

export default App;

