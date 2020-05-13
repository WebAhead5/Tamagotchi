import React from 'react';
import styled from '@emotion/styled';
import weed from '../../public/weed.png';
import heart from '../../public/heart.jpg';

const Icon = (props) => {

  const Icon = styled.img`
      width: 100%;

    `

  return (
    <Icon src={props.icon==="weed" ? weed : heart} alt="Weather Icon" />
  );
}

export default Icon;