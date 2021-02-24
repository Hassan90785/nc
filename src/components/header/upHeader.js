import React from "react";
import {Link} from "react-router-dom";
import headerStyle from "./header.module.css";
import globalStyle from "../../style.module.css";
import {Row, Col, Button} from "antd";
import {
    UserOutlined,
    UserSwitchOutlined,
    CreditCardOutlined,
} from "@ant-design/icons";

import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const UpHeader = () => {
    return (
        <div className={headerStyle.upHeader}>
            <div className={globalStyle.container}>
                <Row gutter={[2, 4]} justify="center" align="middle">
                    <Col md={7} xs={24} className={headerStyle.upHeaderSpan}>
            <span>
              <UserOutlined
                  style={{
                      fontSize: "16px",
                      color: "#08c",
                      verticalAlign: "1px",
                  }}
              />{" "}
                <b>MyNoor</b>
            </span>
                        <span>
              <UserSwitchOutlined
                  style={{
                      fontSize: "16px",
                      color: "#08c",
                      verticalAlign: "1px",
                  }}
              />{" "}
                            <b>Agent Area</b>
            </span>
                        <span>
              <CreditCardOutlined
                  style={{
                      fontSize: "16px",
                      color: "#08c",
                      verticalAlign: "1px",
                  }}
              />{" "}
                            <b>Fund Account</b>
            </span>
                    </Col>
                    <Col md={5} xs={24} className={headerStyle.upHeaderSpan}>
                        <span>NoorTrader Demo </span>
                        <span>GTN Account</span>
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
