import React from "react";
import { Layout, Row, Col, Divider, Typography } from 'antd';
import globalstyle from '../../style.module.css';
import PageseMetaTags from "../metaTags";
import BgBefore from "../breadcrumbs/bgBefore";
import BreadcrumbMenu from "../breadcrumbs/breadcrumbs";
import RequestGtnLiveForm from "../forms/requestGtnLive";

const style = {padding: '50px 0' };
const { Title } = Typography;

const {Header, Content, Sider} = Layout;

const GTN_OpenLiveAccount = () => {
  return( <div>
            <PageseMetaTags 
            title="Title"
            description="description"
            />
        <BgBefore />
        <BreadcrumbMenu />

    <div className={globalstyle.container}>
        <Row class='mx-auto' span={24} justify="center" >
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{textAlign:'justify', padding: '0px 30px 0px 0px', fontSize: '17px'}}>
                    <Title level={4}>GTN Platform</Title>
                        <p>
                        Change the way you trade and take charge of your stocks. Join Noor Capital Stocks Trading Platform (GTN), the most advanced and robust platform built with attention to detail to make your trading quick and easy.
                        </p>
                        <p>
                        Now you can trade from anywhere in the world at a click of your fingertip. With our highly user-friendly and accessible platform, you can stay updated with the latest trends, news, alerts, and advice to keep you ahead in your trading.
                        </p>
                        <p>
                        Whether you are a new or a pro trader, our platform is for everyone, making Noor Capital Stocks Trading Platform (GTN) the most preferred platform globally. 100% secured, this platform is available on the web, and mobile.
                        </p>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <RequestGtnLiveForm/>
                    </Col>
        </Row>

        <Divider orientation="left"><Title level={4}>GTN Features</Title></Divider>






        <Row>
            <Col span={24} className="gutter-row">

            <div style={style}>
      <div>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '24px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#C00000'}}>Slider/Tagline</span></strong></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Escalate Your Trading Experience To The Next Level With The World's Most Advanced And Robust Trading Platform</span></strong></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Join Noor Capital Stocks Trading Platform (GTN) And Take Control of Your Trading – NOW</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Sign-Up For Live Account</span></strong></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '24px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#C00000'}}>Overview</span></strong></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Change the way you trade and take charge of your stocks. Join Noor Capital Stocks Trading Platform (GTN), the most advanced and robust platform built with attention to detail to make your trading quick and easy.</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Now you can trade from anywhere in the world at a click of your fingertip. With our highly user-friendly and accessible platform, you can stay updated with the latest trends, news, alerts, and advice to keep you ahead in your trading.</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Whether you are a new or a pro trader, our platform is for everyone, making Noor Capital Stocks Trading Platform (GTN) the most preferred platform globally. 100% secured, this platform is available on the web, and mobile.</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '24px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#C00000'}}>Features</span></strong></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>When You Sign-Up, You Can:</span></strong></p>
        <ul style={{listStyleType: 'undefined', marginLeft: '26px'}}>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Start trading instantly</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Get access to 60k+ stocks.</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Get instant access to GCC, Europe, and the US market.</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Trade on well knows companies (Facebook, Microsoft, Tesla, etc.)</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Buy, sell, cancel, and amend orders at a click.</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Receive real-time data, charts, reports, and announcements</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Choose your preferred language (English/Arabic)</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Add and track your favorite stocks in the smart watch list.</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Manage your account balance and buying limits with an account summary</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Manage multiple portfolios</span></li>
          <li><span style={{lineHeight: '150%', fontSize: '19px'}}>Experience the most secure and user-friendly trading platform around the world.</span></li>
        </ul>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '24px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#C00000'}}>Call To Action</span></strong></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A', fontWeight: 'normal'}}>Start Your Journey As A Web Trader With Noor Capital Stocks Trading Platform (GTN) - NOW!!</span></strong></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Sign-Up For Web Trader Account</span></strong></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', textAlign: 'justify'}}><span style={{fontSize: '16px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>&nbsp;</span></p>
      </div>


            <div>
         </div>

 
      </div>


            </Col>
        </Row>

    </div>

  </div>
  )

};

export default GTN_OpenLiveAccount;