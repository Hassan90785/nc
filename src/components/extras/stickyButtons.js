import React from "react";
import {Link} from "react-router-dom";
import stickyButtons from "./stickyButtons.module.css";



const StickyButtons = () => {
  return( 

<div className={stickyButtons.stickyButtons}>
    
<Link to="#" className={stickyButtons.support}><i class="fa fa-question"></i></Link> 
<Link to="#" className={stickyButtons.call}><i class="fa fa-phone"></i></Link> 
<Link to="#" className={stickyButtons.blog}><i class="fa fa-blog"></i></Link> 
</div>
    )
  
  };
  
  export default StickyButtons;