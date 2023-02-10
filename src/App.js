import './App.css';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <div className="p-5 mb-2 bg-dark text-success sticky-xxl-top"><h1>wellcome</h1></div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </div>
  );
}

export default App;
