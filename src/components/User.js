import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="user">
      <Link to={`/users/${user.login}`}>{user.login}</Link>
      <img src={user.avatar_url} alt={user.login} />
    </div>
  );
};

export default User;
