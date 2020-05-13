import React from "react";
import { getUserData } from '../utils/getUserData'
import TextFilter from "./TextFilter"
import UserImage from "./UserImage"

const UserHeader = props => {
    const [userData, setUserData] = React.useState({});
    React.useEffect(() => {
        const username = ""
        getUserData(`https://api.github.com/users/${username}?access_token=${process.env.token}`).then(data => setUserData(data));
    }, []);

    const handleChangeText  = (value) => { 
        const username = value;
        console.log("handleChangeText")
        getUserData(`https://api.github.com/users/${username}`).then(data => setUserData(data));
    }

    
    return (
        <div>
            <TextFilter handleChangeText={handleChangeText} />
            <UserImage userData={userData} />
        </div>

    );
}

export default UserHeader;
