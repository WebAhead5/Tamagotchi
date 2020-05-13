import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {

    const Icon = styled.div`
      width: 40%;
    `

    return (
        <Icon src="./img/clouds.png" alt="Weather Icon" />
    );
}

export default Icon;