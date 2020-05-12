import React from "react";
const Repo = ({ name, stargazers_count, description, html_url }) => {
    return <li>
        <h4>repo name: {name}</h4>
        <h6>description: {description}</h6>
        </li>;
  };
  
  export default Repo;