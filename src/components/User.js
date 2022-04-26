import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGithubContext } from "../context/githubContext";

const User = ({ user }) => {
  return (
    <div className="user">
      <Link to={`/users/${user.login}`}>{user.login}</Link>
      <img src={user.avatar_url} />
    </div>
  );
};

export default User;
