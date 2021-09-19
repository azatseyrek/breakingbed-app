import React from "react";
import ReactLoading from "react-loading";
import style from '../pages/Home/style.css';

const Loading = ({ type, color }) => (
  <div className='progress'>
    <ReactLoading

      type={"bubbles"}
      color={"black"}
      height={50}
      width={75}
    />
  </div>
);

export default Loading;
