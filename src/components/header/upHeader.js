import React from "react";
import {Link} from "react-router-dom";
import headerStyle from "./header.module.css";
import globalStyle from "../../style.module.css";
import {Row, Col, Button} from "antd";
import {
    UserOutlined,
    UserSwitchOutlined,
    CreditCardOutlined,
    FastBackwardOutlined
} from "@ant-design/icons";

import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const UpHeader = () => {
    return (
        <div className={headerStyle.upHeader}>
            <div className={globalStyle.container}>
                <Row gutter={[2, 4]} justify="center" align="middle">
                    <Col md={7} xs={24} className={headerStyle.upHeaderSpan}>
            <span>
            <a href="https://mynoor.noorcap.ae/en/traders/login" target="_blank"><i class="fa fa-user-alt" style={{ fontSize: "13px",color: "#1a86da", paddingRight:"5px",
                  }} ></i>
            <span style={{ fontSize: "13px",color: "#1a86da"}}>MyNoor</span>
            </a> 
                
            </span>
                        <span>
                        <a href="https://agent.noorcap.ae/en/agent/login" target="_blank"><i class="fa fa-user-cog" style={{ fontSize: "13px",color: "#1a86da", paddingRight:"5px",
                  }} ></i>
            <span style={{ fontSize: "13px",color: "#1a86da"}}>Agent Area</span>
            </a> 
                           
            </span>
          
                        <span>
                        <Link to="/trading/accounts/account-funding"><i class="fa fa-credit-card" style={{ fontSize: "13px",color: "#1a86da", paddingRight:"5px",
                  }} ></i>
            <span style={{ fontSize: "13px",color: "#1a86da"}}>Fund Account</span>
            </Link> 
                           
            </span>
                            
                    </Col>
                    <Col md={5} xs={24} className={headerStyle.upHeaderSpan}>
                    <Link to="/physical-trading-platforms/open-noor-trader-demo"> <span style={{ fontWeight: "bold",color: "#ffffff", paddingRight:"13px"}}>NoorTrader Demo </span></Link>
                    <Link to="/stocks-trading-platforms/open-gtn-live"><span style={{ fontWeight: "bold",color: "#ffffff"}}>GTN Account</span></Link>
                    </Col>

                    <Col md={4} xs={24}></Col>
                    <Col md={4} xs={12}>
                        <Button
                            type="primary"
                            size="default"
                            block
                            style={{
                                backgroundColor: "#0f75bc",
                                color: "#fff",
                                border: "0",
                                fontWeight: "bold",
                            }}
                        >
                            Open Fx Demo
                        </Button>{" "}
                    </Col>
                    <Col md={4} xs={12}>
                        <Button
                            type="primary"
                            size="default"
                            block
                            style={{
                                backgroundColor: "#31A629",
                                color: "#fff",
                                border: "0",
                                fontWeight: "bold",
                            }}
                        >
                            Open Fx Live
                        </Button>{" "}
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default UpHeader;
