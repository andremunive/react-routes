import { Navbar } from './components/Navbar';
import { SideBar } from './components/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewProduct } from './pages/NewProduct';
import { CancelOrder } from './pages/CancelOrder';
import { ProductionOrder } from './pages/ProductionOrder';
import { Reports } from './pages/Reports';

import './App.css';

function App() {
  return (
    <> 
    <div className="flex">
    <BrowserRouter>
      <SideBar/>
      <Routes>
            <Route path="/" element={<NewProduct/>} />
            <Route path="/new" element={<ProductionOrder/>} />
            <Route path="/cancel"  element={<CancelOrder/>} />
            <Route path="/report" element={<Reports/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
    
    
    
  );
}

export default App;
