import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGithubContext } from "../context/githubContext";
import UserRepo from "./UserRepo";

const UserDetail = () => {
  const { user, fetchUser, repos, getRepos } = useGithubContext();
  const params = useParams();
  // console.log(params);
  useEffect(() => {
    fetchUser(params.login);
    getRepos(params.login);
  }, []);
  console.log("user in the userDetail", user);
  return (
    <>
      <h1 className="text-white">Github details of {user.name}</h1>
      <div className="user-details">
        <div className="user-img">
          <img src={user.avatar_url} alt={user.name} />
          <div className="img__info">
            <p>{user.name}</p>
            <p>{user.login}</p>
          </div>
        </div>
        <div className="user-info">
          {user.hireable === true && (
            <button className="hireable">Hireable</button>
          )}
          {user.bio !== "" && <p>{user.bio}</p>}
          {user.location !== "" && <p>{user.location}</p>}
          {user.company !== "" && <p>{user.company}</p>}
          {user.blog !== "" && <p>{user.blog}</p>}
          <a
            href={user.html_url}
            className="btn-profile"
            target="_blank"
            rel="noreferer"
          >
            Visit Gitbub Profile
          </a>
        </div>
      </div>
      <div className="more-details">
        <p>
          <span className="info-name">Followers</span>
          {user.followers}
        </p>
        <p>
          <span className="info-name">Following</span>
          {user.following}
        </p>
        <p>
          <span className="info-name">Public Gists</span>
          {user.public_gists}
        </p>
        <p>
          <span className="info-name">Public Repos</span>
          {user.public_gists}
        </p>
      </div>
      <div className="repo-list">
        <UserRepo repos={repos} />
      </div>
    </>
  );
};

export default UserDetail;
