import React from "react";
import {useLocation} from "react-router-dom";
import UpHeader from "./upHeader";
import LogoBar from "./logoBar";

const Header = () => {
    return (
        <>
            <UpHeader/>
            <LogoBar/>
    </>
    );
};


export default Header;
