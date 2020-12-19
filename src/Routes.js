import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminProtectedRoute from './ProtectRoute';

// FREE

import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import OtherPage from "./layouts/OtherPage/OtherPage";
import ProductList from "./pages/ProductList/ProductList";
import FaqPage from "./pages/FaqPage/FaqPage";
import CardPage from "./pages/CardPage/CardPage";
import WishListPage from "./pages/WishListPage/WishListPage";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import UserAccount from "./pages/UserAccount/UserAccount";
import MyAccount from "./pages/MyAccount/MyAccount";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <AdminProtectedRoute path="/other" component={OtherPage} />
        <Route path="/productlist" component={ProductList} />
        <AdminProtectedRoute path="/productdetail/:id" component={ProductDetail} />
        <AdminProtectedRoute path="/faq" component={FaqPage} />
        <AdminProtectedRoute path="/card" component={CardPage} />
        <AdminProtectedRoute path="/wishlist" component={WishListPage} />
        <AdminProtectedRoute path="/checkout" component={CheckOutPage} />
        <AdminProtectedRoute path="/useraccount" component={UserAccount} />
        <AdminProtectedRoute path="/myaccount" component={MyAccount} />

        <Route
          render={function () {
            return <PageNotFound />;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
