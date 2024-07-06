import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './myRoute';

import Register from '../pages/register';
import Page404 from '../pages/page404';
import Main from '../pages/main';
import Products from '../pages/products';
import Cart from '../pages/cart';
import Login from '../pages/login';
import Order from '../pages/order';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/signup" component={Register} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/" component={Main} />
      <MyRoute exact path="/products/:id" component={Products} isClosed />
      <MyRoute exact path="/cart" component={Cart} isClosed />
      <MyRoute exact path="/order" component={Order} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
