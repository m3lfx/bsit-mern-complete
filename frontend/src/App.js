import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadUser } from './actions/userActions'
import { useSelector, useDispatch } from 'react-redux'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/product/ProductDetails'
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'

import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import Payment from './components/cart/Payment'
import OrderSuccess from './components/cart/OrderSuccess'
import ListOrders from './components/order/ListOrders'
import OrderDetails from './components/order/OrderDetails'

import Dashboard from './components/admin/Dashboard'
import ProductsList from './components/admin/ProductsList'
import NewProduct from './components/admin/NewProduct'
import UpdateProduct from './components/admin/UpdateProduct'

import OrdersList from './components/admin/OrdersList'
import ProcessOrder from './components/admin/ProcessOrder'

import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'

import ProductReviews from './components/admin/ProductReviews'



import ProtectedRoute from './components/route/ProtectedRoute'
import store from './store'


function App() {
	// const dispatch = useDispatch();

	useEffect(() => {
    	store.dispatch(loadUser());
	}, [])

const { user, isAuthenticated, loading } = useSelector(state => state.auth)
// console.log(isAuthenticated,loading)
  return (
   <Router>
	    <div className="App">
	    <Header />
	    <Routes>
		    <Route path="/" element={<Home />} exact="true" />
		    <Route path="/search/:keyword" element={<Home />} exact="true"/>
		    <Route path="/product/:id" element={<ProductDetails />} exact="true" />

		    
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
      <Route path="/password/forgot" element={<ForgotPassword />} exact="true" />
      <Route path="/password/reset/:token" element={<NewPassword />} exact="true" />
      <Route path="/cart" element={<Cart />} exact="true" />
      
			{/*<Route path="/me" element={<Profile />}  />*/}
      <Route
        path="/me"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute isAdmin={true}>
            <ProductsList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/me/update"
        element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/me"
        element={
          <ProtectedRoute>
            <ListOrders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/product"
        element={
          <ProtectedRoute isAdmin={true} >
            <NewProduct />
          </ProtectedRoute>
        }
      />
      <Route path="/password/update" element={<UpdatePassword />}  />
      <Route path="/shipping" element={<Shipping />}  />
      <Route path="/confirm" element={<ConfirmOrder />}  />
      <Route path="/payment" element={<Payment />}  />
      <Route path="/success" element={<OrderSuccess />}  />
      {/*<Route path="/orders/me" element={<ListOrders />}  />*/}
     { <Route path="/order/:id" element={<OrderDetails />}  />}
      {/*<Route path="/dashboard" element={<Dashboard />}  />*/}
      {/*<Route path="/admin/products" element={<ProductsList />}  />*/}
      {/*<Route path="/admin/product" element={<NewProduct  />}  />*/}
      <Route path="/admin/product/:id" element={<UpdateProduct  />}  />

      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute isAdmin={true}>
            <OrdersList />
          </ProtectedRoute>
        }
      />
      {/*<Route path="/admin/orders" element={<OrdersList  />}  />*/}
      <Route path="/admin/order/:id" element={<ProcessOrder  />}  />
      <Route path="/admin/users" element={<UsersList  />}  />
      <Route path="/admin/user/:id" element={<UpdateUser  />}  />
      <Route path="/admin/reviews" element={<ProductReviews  />}  />

       {/*<ProtectedRoute path="/admin/reviews" isAdmin={true} component={ProductReviews} exact />*/}

{/*<ProtectedRoute path="/admin/" isAdmin={true} component={UpdateUser} exact />*/}
      
     {/* <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact />*/}

      {/* <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />*/}
      {/*<ProtectedRoute path="/admin/orders" isAdmin={true} component={OrdersList} exact />*/}
      {/*<ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact />*/}
      {/*<Route path="/admin/products" element={<ProductsList />}  />
      <Route path="/admin/product" element={<ProductsList />}  />*/}
			{/*<Route path="/me" element={
         <ProtectedRoute>
             <Profile />
          </ProtectedRoute> }  />
      */}
     {/* <Route path="/me/update" element={<UpdateProfile />}  />*/}
      {/*<Route path="/me/update" 
          element={
           <ProtectedRoute >
               <UpdateProfile />
           </ProtectedRoute> } exact="true" />*/}
             
    {/* <Route path="/password/update" 
            element={
             <ProtectedRoute >
                 <UpdatePassword />
             </ProtectedRoute> } exact="true" />*/}

      
      {/*<Route path="/shipping" 
            element={
             <ProtectedRoute >
                 <Shipping />
             </ProtectedRoute> }  />*/}

      {/*<Route path="/confirm" 
            element={
             <ProtectedRoute >
                 <ConfirmOrder />
             </ProtectedRoute> }  />*/}

     {/* <Route path="/payment" 
            element={
             <ProtectedRoute >
                 <Payment />
             </ProtectedRoute> }  />*/}

      {/*<Route path="/success" 
            element={
             <ProtectedRoute >
                 <OrderSuccess />
             </ProtectedRoute> }  />*/}

      {/*<Route path="/orders/me" 
            element={
             <ProtectedRoute >
                 <ListOrders />
             </ProtectedRoute> }  />*/}

      {/*<Route path="/order/:id" 
            element={
             <ProtectedRoute >
                 <OrderDetails />
             </ProtectedRoute> }  />*/}

      {/*<Route path="/dashboard" 
            element={
             <ProtectedRoute  >
                 <Dashboard  />
             </ProtectedRoute> }  /> */}

      {/*<Route path="/admin/products" 
            element={
             <ProtectedRoute isAdmin={true}>
                 <ProductsList  />
             </ProtectedRoute> }  />*/}

    {/*  <Route path="/admin/product" 
            element={
             <ProtectedRoute isAdmin={true}>
                 <NewProduct  />
             </ProtectedRoute> }  />*/}


      {/*<ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact />*/}
       {/*<ProtectedRoute path="/dashboard" }isAdmin={true component={Dashboard} exact />      
      */}{/*<ProtectedRoute path="/order/:id" component={OrderDetails} exact />*/}
      {/*<ProtectedRoute path="/orders/me" component={ListOrders} exact />*/}

     {/* <ProtectedRoute path="/success" component={OrderSuccess} />*/}
      {/*<ProtectedRoute path="/payment" component={Payment} />
      */}{/*<ProtectedRoute path="/confirm" component={ConfirmOrder} exact />*/}
			{/* <ProtectedRoute path="/me" element={<Profile />} exact="true" />*/}

	    </Routes>
	    {/*{!loading && (!isAuthenticated || user.role !== 'admin') && (
          <Footer />
          )}*/}
	    </div>
    </Router>
  );
}
export default App;
