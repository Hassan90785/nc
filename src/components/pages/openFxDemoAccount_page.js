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

            <div className={globalstyle.container}>
                <Row>
                    <Col span={24}>
                        <h6 className={globalstyle.pageMainHeader}>Page Title</h6>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Sider className={globalstyle.sidebarContainer}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                // defaultOpenKeys={['sub1']}
                                className={globalstyle.sidebarMenu}
                            >
                                <SubMenu key="sub1" className={globalstyle.sidebarMenuItem}
                                         title={<SidebarMenuHeading title={'menu 1'}/>}  >
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" className={globalstyle.sidebarMenuItem}
                                         title={<SidebarMenuHeading title={'menu 2'}/>}  >
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" className={globalstyle.sidebarMenuItem}
                                         title={<SidebarMenuHeading title={'menu 3'}/>}  >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                    </Col>
                    <Col span={12}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Col md={12} xs={12}>
                                FORM
                                <OpenFxDemoAccount/>
                            </Col>
                        </Content>
                    </Col>
                </Row>
            </div>
        </div>
    )


};


export default OpenFxDemoAccount_page;


