import React, { useEffect, useState } from 'react';
import { FcOk } from 'react-icons/fc';
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import {
  MainDiv,
  MiniImages,
  ImageDiv,
  DescDiv,
  PriceDiv,
  OrderImage,
  OrderText,
  OrderDiv,
  LoadingBox,
} from './styled';

export default function Products() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isOrder, setOrder] = useState(false);

  const url = window.location.href;
  const parts = url.split('/');
  const productId = parts[parts.length - 1];

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`products/unique/${productId}`);
      setProduct(response.data);
      if (quantity === 1) {
        setButtonDisabled(true);
      } else {
        setButtonDisabled(false);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }

    getProduct();
  }, [productId, quantity]);

  async function addToCart(e) {
    try {
      e.preventDefault();

      const response = await axios.post(`carts/${quantity}/${productId}`);
      if (response.status === 200) {
        setOrder(true);
      }
    } catch {
      dispatch(actions.loginFailure());
      history.go(0);
    }
  }

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const goToCart = (e) => {
    e.preventDefault();

    history.push('/cart');
  };

  if (isLoading) {
    return (
      <MainDiv>
        <ImageDiv>
          <LoadingBox />
        </ImageDiv>
        <DescDiv>
          <LoadingBox />
        </DescDiv>
        <PriceDiv>
          <LoadingBox />
        </PriceDiv>
      </MainDiv>
    );
  }

  if (isOrder) {
    return (
      <MainDiv style={{ padding: '0px' }}>
        <OrderImage>
          {product.Images && product.Images.length > 0 && (
            <img
              crossOrigin=""
              src={product.Images[currentIndex].url}
              alt={product.Images[currentIndex].fileName}
            />
          )}
        </OrderImage>
        <OrderDiv>
          <OrderText>
            <FcOk /> Product added to cart!
          </OrderText>
          <button type="button" onClick={(e) => goToCart(e)}>
            Go to cart
          </button>
        </OrderDiv>
      </MainDiv>
    );
  }

  return (
    <MainDiv>
      <MiniImages>
        {product.Images &&
          product.Images.length > 0 &&
          product.Images.map((image, index) => (
            // eslint-disable-next-line react/no-array-index-key, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              crossOrigin=""
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              src={image.url}
              alt={image.fileName}
              onClick={() => handleImageChange(index)}
              onMouseEnter={() => handleImageChange(index)}
            />
          ))}
      </MiniImages>
      <ImageDiv>
        {product.Images && product.Images.length > 0 && (
          <img
            crossOrigin=""
            src={product.Images[currentIndex].url}
            alt={product.Images[currentIndex].fileName}
          />
        )}
      </ImageDiv>
      <DescDiv>
        <h1>{product.name} dell i5 16gb RAM 240gb SSD</h1>
      </DescDiv>
      <PriceDiv>
        {product.value && <h2>${product.value.toFixed(2)}</h2>}
        <h3>Free Deliver</h3>
        <div>
          <button
            type="button"
            disabled={isButtonDisabled}
            onClick={decrementQuantity}
          >
            -
          </button>
          <button type="button">Quantidade: {quantity}</button>
          <button type="button" onClick={incrementQuantity}>
            +
          </button>
        </div>
        <button type="button" onClick={(e) => addToCart(e)}>
          Adicionar ao carrinho
        </button>
      </PriceDiv>
    </MainDiv>
  );
}
