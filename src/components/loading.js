import React from "react";
import ReactLoading from "react-loading";
import style from '../pages/Home/style.css'

const Loading = ({ type, color }) => (
  <div className='progress'>
    <ReactLoading

      type={"spin"}
      color={"black"}
      height={667}
      width={375}
    />
  </div>
);

export default Loading;
