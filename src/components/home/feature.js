import React from 'react';
import { motion } from "framer-motion"

const Feature = (props) => {
return (
<>
<div className="col-md-3"> 
<motion.div
    animate={{
      scale: [1, 1, 1, 1, 1],
      rotate: [0, 0, 20, 10, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  >        
<div className="itemHover">
    <span>{props.item.details} </span>
  </div>
  </motion.div>
</div>



<style jsx>{
    `
    .itemHover {
      padding: 25px;
      border-radius:5px;
      margin-bottom:15px;
      text-align:center;
      transition: top ease 0.8s;
      top: 0;
      position: relative;
      border:1px solid #ddd;
      box-shadow: 2px 4px 3px 4px #f6f6f6;

    }
    .itemHover > span {
      font-size:14px;
       padding:10px;
     }
    .itemHover :hover {
      background-color:#0b68d4;
      cursor:pointer;
      top: -4px;
      background-color:#1d8df0;
      color:#ffffff;

    }
    
    `
  }</style>
</>
    );
};



export default Feature;