
import React from "react";
import { Row, Col } from 'antd';

import globalstyle from '../../style.module.css';

import PageseMetaTags from "../metaTags";
import BgBefore from "../breadcrumbs/bgBefore";
import BreadcrumbMenu from "../breadcrumbs/breadcrumbs";

const style = {padding: '50px 0',alignSelf: 'justify' };

const ContactUs = () => {
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
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '8.0pt', lineHeight: '150%'}}><strong><span style={{fontSize: '24px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#C00000'}}>Slider/Tagline</span></strong></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '8.0pt', lineHeight: '150%', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>We are just a call or a click away - Find the best way to get in touch with us</span></strong></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '8.0pt', lineHeight: '150%'}}><strong><span style={{fontSize: '24px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#C00000'}}>Overview</span></strong></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '8.0pt', lineHeight: '150%', margin: '0in', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>For inquiries related to our products or services:</span></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '0in', lineHeight: '150%', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Call us&nbsp; &nbsp; &nbsp; &nbsp;:</span></strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;04 279 5400</span></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '0in', lineHeight: '150%', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Email us&nbsp; &nbsp;&nbsp;:</span></strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</span><a href="mailto:marketing@noorcapital.ae"><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>marketing@noorcapital.ae</span></a></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '0in', lineHeight: '150%', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '0in', lineHeight: '150%', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>For technical support, please fill the form below, and our representative will revert within 48 hours.</span></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '0in', lineHeight: '150%', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;</span></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '0in', lineHeight: '150%', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Operating Days&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;:</span></strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;Sunday to Thursday</span></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '0in', lineHeight: '150%', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Opening Hours&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:&nbsp;</span></strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>8 am to 7 pm</span></p>
        <p style={{marginRight: '0in', marginLeft: '0in', fontSize: '15px', fontFamily: '"Calibri",sans-serif', marginTop: '0in', marginBottom: '0in', lineHeight: '150%', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>Customer Support&nbsp; &nbsp; &nbsp;:</span></strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif', color: '#0E101A'}}>&nbsp;24 Hours 5 Days&nbsp;</span></p>
      </div>




        </div>


            </Col>
        </Row>

    </div>

  </div>
  )

};

export default ContactUs;