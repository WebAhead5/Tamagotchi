import React from "react";

const UserImage = props => {

    if (!props.userData) return <img width='200' height='200'></img>

    const { avatar_url, name } = props.userData;
    return (
        <div>
            {name}
            <img src={avatar_url} width='200' height='200'></img>
        </div>
    );
}

export default UserImage;