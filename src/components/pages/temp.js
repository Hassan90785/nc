
import React from "react";
import { Row, Col } from 'antd';

import globalstyle from '../../style.module.css';

import PageseMetaTags from "../metaTags";
import BgBefore from "../breadcrumbs/bgBefore";
import BreadcrumbMenu from "../breadcrumbs/breadcrumbs";

const style = {padding: '50px 0',alignSelf: 'justify' };

const Fname = () => {
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




        </div>


            </Col>
        </Row>

    </div>

  </div>
  )

};

export default Fname;