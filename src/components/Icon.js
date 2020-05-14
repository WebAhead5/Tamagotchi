import React from 'react';
import styled from '@emotion/styled';
import weed from '../../public/weed.png';
import flower from '../../public/flower.png';
import love from '../../public/love.png';
import cookie from '../../public/cookie.png';

const Icon = (props) => {

  const Icon = styled.img`
      width: 150%;
      position: relative;
      right:5px;

    `
  var icon = "";
  switch (props.icon) {
    case "love":
      icon = love;
      break;
    case "weed":
      icon = weed;
      break;
    case "cookie":
      icon = cookie;
      break;

    default:
      icon = weed
      break;
  }

  return (
    <Icon src={icon} alt="Icon" />
  );
}

export default Icon;