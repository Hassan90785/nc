import React from "react";
import BgBefore from "../breadcrumbs/bgBefore";
import BreadcrumbMenu from "../breadcrumbs/breadcrumbs";
import OpenFxDemoAccount from "../forms/openFxDemoAccount";
import {Layout, Menu, Row, Col} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {Helmet} from "react-helmet";
import PageseMetaTags from "../metaTags";
import globalstyle from '../../style.module.css';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const SidebarMenuHeading = (props) => {
    return (
        <p className={globalstyle.sidebarMenuItemHeading}>{props.title}</p>
    )
};


const OpenFxDemoAccount_page = () => {
    return (<div>
            <PageseMetaTags
                title="Open Forex Demo Account"
                description="OKKKKKKKKKKKKKKKKKK"
            />

            <BgBefore />
            <BreadcrumbMenu/>
            <OpenFxDemoAccount/>
        </div>
    )


};


export default OpenFxDemoAccount_page;


