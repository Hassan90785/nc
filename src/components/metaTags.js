import React from "react";
import {Helmet} from "react-helmet";
 

    const PageseMetaTags = (props) => {
        return (
        
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta name="keywords" content="" />
            </Helmet>
        
   );
};

export default PageseMetaTags;