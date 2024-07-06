import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';

import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import {
  Main,
  H1,
  ProductDiv,
  ProductDesc,
  ProductImage,
  ProductPrice,
  BorderTop,
  BorderBottom,
  DetailsDiv,
  LoadingBox,
  OrderDiv,
} from './styled';
import axios from '../../services/axios';

export default function Cart() {
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isOrderEmpty, setIsOrderEmpty] = useState(false);

  useEffect(() => {
    setIsOrderEmpty(false);

    async function getShoppingCart() {
      try {
        const response = await axios.get(`orders`);
        setOrders(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (error) {
        if (error.response.status === 404) {
          setIsOrderEmpty(true);
          return;
        }
        dispatch(actions.loginFailure());
        history.go(0);
      }
    }

    getShoppingCart();
  }, [dispatch]);

  if (isLoading) {
    return (
      <Main>
        <ProductDiv>
          <ProductImage>
            <LoadingBox />
          </ProductImage>
          <ProductDesc>
            <LoadingBox />
          </ProductDesc>
          <ProductPrice>
            <LoadingBox />
          </ProductPrice>
        </ProductDiv>
      </Main>
    );
  }

  if (isOrderEmpty) {
    return (
      <OrderDiv>
        <h2>There are no orders yet</h2>
      </OrderDiv>
    );
  }

  return (
    <Main>
      <H1>Your orders</H1>
      <BorderTop>
        <p>total purchase</p>
      </BorderTop>
      {orders.map((order) => (
        <>
          <ProductDiv key={order.id}>
            <ProductImage>
              {order.Product.Images.length &&
                order.Product.Images.length > 0 && (
                  <img
                    crossOrigin=""
                    src={order.Product.Images[0].url}
                    alt="product"
                  />
                )}
            </ProductImage>
            <ProductDesc>
              <h2>{order.Product.name}</h2>
              <DetailsDiv>
                <p>Quantity: {order.quantity}</p>
                <p>Order made on: {format(new Date(order.created_at), 'PP')}</p>
              </DetailsDiv>
            </ProductDesc>
            <ProductPrice>
              {order.totalPurchase && (
                <h2>${order.totalPurchase.toFixed(2)}</h2>
              )}
            </ProductPrice>
          </ProductDiv>
          <BorderBottom />
        </>
      ))}
    </Main>
  );
}
