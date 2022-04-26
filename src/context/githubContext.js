import React, { useContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GithubContext = React.createContext();

export const GithubContextProvider = ({ children }) => {
  const initState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initState);

  // const fetchUsers = async () => {
  //   const response = await fetch(`https://api.github.com/users`, {
  //     headers: {
  //       Authorization: `token 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`,
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  //Get user using Search

  const fetchUsers = async (input) => {
    setLoading();
    console.log(process.env.REACT_APP_GITHUB_URL);
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?q=${input}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const { items } = await response.json();
    // console.log("users data", items);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  //Get individual user
  const fetchUser = async (login) => {
    setLoading();
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      // console.log(data);
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const getRepos = async (login) => {
    setLoading();
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log("users repos", data);
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        fetchUsers,
        clearUsers,
        fetchUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};
