import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Counter from './Counter';
import Grid from './Grid';
import PasswordGenerator from './PasswordGenerator'
import AreaOfCircle from './AreaOfCircle';
import AreaOfRectangle from './AreaOfRectangle';
import CurrencyConverter from './currencyConverter';



function App() {
  return (
    <div className="App">
          <Navbar/>
          <Counter/>
          <Grid/>
          <PasswordGenerator/>
          <AreaOfCircle/>
          <AreaOfRectangle/>
          <CurrencyConverter/>
    </div>
  );
}

export default App;
