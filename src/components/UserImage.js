import React from "react";

const UserImage = props => {

    if (!props.userData) return <img width='200' height='200'></img>

    const { avatar_url, name } = props.userData;
    var src = avatar_url;

    if (props.timeToDeath ==0 ){
        src=require('../../public/skull.svg');
    }
    return (
        <div>
            {name}
            <img src={src} width='200' height='200'></img>
        </div>
    );
}

export default UserImage;