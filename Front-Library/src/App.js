import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Main from './components/index'

function App() {
  return (
    <BrowserRouter>
      <Main className="App" ></Main>
    </BrowserRouter>
  );
}

export default App;
