import React from "react";
import {
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    YoutubeOutlined
} from '@ant-design/icons';
import globalstyle from '../../style.module.css';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import './footer.css';

const Footer = () => {
    return (
        <>
            {/* <div className={globalstyle.contaHiner}>
    <div className="footerBar">
      <span>Get in touch with the A Team</span>
    </div>
  </div> */}
            <footer className="site-footer">
                <div className={globalstyle.container}>
                    <div className="row mx-auto text-center">
                        <div className="col-md-4">
                             <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="">C</a></li>
                                <li><a href="">UI Design</a></li>
                                <li><a href="">PHP</a></li>
                                <li><a href="">Java</a></li>
                                <li><a href="">Android</a></li>
                                <li><a href="">Templates</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="">C</a></li>
                                <li><a href="">UI Design</a></li>
                                <li><a href="">PHP</a></li>
                                <li><a href="">Java</a></li>
                                <li><a href="">Android</a></li>
                                <li><a href="">Templates</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Contribute</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-md-12">
                            Follow Us:
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-md-12">

                            <div className="social-buttons">
                                  <a href="#"><i className="fab fa-facebook"></i></a>
                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                  <a href="#"><i className="fab fa-instagram"></i></a>
                                  <a href="#"><i className="fab fa-youtube"></i></a>
                                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                              </div>

                        </div>
                    </div>
                    <hr/>

                    <div className="smallSeperator"></div>
                <div className="row px-auto pt-3">
                    <div className="col-md-12">
                        <p>
                            <strong>Disclaimer</strong> - Contrary to popular belief, Lorem Ipsum is not simply random text. It
                            has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                            more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                            the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                            section 1.10.32.
                        </p>
                    </div>
                </div>
                    <hr/>
                     <div className="smallSeperator"></div>
            <div className="smallSeperator"></div>
            <div className="row mx-auto">
                <div className="col-md-4  p-4">
                     <Link to="/"> <img src={logo} width="150px"/> </Link>
                </div>
                <div className="col-md-6 pt-5"><p>Copyright &copy; 2020 All Rights Reserved</p></div>
            </div>
            </div>
            </footer>



            <style jsx>{
`
                  .disclaimer {
                    font-size: 13px;
                    text-align: justify;
                    background-color: #ffffff;
                    color: #bbb;
                    padding: 20px 0 0px 0px;
                    font-family: 'Montserrat';
                    line-height: 25px;
                  }
                .icon-size{
                font-size: 2.5em;
            }
                  .footerBar {
                    background-color: #1d8df0;
                    padding: 11px;
                    border-radius: 5px;
                    margin-bottom: 15px;
                    text-align: center;
                    transition: top ease 0.8s;
                    top: 0;
                    position: relative;

                  }

                  .footerBar > span {
                    color: #ffffff;
                    font-size: 18px;
                    padding: 10px;
                  }

                  .footerBar :hover {
                    background-color: #0b68d4;
                    cursor: pointer;
                    top: -4px;
                  }

                  .site-footer {
                    background-color: #303236;
                    padding: 45px 0 30px 0;
                    color: #f6f6f6;
                    font-family: 'Montserrat';
                  }

                  .footer-logo-section {

                    display: flex;
                    height: 90%;
                    flex-direction: column;
                    justify-content: space-around;
                  }

                  .site-footer hr {
                    border-top-color: #bbb;
                    opacity: 0.5
                  }

                  .site-footer hr.small {
                    margin: 20px 0
                  }

                  .site-footer h6 {
                    color: #f6f6f6;
                    font-size: 20px;
                    font-weight: 500;
                    // text-transform:uppercase;
                    margin-top: 5px;
                    // letter-spacing:2px
                  }

                  .site-footer a {
                    color: #f6f6f6;
                  }

                  .site-footer a:hover {
                    color: #3366cc;
                    text-decoration: none;
                  }

                  .footer-links {
                    padding-left: 0;
                    list-style: none;
                  }

                  .footer-links li {
                    display: block;
                    margin-top: 7px;
                    font-size: 13px
                  }

                  .footer-links a {
                    color: #f6f6f6
                  }

                  .footer-links a:active, .footer-links a:focus, .footer-links a:hover {
                    color: #1890ff;
                    text-decoration: none;
                  }

                  .footer-links.inline li {
                    display: inline-block
                  }

                  .site-footer .social-icons {
                    margin-top: 10px
                  }

                  .site-footer .social-icons a {
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    margin-left: 7px;
                    margin-right: 0;
                    border-radius: 100%;
                    background-color: #f6f6f6
                  }

                  .copyright-text {
                    margin: 0;
                    text-align: center;
                  }

                  @media (max-width: 991px) {
                    .site-footer [className^=col-] {
                      margin-bottom: 30px
                    }
                  }

                  @media (max-width: 767px) {
                    .site-footer {
                      padding-bottom: 0
                    }

                    .site-footer .copyright-text, .site-footer .social-icons {
                      text-align: center
                    }
                  }

                  .social-icons {
                    margin-bottom: 0;
                    list-style: none;
                    padding: 0;
                    list-style-type: none;
                  }

                  .social-icons li {
                    display: inline-block;
                    margin-bottom: 4px;
                  }

                  .social-icons li.title {
                    margin-right: 15px;
                    text-transform: uppercase;
                    color: #96a2b2;
                    font-weight: 700;
                    font-size: 13px
                  }

                  .social-icons a {
                    background-color: #eceeef;
                    color: #818a91;
                    font-size: 16px;
                    display: inline-block;
                    line-height: 44px;
                    width: 44px;
                    height: 44px;
                    text-align: center;
                    margin-right: 8px;
                    border-radius: 100%;
                    -webkit-transition: all .2s linear;
                    -o-transition: all .2s linear;
                    transition: all .2s linear
                  }

                  .social-icons a:active, .social-icons a:focus, .social-icons a:hover {
                    color: #fff;
                    background-color: #29aafe
                  }

                  .social-icons.size-sm a {
                    line-height: 34px;
                    height: 34px;
                    width: 34px;
                    font-size: 14px
                  }

                  .social-icons a.facebook:hover {
                    background-color: #3b5998
                  }

                  .social-icons a.twitter:hover {
                    background-color: #00aced
                  }

                  .social-icons a.linkedin:hover {
                    background-color: #007bb6
                  }

                  .social-icons a.dribbble:hover {
                    background-color: #ea4c89
                  }

                  @media (max-width: 767px) {
                    .social-icons li.title {
                      display: block;
                      margin-right: 0;
                      font-weight: 600
                    }
                  }
                `
            }</style>
        </>
    );
};

export default Footer;
