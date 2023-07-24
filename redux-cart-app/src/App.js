import store from './store';
import { Provider } from 'react-redux';
import './App.css';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Cart/>
    </Provider>
  );
}

export default App;
