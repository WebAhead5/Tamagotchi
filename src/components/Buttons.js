import React from 'react';
import styled from '@emotion/styled';
import Button from './Button'

const Buttons = (props) => {




    const ButoonDivCss = styled.div`
     margin: 0 auto;
     background-image: radial-gradient(#aa40bf,#a329a3,#821770,#5c0a41);
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
            <Button icon="love" handleChangeTime={props.handleChangeTime} />
            <Button icon="weed" handleChangeTime={props.handleChangeTime} />
            <Button icon="cookie" handleChangeTime={props.handleChangeTime} />
        </ButoonDivCss>



    );
}

export default Buttons;

