import './App.css';
import Products from './component/Products';
import Checkout from './component/Checkout';
import { createContext } from 'react';
import { data } from './component/data';
export const context = createContext();

function App() {
  return (
  <context.Provider value={data}>
  <h2>STORE</h2>
    <div className="App">
    <Products/>
    </div>
    <Checkout/>
    </ context.Provider>
  );
}

export default App;
