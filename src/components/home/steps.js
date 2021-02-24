import React from 'react';

const Steps = (props) => {
return (
<>
 <div className="itemHover">
    <span>{props.item.details} </span>
  </div>
 


<style jsx>{
    `
    .itemHover {
      padding: 25px;
      border-radius:5px;
      margin-bottom:15px;
      text-align:center;
       top: 0;
      position: relative;
      border:1px solid #ddd;
      box-shadow: 2px 4px 3px 4px #f6f6f6;
      margin:15px

    }
    .itemHover > span {
      font-size:14px;
       padding:10px;
     }
    .itemHover :hover {
      background-color:#0b68d4;
      cursor:pointer;
       background-color:#1d8df0;
      color:#ffffff;

    }
    
    `
  }</style>
</>
    );
};



export default Steps;