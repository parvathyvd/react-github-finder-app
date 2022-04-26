import React from "react";
import UserRepoDetails from "./UserRepoDetails";

const UserRepo = ({ repos }) => {
  return (
    <>
      <h2 className="repo-heading">Popular Repos</h2>
      {repos.map((repo) => {
        return <UserRepoDetails repo={repo} />;
      })}
    </>
  );
};

export default UserRepo;
