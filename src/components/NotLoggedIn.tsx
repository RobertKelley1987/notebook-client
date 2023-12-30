import React from "react";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default NotLoggedIn;
