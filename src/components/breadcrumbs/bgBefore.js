import React from "react";
import {Breadcrumb} from 'antd';
import style from './breadcrumbs.module.css';
import globalstyle from '../../style.module.css';
import {Link} from 'react-router-dom';


const BgBefore = () => {
    return (
        <div className={style.breadcrumbBgImage}>
            <img className={style.breadcrumbImg}
                 src={'https://dummyimage.com/1600x300/030323/fff&text=\''}/>
            <div className={globalstyle.container}>
                <p className={globalstyle.pageMainHeading}>
                    page title
                </p>
            </div>
        </div>
    )

};

export default BgBefore;