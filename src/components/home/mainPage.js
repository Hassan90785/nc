import React, { useState } from 'react';
import { Row, Col, Button } from "antd";
import Feature from './feature.js';
import Gradient from './gradient';
import globalstyle from '../../style.module.css';

const MainPage = () => {

 const features = [
  {details : "eiit in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
  {details : "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
  {details : "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
  {details : "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
  {details : "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
  {details : "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
  {details : "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
] 

return (
<div>

<div className="mediumSeperator"></div>
<div className="topCategories">
<div className="container">
<div className="row">
  {
  features.map((feature)=>(

    <Feature item={feature} />

))  
  }
 
</div>
<div className="smallSeperator"></div>
{/* 

<div className="row">
<div className="col-md-3">
<div className="mainBtn">Start Now</div>


</div>
</div> */}

</div>
</div>
<Gradient item={features} />


 <div className="pageSection">
<div className={globalstyle.container}>
<div className="row">
<div className="col-md-6">
    <p><img src="/10years.png" width="350px"/></p>
</div>
<div className="col-md-6">
<h3>Growing busineses,
that's what we do best!</h3>   
<div className="smallSeperator"></div>
<p className="bodyText">
Over the last 10 years, we have built 150+ business websites across the globe.
That explains why more and more businesses are choosing the Webarro way.
</p>
</div>
</div>
</div>


</div>



</div>
);
};



export default MainPage;