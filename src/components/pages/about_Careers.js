
import React from "react";
import { Row, Col } from 'antd';

import globalstyle from '../../style.module.css';

import PageseMetaTags from "../metaTags";
import BgBefore from "../breadcrumbs/bgBefore";
import BreadcrumbMenu from "../breadcrumbs/breadcrumbs";

const style = {padding: '50px 0',alignSelf: 'justify' };

const Careers = () => {
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
        <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>The massive success of Noor Capital is a result of our highly certified, experienced, and hardworking employees who work tirelessly for the overall development of the company.</span></p>
        <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>&nbsp;</span></p>
        <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>When you join our diverse family, you dive into the world of possibilities and opportunities that shape your leadership skills and help your professional growth.</span></p>
        <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>&nbsp;</span></p>
        <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>At Noor Capital, we are always on the lookout for self-driven, motivated, and eager individuals who are ready to escalate their careers with us. If you are a passionate, smart worker and determined person that accepts all the challenges with a smile, we are sure you would be an excellent addition to the company.</span></p>
        <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify'}}><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>&nbsp;</span></p>
        <p style={{marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify'}}><strong><span style={{fontSize: '19px', lineHeight: '150%', fontFamily: '"Arial",sans-serif'}}>Submit Your CV</span></strong></p>
      </div>


        </div>


            </Col>
        </Row>

    </div>

  </div>
  )

};

export default Careers;