import Welcome from './components/Welcome';
import Chef from './components/Chef';
import Mesero from './components/Mesero';
import Admin from './components/Admin';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/chef" element={<Chef/>}/>
        <Route path="/mesero" element={<Mesero/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
