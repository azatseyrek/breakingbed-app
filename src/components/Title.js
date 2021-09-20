import React, { memo } from "react";
import logo from "../images/breakingbad.png";
import style from "../pages/Home/style.css";

import { Link } from "react-router-dom";


const Title = memo( () => {
  return (
    <div className="logo">
      <Link to='/'>
        <img alt="" src={logo} />
      </Link>
    </div>
  );
});

export default Title;
