import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import "antd/dist/antd.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import OpenFxDemoAccount_page from "./components/pages/openFxDemoAccount_page";

// import Page from "./components/pages/page";
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

// Trading Instruments
import Instruments_Forex from "./components/pages/trading_Instruments_Forex.js";
import Instruments_PreciousMetals from "./components/pages/trading_Instruments_PreciousMetals.js";
import Instruments_Energies from "./components/pages/trading_Instruments_Energies.js";
import Instruments_Indices from "./components/pages/trading_Instruments_Indices.js";
import Instruments_SharesCfds from "./components/pages/trading_Instruments_SharesCfds.js";

// Trading MT4
import Metatrader4 from "./components/pages/trading_Metatrader4.js";
import Metatrader4_OpenLiveAccount from "./components/pages/trading_Metatrader4_OpenLiveAccount.js";
import Metatrader4_OpenDemoAccount from "./components/pages/trading_Metatrader4_OpenDemoAccount.js";
import Metatrader4_MetaTrader4Mobile from "./components/pages/trading_Metatrader4_MetaTrader4Mobile.js";
import Metatrader4_MetaTrader4Desktop from "./components/pages/trading_Metatrader4_MetaTrader4Desktop.js";
import Metatrader4_MetaTrader4Mac from "./components/pages/trading_Metatrader4_MetaTrader4Mac.js";
import Metatrader4_WebTrader from "./components/pages/trading_Metatrader4_WebTrader.js";

// Trading GTN
import GTN from "./components/pages/trading_GTN.js";
import GTN_OpenLiveAccount from "./components/pages/trading_GTN_OpenLiveAccount.js";
import GTN_GTNMobile from "./components/pages/trading_GTN_GTNMobile.js";
import GTN_GTNWebtrader from "./components/pages/trading_GTN_GTNWebtrader.js";

//Trading NoorTreader
import NoorTrader from "./components/pages/trading_NoorTrader.js";
import NoorTrader_OpenLiveAccount from "./components/pages/trading_NoorTrader_OpenLiveAccount.js";
import NoorTrader_OpenDemoAccount from "./components/pages/trading_NoorTrader_OpenDemoAccount.js";
import NoorTrader_NoorTraderMobile from "./components/pages/trading_NoorTrader_NoorTraderMobile.js";
import NoorTrader_Webtrader from "./components/pages/trading_NoorTrader_Webtrader.js";

//Trading Accounts
import Accounts_AccountFunding from "./components/pages/trading_Accounts_AccountFunding.js";
import Accounts_TradingConditions from "./components/pages/trading_Accounts_TradingConditions.js";
import Accounts_AccountForms from "./components/pages/trading_Accounts_AccountForms.js";


// Partnership
import Institutional_WhiteLabelSolutions from "./components/pages/partnership_Institutional_WhiteLabelSolutions.js";
import Institutional_InstitutionalClients from "./components/pages/partnership_Institutional_InstitutionalClients.js";
import Institutional_AssetManagers from "./components/pages/partnership_Institutional_AssetManagers.js";
import IBProgram_Ib from "./components/pages/partnership_IBProgram_Ib.js";

// Noor Acadmey
import NoorAcademy from "./components/pages/education_NoorAcademy.js";


// Trading Tools - Noor Trends
import NoorTrends_OnlineWebinar from "./components/pages/tradingTools_NoorTrends_OnlineWebinar.js";
import NoorTrends_MarketUpdate from "./components/pages/tradingTools_NoorTrends_MarketUpdate.js";
import NoorTrends_TechnicalAnalysis from "./components/pages/tradingTools_NoorTrends_TechnicalAnalysis.js";
import NoorTrends_EconomicReport from "./components/pages/tradingTools_NoorTrends_EconomicReport.js";
import NoorTrends_DailyBroadCasting from "./components/pages/tradingTools_NoorTrends_DailyBroadCasting.js";
import Tools_VideoTutorials from "./components/pages/tradingTools_Tools_VideoTutorials.js";

// Trading Tools - Tools
import Tools_EconomicCalendar from "./components/pages/tradingTools_Tools_EconomicCalendar.js";
import Tools_TradingSignals from "./components/pages/tradingTools_Tools_TradingSignals.js";
import Tools_TradersGlossary from "./components/pages/tradingTools_Tools_TradersGlossary.js";
import Tools_RiskDisclosure from "./components/pages/tradingTools_Tools_RiskDisclosure.js";

// Support
import Faqs from "./components/pages/support_Faqs.js";
import TechnicalSupport from "./components/pages/support_TechnicalSupport.js";
import CallBackRequest from "./components/pages/support_CallBackRequest.js";

//Website
import TermsandConditions from "./components/pages/website_TermsandConditions.js";
import PrivacyPolicy from "./components/pages/website_PrivacyPolicy.js";
import CookiesPolicy from "./components/pages/website_CookiesPolicy.js";
import FraudWarning from "./components/pages/website_FraudWarning.js";
import SiteMap from "./components/pages/website_SiteMap.js";
import Page404 from "./components/pages/website_404.js";


function App() {
    return (
        <div>
      <Router>
    
    {/* <Loading /> */}
          <Header/>


        <Route path="/account/fxDemo" component={OpenFxDemoAccount_page}/>

        <Route exact path="/" component={Home}/>

          {/* About */}
          <Route path="/about/about-us" component={AboutUs}/>
        <Route path="/about/chairman-message" component={ChairmanMessage}/>
        <Route path="/about/management-team" component={ManagementTeam}/>
        <Route path="/about/board-members" component={BoardMembers}/>
        <Route path="/about/license-regulations" component={LicenseAndRegulations}/>
        <Route path="/about/anti-money-laundering-policy" component={AntiMoneyLaunderingPolicy}/>
        <Route path="/about/why-noor-capital" component={WhyNoorCapital}/>
        <Route path="/about/contact-us" component={ContactUs}/>
        <Route path="/about/careers" component={Careers}/>

          {/* Services */}
          <Route path="/services/global-financial-advisory" component={GlobalFinancialAdvisory}/>
        <Route path="/services/asset-management" component={AssetManagement}/>
        <Route path="/services/investment" component={Investment}/>
        <Route path="/services/funds-administration" component={FundsAdministration}/>

          {/* Trading Instruments */}
          <Route path="/trading/instruments/forex" component={Instruments_Forex}/>
        <Route path="/trading/instruments/precious-metals" component={Instruments_PreciousMetals}/>
        <Route path="/trading/instruments/energies" component={Instruments_Energies}/>
        <Route path="/trading/instruments/indices" component={Instruments_Indices}/>
        <Route path="/trading/instruments/shares-cfds" component={Instruments_SharesCfds}/>

          {/* Trading MT4 */}
          <Route path="/trading-platforms/metatrader4-platform" component={Metatrader4}/>
        <Route path="/trading-platforms/mt4-open-forex-live" component={Metatrader4_OpenLiveAccount}/>
        <Route path="/trading-platforms/mt4-open-forex-demo" component={Metatrader4_OpenDemoAccount}/>
        <Route path="/trading-platforms/metatrader4/mt4-mobile" component={Metatrader4_MetaTrader4Mobile}/>
        <Route path="/trading-platforms/metatrader4/mt4-desktop" component={Metatrader4_MetaTrader4Desktop}/>
        <Route path="/trading-platforms/metatrader4/mt4-mac" component={Metatrader4_MetaTrader4Mac}/>
        <Route path="/trading-platforms/metatrader4/mt4-web-trader" component={Metatrader4_WebTrader}/>

          {/* Trading GTN */}
          <Route path="/stocks-trading-platforms/gtn" component={GTN}/>
        <Route path="/stocks-trading-platforms/open-gtn-live" component={GTN_OpenLiveAccount}/>
        <Route path="/stocks-trading-platforms/gtn-mobile" component={GTN_GTNMobile}/>
        <Route path="/stocks-trading-platforms/gtn-web" component={GTN_GTNWebtrader}/>

          {/* Trading NoorTreader*/}
          <Route path="/physical-trading-platforms/noor-trader" component={NoorTrader}/>
        <Route path="/physical-trading-platforms/open-noor-trader-live" component={NoorTrader_OpenLiveAccount}/>
        <Route path="/physical-trading-platforms/open-noor-trader-demo" component={NoorTrader_OpenDemoAccount}/>
        <Route path="/physical-trading-platforms/noor-trader-mobile" component={NoorTrader_NoorTraderMobile}/>
        <Route path="/physical-trading-platforms/noor-trader-web" component={NoorTrader_Webtrader}/>

          {/* Trading Accounts*/}
          <Route path="/trading/accounts/account-funding" component={Accounts_AccountFunding}/>
        <Route path="/trading/accounts/trading-conditions" component={Accounts_TradingConditions}/>
        <Route path="/trading/accounts/account-forms" component={Accounts_AccountForms}/>

          {/* Partnership */}
          <Route path="/partnership/white-label-solutions" component={Institutional_WhiteLabelSolutions}/>
        <Route path="/partnership/institutional-clients" component={Institutional_InstitutionalClients}/>
        <Route path="/partnership/asset-managers" component={Institutional_AssetManagers}/>
        <Route path="/partnership/ib-program" component={IBProgram_Ib}/>

          {/* Noor Acadmey */}
          <Route path="/education/noor-academy" component={NoorAcademy}/>

          {/* Trading Tools - Noor Trends */}
          <Route path="/trading-tools/noor-trends-online-webinar" component={NoorTrends_OnlineWebinar}/>
        <Route path="/trading-tools/noor-trends-market-update" component={NoorTrends_MarketUpdate}/>
        <Route path="/trading-tools/noor-trends-technical-analysis" component={NoorTrends_TechnicalAnalysis}/>
        <Route path="/trading-tools/noor-trends-economic-reports" component={NoorTrends_EconomicReport}/>
        <Route path="/trading-tools/noor-trends-daily-broadcasting" component={NoorTrends_DailyBroadCasting}/>
          {/* Trading Tools - Tools */}
          <Route path="/trading-tools/video-tutorials" component={Tools_VideoTutorials}/>
        <Route path="/trading-tools/economic-calendar" component={Tools_EconomicCalendar}/>
        <Route path="/trading-tools/trading-signals" component={Tools_TradingSignals}/>
        <Route path="/trading-tools/traders-glossary" component={Tools_TradersGlossary}/>
        <Route path="/trading-tools/risk-disclosure" component={Tools_RiskDisclosure}/>

          {/* Website  */}
          <Route path="/terms-conditions" component={TermsandConditions}/>
        <Route path="/privacy-policy" component={PrivacyPolicy}/>
        <Route path="/cookies-policy" component={CookiesPolicy}/>
        <Route path="/fraud-warning" component={FraudWarning}/>
        <Route path="/site-map" component={SiteMap}/>
        <Route path="/404" component={Page404}/>

          {/* Support */}
          <Route path="/support/faqs" component={Faqs}/>
        <Route path="/support/technical-support" component={TechnicalSupport}/>
        <Route path="/support/call-back-request" component={CallBackRequest}/>



        <Footer/>
      </Router>
    </div>
    );
}

export default App;
