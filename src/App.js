import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/home/Home';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (<>
    <BrowserRouter>
      
      <Routes>
        <Route index element={ <Home/> } />
      </Routes>
      
    </BrowserRouter>
    
  </>);
}

export default App;

