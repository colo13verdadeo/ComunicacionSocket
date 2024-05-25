import './App.css';
import store from './store/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuReg from './components/MenuReg/MenuReg';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter store={store}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login-register" element={<MenuReg AccCompo="Login"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
