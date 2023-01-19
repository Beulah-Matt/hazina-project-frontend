//import './App.css';
import {createBrowserRouter, 
   Route, 
   createRoutesFromElements,
   RouterProvider} from 'react-router-dom'
   //pages
import Homepage from './pages/Homepage';
import Storages from './pages/Storages';
import SingleProduct from './pages/SingleProduct';
import NewProduct from './pages/admin/NewProduct';
import Clients from './pages/admin/Clients';
import CheckoutPage from './pages/Checkoutpage';
import DisplayStorages from './pages/admin/DisplayStorages';
import Orders from './pages/admin/Orders';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

//layout
import RootLayout from './layouts/RootLayout';
import AdminLayout from './layouts/AdminLayout';
import Footer from './layouts/Footer'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Thankyou from './pages/Thankyou';
import Admins from './pages/admin/Admins';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Homepage />} />
    <Route path='sign-up' element={<SignUp />} />
    <Route path='sign-in' element={<SignIn />} />
    <Route path='contact' element={<Contact />} />
    <Route path='storages' element={<Storages />} />
    <Route path='singleproduct' element={<SingleProduct />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkoutpage' element={<CheckoutPage />} />
    <Route path='thankyou' element={<Thankyou />} />
  
    <Route path='admin' element={<AdminLayout />}>
       <Route path='displaystorages' element={<DisplayStorages />} />
       <Route path='newproduct' element={<NewProduct />} />
       <Route path='orders' element={<Orders />} />       
       <Route path='clients' element={<Clients/>} />
       <Route path='admins' element={<Admins/>} />
      </Route>

        {/* error page */}
    <Route path='*' element={<NotFound />} />
  </Route>
  </>
  )
)


function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
