import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Page from "./components/pages/page";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OpenFxDemoAccount_page from "./components/pages/openFxDemoAccount_page";
// About
import AboutUs from "./components/pages/about_AboutUs.js";
import ChairmanMessage from "./components/pages/about_ChairmanMessage.js";
import ManagementTeam from "./components/pages/about_ManagementTeam.js";
import BoardMembers from "./components/pages/about_BoardMembers.js";
import LicenseAndRegulations from "./components/pages/about_LicenseAndRegulations.js";
import AntiMoneyLaunderingPolicy from "./components/pages/about_AntiMoneyLaunderingPolicy.js";
import WhyNoorCapital from "./components/pages/about_WhyNoorCapital.js";
import ContactUs from "./components/pages/about_ContactUs.js";
import Careers from "./components/pages/about_Careers.js";

// Services
import GlobalFinancialAdvisory from "./components/pages/services_AssetManagement.js";
import AssetManagement from "./components/pages/services_AssetManagement.js";
import Investment from "./components/pages/services_Investment.js";
import FundsAdministration from "./components/pages/services_FundsAdministration.js";


function App() {
  return (
    <div>
      <Router>
        <Header />

        <Route path="/account/fxDemo" component={OpenFxDemoAccount_page} />

        <Route exact path="/" component={Home} />
        {/* About */}
        <Route path="/about/about-us" component={AboutUs} />
        <Route path="/about/chairman-message" component={ChairmanMessage} />
        <Route path="/about/management-team" component={ManagementTeam} />
        <Route path="/about/board-members" component={BoardMembers} />
        <Route path="/about/license-regulations" component={LicenseAndRegulations} />
        <Route path="/about/anti-money-laundering-policy" component={AntiMoneyLaunderingPolicy} />
        <Route path="/about/why-noor-capital" component={WhyNoorCapital} />
        <Route path="/about/contact-us" component={ContactUs} />
        <Route path="/about/careers" component={Careers} />
        {/* Services */}
        <Route path="/services/global-financial-advisory" component={GlobalFinancialAdvisory} />
        <Route path="/services/asset-management" component={AssetManagement} />
        <Route path="/services/investment" component={Investment} />
        <Route path="/services/funds-administration" component={FundsAdministration} />
        {/* Trading */}

        {/* Partnership */}


        {/* Noor Acadmey */}

        {/* Noor Acadmey */}



        <Footer />
      </Router>
    </div>
  );
}

export default App;
