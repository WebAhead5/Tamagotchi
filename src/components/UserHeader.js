import React from "react";
import { getUserData } from '../utils/getUserData'
import TextFilter from "./TextFilter"

const UserHeader = props => {
    const [searchText, setSearchText] = React.useState("");
    const [userData, setUserData] = React.useState({});
    React.useEffect(() => {
        const username = "amirfahoum"
        getUserData(`https://api.github.com/users/${username}?access_token=${process.env.token}`).then(data => setUserData(data));
    }, []);

    const handleChangeText  = (value) => { 
        setSearchText(value);
        const username = value;
        getUserData(`https://api.github.com/users/${username}`).then(data => setUserData(data));
    }


    const { avatar_url, html_url, name, followers, repos_url } = userData;
    return (
        <div>
            <TextFilter handleChangeText={handleChangeText} />
            <h1>Name  {name}</h1>
            <h2>followers {followers} </h2>
            <img src={avatar_url} width='200' height='200'></img>
        </div>

    );
}

export default UserHeader;
