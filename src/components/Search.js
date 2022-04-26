import React, { useState } from "react";
import { useAlertContext } from "../context/alertContext";
import { useGithubContext } from "../context/githubContext";

const Search = () => {
  const { fetchUsers, users, clearUsers } = useGithubContext();
  const { setAlert } = useAlertContext();
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      setAlert("Please enter something", "danger");
    } else {
      //Call fetchuser
      fetchUsers(inputText);
      setInputText("");
    }
  };

  const clearHandler = () => {
    clearUsers();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form__control">
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Search Github User.."
        />
        <button className="btn btn-search">Search</button>
        {users.length > 0 && (
          <button className="btn btn-clear" onClick={clearHandler}>
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default Search;
