import React from "react";
import { Row, Col } from 'antd';

import globalstyle from '../../style.module.css';

import PageseMetaTags from "../metaTags";
import BgBefore from "../breadcrumbs/bgBefore";
import BreadcrumbMenu from "../breadcrumbs/breadcrumbs";

const style = {padding: '50px 0' };

const CallBackRequest = () => {
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
        <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Do You Have A Question or inquiries related to Noor Capital's products or services?</span></strong></p>
        <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Please fill up the Call Back Form Below, And One of our agents will get in touch within 48 hours.</span></strong></p>
        <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '8.0pt', marginLeft: '0cm', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>&nbsp;</span></p>
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

export default CallBackRequest;