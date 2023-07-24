import './App.css';
import Items from './component/Items';
import Navbar from './component/Navbar';

function App() {
  return (
    <main>
      <Navbar/>
      <div className='item-container'>
      <Items/>
      </div>
    </main>
  );
}

export default App;
