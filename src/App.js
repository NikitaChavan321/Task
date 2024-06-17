
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import compstore from './Redux/Store';
import { ToastContainer } from 'react-toastify';
import Compnay from './Component/Compnay';

function App() {
  return (
    <Provider store={compstore}>
    <BrowserRouter>

      <Routes>
       <Route path='/' element={<Compnay></Compnay>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer position='top-right'></ToastContainer>
    </Provider>
  );
}

export default App;