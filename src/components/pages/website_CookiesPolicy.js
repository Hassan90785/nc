import React from "react";
import { Row, Col } from 'antd';

import globalstyle from '../../style.module.css';

import PageseMetaTags from "../metaTags";
import BgBefore from "../breadcrumbs/bgBefore";
import BreadcrumbMenu from "../breadcrumbs/breadcrumbs";

const style = {padding: '50px 0' };

const CookiesPolicy = () => {
  return( <div>
            <PageseMetaTags 
            title="Title"
            description="description"
            />
        <BgBefore />
        <BreadcrumbMenu />

    <div className={globalstyle.container}>

        <Row>
            <Col span={24} className="gutter-row">

            <div style={style}>

      <div>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#C00000'}}>Cookies</span></strong></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Noor Capital website uses "Cookies" and other similar technologies sent through your browser to track and enhance our visitor's experience on our website. The cookies are strictly used for marketing and analysis purposes only. It allows us to collect some information about your browser type, location, IP address, and more cookies enabled by enabling cookies. Although most browsers are set to accept the cookies, you can set your browser to refuse the cookies if you prefer. Please note that not accepting cookies might affect your experience with the website.</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>ACCEPT COOKIES</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '150%', margin: '0cm', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>REJECT COOKIES</span></p>
        <p style={{marginRight: '0cm', marginLeft: '0cm', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0cm', marginBottom: '8.0pt', lineHeight: '107%'}}>&nbsp;</p>
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

export default CookiesPolicy;