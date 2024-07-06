/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';

import { LoadingDiv } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <LoadingDiv>
      <div />
      <span>Carregando...</span>
    </LoadingDiv>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
