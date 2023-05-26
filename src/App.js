
import './styles/index.scss';
import { GeneralProvider } from './context/GeneralContext'
import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import { AppRouter } from './routes/AppRouter';


function App() {
  return (
    <GeneralProvider>
      <LoginProvider>
        <CartProvider>
          <AppRouter/>
        </CartProvider>
      </LoginProvider>
    </GeneralProvider>
  );
}

export default App;
