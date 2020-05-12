import React from 'react';
import styled from '@emotion/styled';

import Icon from './Icon'

const WeatherCard = (props) => {
    const red = 100;
    const <Button></Button> = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom,rgba(${red},200,200),pink);
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px ;
    `
    return (
        <Card>
            <Icon />
        </Card>

    );
}

export default WeatherCard;

