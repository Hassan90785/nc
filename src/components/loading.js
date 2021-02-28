import React from "react";
import globalstyle from '../style.module.css';
import { Spin } from 'antd';




const Loading = () => {
  return( 
  <div className={globalstyle.container}>

  <div className="load">
    <Spin />
  </div>
  
  </div>
);
};

export default Loading;
