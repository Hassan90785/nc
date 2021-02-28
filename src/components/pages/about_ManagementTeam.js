
import React from "react";
import { Row, Col } from 'antd';

import globalstyle from '../../style.module.css';

import PageseMetaTags from "../metaTags";
import BgBefore from "../breadcrumbs/bgBefore";
import BreadcrumbMenu from "../breadcrumbs/breadcrumbs";
import './management.css'

const ManagementTeam = () => {
  return( <div>
            <PageseMetaTags 
            title="Title"
            description="description"
            />
        <BgBefore />
        <BreadcrumbMenu />
    
        <div className="container">
                <section id="team" className="pb-5">
    <div className="container">
        <blockquote className="blockquote font-italic font-weight-bold text-center">
          <p className="mb-0">At Noor Capital, We Believe In One spirit, One team, One win.</p>
          <footer className="blockquote-footer">Noor Capital</footer>
        </blockquote>
        <h6 className="section-tag px-5 h1">Overview</h6>
        <p className="overview px-5">Noor Capital team consists of the industry's most renowned, experienced, and highly certified management team that plays a vital role in creating long-lasting value for the clients and employees with their unmatched leadership.</p>
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip " onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/></p>
                                    <h4 className="card-title">Mohammed Ghosheh</h4>
                                    <h5 className="card-title">Chief Executive Officer </h5>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Mohammed Ghosheh</h4>
                                    <p className="card-text"><strong>Mohammed Ghosheh</strong> is the Chief Executive Officer of Noor Capital, with over 30 years of professional experience in Banking and Investment. He has led some of the significant projects, including The Dubai Quality Award, Segregation of the Corporate and Retail Business, CRM Implementation, and the ISO 9001-2000. Formerly he worked as a Deputy Manager - Business Group at Commercial Bank of Dubai. Mohammed Ghosheh holds an MBA in Finance from Lincoln University, UK, and a Bachelor’s Degree in Business Administration, Banking & Finance from Yarmouk University, Jordan.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip " onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/></p>
                                    <h4 className="card-title">Abdulla Al Suwaidi</h4>
                                    <h5 className="card-title">Executive Director - Strategic Planning and Innovation </h5>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Abdulla Al Suwaidi</h4>
                                    <p className="card-text"><strong>Abdulla Al Suwaidi</strong> is an Executive Director at Noor Capital, with over 20 years of professional experience in the Government and Private sectors. Formerly he held several leadership positions in Abu Dhabi Company for Onshore Petroleum Operations (ADCO), the Abu Dhabi Municipality, and the Roads and Transport Authority (RTA) Dubai. Abdulla Al Suwaidi holds a Bachelor of Science Degree in Engineering Management and a Master's Degree in Total Quality Management.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip " onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/></p>
                                    <h4 className="card-title">Muhammad Al Zoubi </h4>
                                    <h5 className="card-title">General Manager - Global Markets</h5>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Muhammad Al Zoubi </h4>
                                    <p className="card-text"><strong>Muhammad Al Zoubi</strong> is General Manager at Noor Capital with over 17 years of professional experience in finance. Formerly he was the Head of the VIP Department at Mac Sharaf and worked at Emaar Financial Services in Dubai. Muhammad Al Zoubi holds a Telecommunications Engineering Degree from the Jordan University of Science and Technology.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
            <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip " onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/></p>
                                    <h4 className="card-title">Sher Ali </h4>
                                    <h5 className="card-title">Head of Investment Banking</h5>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Sher Ali</h4>
                                    <p className="card-text"><strong>Sher Ali</strong> is the Head of Investment Banking at Noor Capital with over 17 years of tremendous experience in Investment Banking, Financial Institutions, and Structured Finance within the GCC. Formerly he worked as a Head of Debt Capital Markets & Structured Finance and Director in the Structured Finance Division of QINVEST, Qatar. Sher Ali has an MBA in Banking and Finance from Birmingham Business School.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip " onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/></p>
                                    <h4 className="card-title">Adel M. El Hassan</h4>
                                    <h5 className="card-title">Manager, Legal Department & Reporter for the Board of Directors</h5>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Adel M. El Hassan</h4>
                                    <p className="card-text"><strong>Adel M. El Hassan</strong> is Manager at Legal Department & Reporter for the Board of Directors at Noor Capital. He has over 25 years of experience in the Law Industry of the UAE and as a Magistrate, and Advocate, and Legal Advisor globally. Adel M. El Hassan holds a Bachelor’s Degree in Law.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>
            </div>

  </div>
  )

};

export default ManagementTeam;
