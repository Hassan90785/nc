import React from "react";
import {Breadcrumb} from 'antd';
import style from './breadcrumbs.module.css';
import globalstyle from '../../style.module.css';
import {Link} from 'react-router-dom';


const BreadcrumbMenu = () => {
    const routes = [
        {
            path: '/',
            breadcrumbName: 'Home',
        },
        {
            path: 'account',
            breadcrumbName: 'Account',
        },
        {
            path: 'fxDemo',
            breadcrumbName: 'Fx Demo',
        },
    ];

    const itemRender = (route, params, routes, paths) => {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
            <Link className={style.customBreadcrumbLink} to={paths.join('/')}>{route.breadcrumbName}</Link>
        );
    };

    return (
        <div className={style.breadcrumbBg}>
            <div className={globalstyle.container}>
                <Breadcrumb className={style.customBreadcrumb} itemRender={itemRender} routes={routes}/>
            </div>
        </div>
    )

};

export default BreadcrumbMenu;
