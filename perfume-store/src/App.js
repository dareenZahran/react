
import './App.css';
import ImageSequence from './ImageSequence/ImageSequence';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/login';
import Header from './Header/header';
import Footer from './Footer/footer';
import Card from './PerfumeCard/card';
import Details from './HomeDetails/details';
import Home from './Home/home';
import Category from './Categore/category';
import SignUp from './SignUp/SignUp';
import Welcom from './Welcom/welcom';
import Cart from './cart/Cart';
import AboutUs from './AboutUs/AboutUs';
import Women from './Women/Women';
import Men from './Men/Men';
import Payment from './Payment/Payment';
import AddProduct from './addProduct/addProduct'; 
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
path='/welcom'
element={
  <div>
    <Welcom/>
  </div>
}
/>


<Route 
path='/header'
element={
  <div>
   
    <Header/>
    <Home/>
  </div>
}
/>

<Route 
path='/Cart'
element={
  <div>
     <Header/>
   <Cart/>
  
  </div>
}
/>
<Route 
path='/Payment'
element={
  <div>
     <Header/>
   <Payment/>
  
  </div>
}
/>

<Route 
path='/card'
element={
  <div>
    <Header/>
    {/* <Category/> */}
    <Card/>
  </div>
}
/>
{/* <Route 
path='/details'
element={
  <div>
    <Header/>
    <Category/>
    <Details/>
  </div>
}
/> */}
<Route 
path='/home'
element={
  <div>
    <Header/>
    {/* <Category/> */}
    <Home/>
  </div>
}
/>
<Route 
path='/category'
element={
  <div>
    <Header/>
    {/* <Category/> */}
    <Home/>
  </div>
}
/>
<Route 
path='/Women'
element={
  <div>
    <Header/>
    <Women/>
  </div>
}
/>
<Route 
path='/Men'
element={
  <div>
    <Header/>
    <Men/>
  </div>
}
/>
<Route 
path='/AboutUs'
element={
  <div>
    <Header/>
    <Footer/>
    <AboutUs/>
  </div>
}
/>
<Route 
path='/Add'
element={
  <div>
    <Footer/>
   <AddProduct/>
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
<Route
      path="/product/:id"
      element={
        <div>
          <Header/>
    {/* <Category/> */}
    <Details/>
        </div>
      }
    />

  </Routes>
  
   <Footer />
    </BrowserRouter>
  );
}

export default App;
