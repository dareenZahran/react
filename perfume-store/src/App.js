
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
import SuccessPayment from './Success/SuccessPayment'
import Profile from './Profile/profile';
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
    <Footer />
  </div>
}
/>

<Route 
path='/Cart'
element={
  <div>
     <Header/>
   <Cart/>
   <Footer />
  </div>
}
/>
<Route 
path='/Payment'
element={
  <div>
     <Header/>
   <Payment/>
   <Footer />
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
    <Footer />
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
     <Footer />
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
    <Footer />
  </div>
}
/>
<Route 
path='/Women'
element={
  <div>
    <Header/>
    <Women/>
    <Footer />
  </div>
}
/>
<Route 
path='/Men'
element={
  <div>
    <Header/>
    <Men/>
    <Footer />
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
      <Header/>
   <AddProduct/>
   <Footer />
  </div>
}
/>
<Route 
path='/profile'
element={
  <div>
      <Header/>
   <Profile/>
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
    <Footer />
        </div>
      }
    />
<Route 
path='/success'
element={
  <div>
     <Header/>
     {/* <Category/> */}
  <SuccessPayment/>
  <Footer />
  </div>
}
/>


  </Routes>
  
   {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;