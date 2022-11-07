import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListarUsuarios from './pages/Listar-usuarios/Listar-usuarios';
import SorteadorNumero from './pages/Sorteador-numero/Sorteador-numero';
import Relogio from './pages/Relogio/Relogio';
import Navbar from './componentes/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <div id='bg_branco'>
      <Router>
            <Navbar/>
              <Routes>
                <Route path='/' element= {<SorteadorNumero />} />
                <Route path='listar-usuarios' exact element= {<ListarUsuarios />} />
                <Route path='relogio' exact element= {<Relogio />} />
              </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
