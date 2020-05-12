import React from "react";
import {getUserData} from '../utils/getUserData'
import { token } from "../../token";
import Repo from "./repo"

const RepoList = props => {
    const [repos,setRepos] = React.useState([]);
    React.useEffect(() => {
        const username = "fridabu";
        getUserData(`https://api.github.com/users/${username}/repos?access_token=${token}`).then(data => setRepos(data));
      }, []);

    
    //const { avatar_url, html_url, name, followers, repos_url } = userData;


    return (
        <ul>
          {repos.map(repo => (
            <Repo key={repo.id} {...repo} />
          ))}
        </ul>
      );
}

export default RepoList;