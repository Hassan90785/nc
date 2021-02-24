import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Row, Col} from 'antd';
import globalstyle from '../../style.module.css';
import {navItems} from '../../utilities/mainData/menu';

// import { MailOutlined, AppstoreOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons';

import logo from '../../assets/images/logo.png';
import RightCircleOutlined from "@ant-design/icons/es/icons/RightCircleOutlined";

const {SubMenu} = Menu;


const LogoBar = () => {

    const [showMegaMenu, setshowMegaMenu] = useState(false);
    const [menu, setMenu] = useState({});
    const [key, setKey] = useState({});

    return (
        <>

            <div className={globalstyle.logoBar}>
                <div className={globalstyle.container}>
                    <Row className={globalstyle.flexCenter}>
                        <Col span={4}>
                            <Link to="/"> <img src={logo} width="150px"/> </Link>
                        </Col>
                        <Col span={20}>
                            <Menu className={globalstyle.menuContainer} onClick={() => (setMenu({key: "mail"}))}
                                  selectedKeys={[key]} mode="horizontal">
                                <Menu.Item>
                                </Menu.Item>
                                {
                                    navItems.map((navItem) => (
                                        <SubMenu key={navItem.id} title={<p className={globalstyle.navItemText}>{navItem.name}</p>}>
                                            {   navItem.subMenu.length !== 0 ?
                                            <div className="megaMenu w-100">
                                                <div className={globalstyle.container}>
                                                    <div className="row">
                                                        {/*<div className="col-xs-12 col-md-12">*/}
                                                        {/*    <h6 className={globalstyle.menuMainHeading}>{navItem.mainHeading}</h6>*/}
                                                        {/*</div>*/}
                                                        {

                                                            navItem.subMenu.map((subNavItem) => (
                                                                <div key={subNavItem.id}
                                                                     className="col-xs-6 col-md-2 col-lg-2 col-xl-2">
                                                                    <h6 className={globalstyle.submenuHeading}> {subNavItem.name} </h6>
                                                                    <ul className="subMenu">
                                                                        {
                                                                            subNavItem.subMenu.map((subSubNavitem) => (
                                                                                <li className={globalstyle.submenuItem}
                                                                                    key={subSubNavitem.id}>
                                                                                    <Link
                                                                                        to={subSubNavitem.route}>
                                                                                        <RightCircleOutlined/>
                                                                                        <h4>{subSubNavitem.name}</h4>
                                                                                    </Link>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            ))
                                                        }

                                                    </div>
                                                </div>
                                            </div>: "" }
                                        </SubMenu>
                                    ))
                                }
                            </Menu>

                        </Col>
                    </Row>

                </div>

            </div>


            <style jsx>{
                `
    .megaMenu {
      margin-top:1px;
      padding: 35px 0 50px 0;
      width:1677px;
      margin-bottom:5px;
      top: 0;
      left:0px;
      z-index:99999;
      color:#fff;
      background-color:#E0F1FF;
      box-shadow: 2px 4px 3px 4px #eee;
    }


    .subMenu > li {
      list-style: none;
      margin:40px 0 0 0
    }
    a {
      color:#fff;
      text-decoration: none;
      font-size:12px
    }
    ul {
      padding: 0;
      list-style-type: none;
     }
  h6 {
   color:  #fff
  }
    
    `
            }</style>
        </>
    );
};

export default LogoBar;
