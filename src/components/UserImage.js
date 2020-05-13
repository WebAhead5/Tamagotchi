import React from "react";

const UserImage = props => {

    if(!props.userData) return <img  width='200' height='200'></img>

    const {avatar_url} = props.userData;
    return (
        <img src={avatar_url} width='200' height='200'></img>
    );
}

export default UserImage;