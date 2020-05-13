import React from "react";
import { getUserData } from '../utils/getUserData'
import TextFilter from "./TextFilter"

const UserHeader = props => {
    const [userData, setUserData] = React.useState({});
    React.useEffect(() => {
        const username = "fridabu"
        getUserData(`https://api.github.com/users/${username}?access_token=${process.env.token}`).then(data => setUserData(data));
    }, []);

    const handleChangeText  = (value) => { 
        const username = value;
        console.log("handleChangeText")
        getUserData(`https://api.github.com/users/${username}`).then(data => setUserData(data));
    }


    const { avatar_url } = userData;
    return (
        <div>
            <TextFilter handleChangeText={handleChangeText} />
            <img src={avatar_url} width='200' height='200'></img>
        </div>

    );
}

export default UserHeader;
