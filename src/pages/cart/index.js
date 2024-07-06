/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FcOk } from 'react-icons/fc';
import { useDispatch } from 'react-redux';

import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import {
  OrderDiv,
  Main,
  H1,
  ProductDiv,
  ProductDesc,
  ProductImage,
  ProductPrice,
  BorderTop,
  BorderBottom,
  TotalValueDiv,
  DetailsDiv,
  QuantityDiv,
  ExcludeInput,
  LoadingBox,
} from './styled';
import axios from '../../services/axios';

export default function Cart() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [excludedIds, setExcludedIds] = useState([]);
  const [isOrder, setOrder] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    setIsCartEmpty(false);

    async function getShoppingCart() {
      try {
        const response = await axios.get(`carts`);
        setProducts(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (error) {
        if (error.response.status === 404) {
          setIsCartEmpty(true);
          return;
        }
        dispatch(actions.loginFailure());
      }
    }

    getShoppingCart();
  }, [dispatch]);

  const handleExclude = (e, index, id) => {
    e.preventDefault();

    setExcludedIds([...excludedIds, id]);

    axios
      .delete(`carts/${products[index].id}`)
      .then((response) => {
        if (response.status === 200) {
          axios
            .get(`carts`)
            .then(() => {
              const { totalPurchase } = products[products.length - 1];
              const newTotalPurchase =
                totalPurchase -
                products[index].value * products[index].quantity;
              const updatedCart = [...products];
              updatedCart[products.length - 1].totalPurchase =
                newTotalPurchase.toFixed(2);
              setProducts(updatedCart);
            })
            .catch(() => {
              setIsCartEmpty(true);
            });
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  const handleQuantityChange = (index, value) => {
    axios
      .put(`carts/${products[index].id}/${value}`)
      .then((response) => {
        if (response.status === 200) {
          axios
            .get(`carts`)
            .then((response1) => {
              setProducts(response1.data);
            })
            .catch(() => {
              setError(true);
            });
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  async function handleOrder(e) {
    e.preventDefault();

    try {
      await axios.post('orders');
      await axios.delete('carts');
      setOrder(true);
    } catch {
      setError(true);
    }

    setOrder(true);
  }

  const handleClick = () => {
    history.push('/order');
  };

  if (isOrder) {
    return (
      <OrderDiv>
        <h2>
          <FcOk /> Your order is on the way!
        </h2>
        <button type="button" onClick={handleClick}>
          See orders
        </button>
      </OrderDiv>
    );
  }

  if (isCartEmpty) {
    return (
      <OrderDiv>
        <h2>Your shopping cart is empty</h2>
      </OrderDiv>
    );
  }

  if (isError) {
    return (
      <OrderDiv>
        <h2>Unknown error. Try again later</h2>
      </OrderDiv>
    );
  }

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

  return (
    <Main>
      <H1>Shopping cart</H1>
      <BorderTop>
        <p>price</p>
      </BorderTop>
      {products.map((product, index) => {
        if (excludedIds.includes(product.id)) {
          return (
            <>
              <ProductDiv>
                <ProductDesc>
                  <h2>removed from cart</h2>
                </ProductDesc>
              </ProductDiv>
              <BorderBottom />
            </>
          );
        }
        return index === products.length - 1 ? (
          <TotalValueDiv>
            {product.totalPurchase && (
              <>
                <button type="button" onClick={handleOrder}>
                  Close order
                </button>
                <h2>
                  Subtotal ({products.length - 1} products): $
                  {product.totalPurchase}
                </h2>
              </>
            )}
          </TotalValueDiv>
        ) : (
          <>
            <ProductDiv key={product.id}>
              <ProductImage>
                {product.imagesUrl.length > 0 && (
                  <img
                    crossOrigin=""
                    src={product.imagesUrl[0]}
                    alt="product"
                  />
                )}
              </ProductImage>
              <ProductDesc>
                <h2>{product.name}</h2>
                <DetailsDiv>
                  <QuantityDiv>
                    <label htmlFor={`quantitySelect-${index}`}>Qtd:</label>
                    <select
                      id={`quantitySelect-${index}`}
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(index, e.target.value)
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </QuantityDiv>
                  <i />
                  <ExcludeInput
                    value="Exclude"
                    onClick={(e) => handleExclude(e, index, product.id)}
                  />
                </DetailsDiv>
              </ProductDesc>
              <ProductPrice>
                {product.value && <h2>${product.value.toFixed(2)}</h2>}
              </ProductPrice>
            </ProductDiv>
            <BorderBottom />
          </>
        );
      })}
    </Main>
  );
}
