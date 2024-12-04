import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Counter from './Counter';
import Grid from './Grid';
import PasswordGenerator from './PasswordGenerator'



function App() {
  return (
    <div className="App">
          <Navbar/>
          <Counter/>
          <Grid/>
          <PasswordGenerator/>
    </div>
  );
}

export default App;
