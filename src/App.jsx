import { useState } from 'react';
import Nav from './component/navbar/nav.jsx';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home'; 
import Card from './component/Card'; 
import PlaceOrder from './component/PlaceOrder'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/Card" element={<Card />} />
        <Route path="/Order" element={<PlaceOrder />} /> */}
      </Routes>
    </div>
  );
}

export default App;