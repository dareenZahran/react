import logo from './logo.svg';
import './App.css';
import ImageSequence from './ImageSequence/ImageSequence';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/login';
import Header from './Header/header';
import Card from './PerfumeCard/card';
import Details from './HomeDetails/details';
import Home from './Home/home';
import Category from './Categore/category';
import SignUp from './SignUp/SignUp';
function App() {
  return (
  <BrowserRouter>
  <Routes>
<Route 
path='/'
element={
  <div>
    <ImageSequence/>
  </div>
}
/>


<Route 
path='/login'
element={
  <div>
    <Login/>
  </div>
}
/>


<Route 
path='/header'
element={
  <div>
   
    <Header/>
    <Category/>
    <Home/>
  </div>
}
/>

<Route 
path='/card'
element={
  <div>
    <Header/>
    <Category/>
    <Card/>
  </div>
}
/>
<Route 
path='/details'
element={
  <div>
    <Header/>
    <Category/>
    <Details/>
  </div>
}
/>
<Route 
path='/home'
element={
  <div>
    <Header/>
    <Category/>
    <Home/>
  </div>
}
/>
<Route 
path='/category'
element={
  <div>
    <Header/>
    <Category/>
    <Home/>
  </div>
}
/>

<Route 
path='/SignUp'
element={
  <div>
  <SignUp/>
  </div>
}
/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
