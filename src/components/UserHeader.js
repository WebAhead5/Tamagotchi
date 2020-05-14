import React from "react";
import { getUserData } from '../utils/getUserData'
import TextFilter from "./TextFilter"
import UserImage from "./UserImage"
import Motivation from './Motivation'
import styled from '@emotion/styled';

const UserHeader = props => {
    const [userData, setUserData] = React.useState();

    const handleChangeText = (value) => {
        const username = value;
        getUserData(`https://api.github.com/users/${username}`).then(data => setUserData(data));
    }



    return (
        <div className='gameBody'>
            <div className="userBody">
                <TextFilter userData={userData} handleChangeText={handleChangeText} />
                <UserImage userData={userData} timeToDeath = {Math.round(props.timeToDeath / 6)} />
                <Motivation userData={userData} timeToDeath={Math.round(props.timeToDeath / 6)} />
            </div>
        </div>

    );
}

export default UserHeader;
