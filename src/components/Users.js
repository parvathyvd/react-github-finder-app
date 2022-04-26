import React from "react";
import { useGithubContext } from "../context/githubContext";
import Loader from "../UI/Loader";
import User from "./User";

const Users = () => {
  const { users, loading } = useGithubContext();
  if (!loading) {
    return (
      <div className="users">
        {users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Users;
