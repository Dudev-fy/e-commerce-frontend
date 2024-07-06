import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';

import { MainDiv, ProductDiv, ImageDiv, P, SubDiv, H1 } from './styled';
import history from '../../services/history';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get('products');
      setProducts(response.data);
    }

    getProducts();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();

    history.push(`products/${id}`);
  };

  return (
    <main>
      <H1>Best Products</H1>
      <MainDiv className="product-list">
        {products.map((product) => (
          <ProductDiv key={product.id} className="product">
            <Link
              to={`/products/${product.id}`}
              onClick={(e) => handleClick(e, product.id)}
            >
              <ImageDiv>
                {product.Images.length > 0 && (
                  <img
                    crossOrigin=""
                    src={product.Images[0].url}
                    alt={product.Images[0].fileName}
                  />
                )}
              </ImageDiv>
            </Link>
            <SubDiv>
              <Link
                to={`/products/${product.id}`}
                onClick={(e) => handleClick(e, product.id)}
              >
                <P>{product.name}</P>
              </Link>
              <P>${product.value.toFixed(2)}</P>
              <P>free deliver</P>
              <button type="button" onClick={(e) => handleClick(e, product.id)}>
                Add to cart
              </button>
            </SubDiv>
          </ProductDiv>
        ))}
      </MainDiv>
    </main>
  );
}
