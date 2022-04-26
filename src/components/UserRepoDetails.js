import React from "react";

const UserRepoDetails = ({ repo }) => {
  return (
    <>
      <div className="repo-names">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </div>
      ;
    </>
  );
};

export default UserRepoDetails;
