import React from "react";
import { Link } from "react-router-dom";

const UserRepoDetails = ({ repo }) => {
  return (
    <>
      <div className="repo-names">
        <a href={repo.html_url} target="_blank" rel="noopener">
          {repo.name}
        </a>
      </div>
      ;
    </>
  );
};

export default UserRepoDetails;
