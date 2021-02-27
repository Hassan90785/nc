import React from 'react';
import img1 from '../../assets/images/slides/04.png'
import './mainPage.css'
const MainPage = () => {

    const features = [
        {details: "eiit in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
        {details: "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
        {details: "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
        {details: "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
        {details: "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
        {details: "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
        {details: "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
    ]

    return (
        <>
             <div className="container-fluid px-0">
         <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">Why Noor Capital?</h1>
            <p className="lead">Noor Capital is a Private Joint Stock Company, established in 2005, registered with the Abu Dhabi Department of Economic Development. Being duly authorized by the Central Bank of the UAE and the Securities and Commodities Authority (SCA), we carry out our activities related to investment management, financial advisory, and online trading in a secured environment.</p>
          </div>
        </div>
         <div className="row ">
          <div className="col-md-12">
            <h1 className="text-center">Services</h1>
          </div>
         </div>
         <div className="row mb-3 px-3">
          <div className="col-md-3">
           <div className="card serviceCards shadow-sm">
               <div className="card-header-blue py-2 pl-2">
                   <h1 className="card-heading">Global Financial Advisory</h1>
                </div>
              <div className="card-body">
                <p className="card-text">With our focus being UAE and KSA market, we have successfully widened our advisory wings to other MENA regions, making us the most trusted financial companies in the Gulf.</p>
                <a href="#" className="card-link">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
           <div className="card serviceCards shadow-sm">
              <div className="card-header-orange py-2 pl-2">
                   <h1 className="card-heading">Asset Management</h1>
                </div>
              <div className="card-body">
                <p className="card-text">We provide a seamless asset management solution to institutions, high net worth individuals, and retail investors through direct and third-party channels.</p>
                <a href="#" className="card-link">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
           <div className="card serviceCards shadow-sm">
            <div className="card-header-grey py-2 pl-2">
                   <h1 className="card-heading">Investment</h1>
            </div>
              <div className="card-body">
                <p className="card-text">Offers exclusive investment opportunities to its regional investors and helps them create and manage their investments safely and seamlessly.</p>
                <a href="#" className="card-link">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
           <div className="card serviceCards shadow-sm">
           <div className="card-header-blue py-2 pl-2">
                   <h1 className="card-heading">Fund Administration</h1>
            </div>
              <div className="card-body">
                <p className="card-text">Providing a solution to shareholder issues, registration, and more with our fund accounting and registrar/transfer agent activities.</p>
                <a href="#" className="card-link">Learn More</a>
              </div>
            </div>
          </div>
         </div>


         <div className="row mt-3 pl-3">
          <div className="col-md-12">
            <h1 className="text-center">PLATFORMS</h1>
          </div>
         </div>
         <div className="row ml-3">
          <div className="col-md-12">
                    <h3 className="">Trading Platforms</h3>
                    <p className="">Innovative, user-friendly and robust trading platforms for your every needs</p>
          </div>
         </div>
         <div className="row mb-3 ml-1">
          <div className="col-md-4">
             <div className="conatiner">
                <div className="wrap">
                    <div className="box one">
                        <h1>Forex Trading</h1>
                        <div className="poster1 p1">
                            <a href="#"><i className="fab fa-app-store"></i></a>
                        </div>
                        <div className="poster2 p1">
                            <a href="#"><i className="fab fa-google-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>

          </div>
          <div className="col-md-4">
              <div className="conatiner">
                <div className="wrap">
                    <div className="box one">
                        <h1>Stock Trading</h1>
                        <div className="poster1 p1">
                            <a href="#"><i className="fab fa-app-store"></i></a>
                        </div>
                        <div className="poster2 p1">
                            <a href="#"><i className="fab fa-google-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-4">
              <div className="conatiner">
                <div className="wrap">
                    <div className="box one">
                        <h1>Physical Trading</h1>
                        <div className="poster1 p1">
                            <a href="#"><i className="fab fa-app-store"></i></a>
                        </div>
                        <div className="poster2 p1">
                            <a href="#"><i className="fab fa-google-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
         </div>
     </div>
</>
    );
};


export default MainPage;
