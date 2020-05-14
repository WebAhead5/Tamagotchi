import React from "react";
import { getUserData } from '../utils/getUserData'
import TextFilter from "./TextFilter"
import UserImage from "./UserImage"
import Motivation from './Motivation'
import styled from '@emotion/styled';

const UserHeader = props => {
    const [userData, setUserData] = React.useState({});
    React.useEffect(() => {
        const username = ""
        getUserData(`https://api.github.com/users/${username}?access_token=${process.env.token}`).then(data => setUserData(data));
    }, []);

    const handleChangeText = (value) => {
        const username = value;
        console.log("handleChangeText")
        getUserData(`https://api.github.com/users/${username}`).then(data => setUserData(data));
    }



    return (
        <div className='gameBody'>
            <div className="userBody">
                <TextFilter userData={userData} handleChangeText={handleChangeText} />
                <UserImage userData={userData} />
                <Motivation userData={userData} timeToDeath={Math.round(props.timeToDeath / 6)} />
            </div>
        </div>

    );
}

export default UserHeader;
