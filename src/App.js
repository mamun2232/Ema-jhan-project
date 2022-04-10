import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js/Header';
import Shop from './components/Shops/Shop';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Ivantory from './components/Ivantory/Ivantory';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="emajon">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop
        ></Shop>}></Route>
        <Route path='/orderReview' element={<RequireAuth>
          <OrderReview></OrderReview>
        </RequireAuth>}></Route>
        <Route path='/ivantory' element={<Ivantory></Ivantory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      </Routes>




    </div>
  );
}

export default App;
