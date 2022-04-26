import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer>
        <p>
          Copyright: {new Date().getFullYear()} All Rights Reserved Deisgned and
          Devleoped By{" "}
          <a className="small-text" href="https://github.com/parvathyvd">
            Parvathy Vazhoor
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
