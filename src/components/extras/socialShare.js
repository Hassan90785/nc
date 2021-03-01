import React from "react";
import {Link} from "react-router-dom";
import socialShare from "./socialShare.module.css";



const SocialShare = () => {
  return( 

<div className={socialShare.iconbar}>
    
<Link to="#" className={socialShare.twitter}><i class="fa fa-twitter"></i></Link> 
<Link to="#" className={socialShare.facebook}><i class="fa fa-facebook"></i></Link> 
<Link to="#" className={socialShare.instagram}><i class="fa fa-instagram"></i></Link> 
  <Link to="#" className={socialShare.linkedin}><i class="fa fa-linkedin"></i></Link>
  <Link to="#" className={socialShare.youtube}><i class="fa fa-youtube"></i></Link> 
  
</div>
  
    )
  
  };
  
  export default SocialShare;