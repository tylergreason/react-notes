import './App.css';
import Notes from './Components/Notes/Notes';
import { CartContext } from './CartContext';
import { useReducer } from 'react';
import cartReducer from './cartReducer';

const initialCart: [] = [];

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value ={null}>
      This is TypeScript in React!
      <Notes></Notes>
      </CartContext.Provider>
  );
}

export default App;
