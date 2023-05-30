import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './components/AddProducts';
import Footer from './components/Footer';
import Login from './components/Login';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import Products from './components/Products';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Products />}></Route>
          <Route path='/add' element={<AddProducts />}></Route>
          <Route path='/update' element={<AddProducts />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
