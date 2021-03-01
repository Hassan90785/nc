import React from "react";
import {Link} from "react-router-dom";
import socialShare from "./socialShare.module.css";



const SocialShare = () => {
  return( 

<div className={socialShare.iconbar}>    
<a href="https://twitter.com/noor_capital" className={socialShare.twitter} target="_blank"><i class="fa fa-twitter"></i></a> 
<a href="https://www.facebook.com/noorcapitaluae" className={socialShare.facebook} target="_blank"><i class="fa fa-facebook"></i></a> 
<a href="https://www.instagram.com/noorcapital/" className={socialShare.instagram} target="_blank"><i class="fa fa-instagram"></i></a> 
<a href="https://www.linkedin.com/company/noorcapitaluae/" className={socialShare.linkedin} target="_blank"><i class="fa fa-linkedin"></i></a>
<a href="https://www.youtube.com/NoorCapitaluae" className={socialShare.youtube} target="_blank"><i class="fa fa-youtube"></i></a> 
</div>
    )
  
  };
  
  export default SocialShare;