
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import './styles/index.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
        <Navbar />
        <ItemListContainer />
    </div>
  );
}

export default App;
