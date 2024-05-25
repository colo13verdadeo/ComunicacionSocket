import './App.css';
import Login from './components/Login/Login';
import store from './store/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register/Register';
import MenuReg from './components/MenuReg/MenuReg';

function App() {
  return (
    <div className="App">
      <BrowserRouter store={store}>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Menu_log" element={<MenuReg AccCompo="login"/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
