import './App.css';
import store from './store/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuReg from './components/MenuReg/MenuReg';

function App() {
  return (
    <div className="App">
      <BrowserRouter store={store}>
        <Routes>
          <Route path="/Menu_log" element={<MenuReg AccCompo="login"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
