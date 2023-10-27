import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Navbar from './components/Navbar';
import HorizontalStepper from './components/HorizontalStepper';
import { useContext } from 'react';
import { AppContext } from './components/AuthContexts';

function App() {

  const { number } = useContext(AppContext)
  console.log(number)
  return (
    <div className="App">
      {
        number > 3 ? (<div>Hello</div>) : (<HorizontalStepper ></HorizontalStepper>)
      }

    </div>
  );
}

export default App;
