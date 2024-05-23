import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import store from './store/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter store={store}>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
