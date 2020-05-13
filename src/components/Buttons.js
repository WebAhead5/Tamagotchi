import React from 'react';
import styled from '@emotion/styled';
import Button from './Button'

const Buttons = (props) => {




    const ButoonDivCss = styled.div`
     margin: 0 auto;
    background: linear-gradient(to top,rgba(200,200,200),pink);
    width: 300px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px ;

    
    `
    return (
        <ButoonDivCss>
            <Button handleChangeTime={props.handleChangeTime}/>
            <Button handleChangeTime={props.handleChangeTime}/>
            <Button handleChangeTime={props.handleChangeTime}/>
        </ButoonDivCss>



    );
}

export default Buttons;

