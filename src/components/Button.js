import React from 'react';
import styled from '@emotion/styled';
import Icon from './Icon'




const Button = (props) => {
    const red = 100;
    const Button = styled.button`
    margin: 0 auto;
    background: linear-gradient(to bottom,rgba(${red},200,200),pink);
    width: 35px;
    height: 35px;
    
    border-radius: 15px ;
    `

    var callback = props.handleChangeTime;
    if(!props.clickable){
        callback = ()=>{}
    }

    return (
        <Button onClick={callback}>
            <Icon icon={props.icon} />
        </Button>
    );
}

export default Button;

