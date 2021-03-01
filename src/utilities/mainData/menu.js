export const navItems = [

    /** About */

    {
        id: '101',
        name: 'About',
        mainHeading: 'Trade how you want, when you want',
        icon: 'fa-wrench',
        route: '/about',
        subMenu: [
            {
                id: '110',
                name: '',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '111',
                        name: 'About Us',
                        icon: 'fa-credit-card',
                        route: '/about/about-us',

                    },
                    {
                        id: '112',
                        name: 'Chairman’s Message',
                        icon: 'fa-credit-card',
                        route: '/about/chairman-message',

                    },
                    {
                        id: '113',
                        name: 'Board Members',
                        icon: 'fa-credit-card',
                        route: '/about/board-members',
                    },
                    {
                        id: '114',
                        name: 'Management Team',
                        icon: 'fa-credit-card',
                        route: '/about/management-team',
                    },
                    {
                        id: '115',
                        name: 'License and Regulations',
                        icon: 'fa-credit-card',
                        route: '/about/license-regulations',
                    }
                ]
            },
            {
                id: '120',
                name: '',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '121',
                        name: 'Why Noor Capital',
                        icon: 'fa-credit-card',
                        route: '/about/why-noor-capital',
                    },
                    {
                        id: '122',
                        name: 'Terms and Conditions',
                        icon: 'fa-credit-card',
                        route: '/terms-conditions',
                    },
                    {
                        id: '123',
                        name: 'Anti Money Laundering Policy',
                        icon: 'fa-credit-card',
                        route: '/about/anti-money-laundering-policy',
                    },
                    {
                        id: '124',
                        name: 'Careers',
                        icon: 'fa-credit-card',
                        route: '/about/careers',
                    },
                    {
                        id: '125',
                        name: 'Contact Us',
                        icon: 'fa-credit-card',
                        route: '/about/contact-us',
                    }
                ]
            }

        ]
    },

    /**********************************************************************/
    /** Services */
    {
        id: '201',
        name: 'Services',
        icon: 'fa-wrench',
        route: '/about',
        subMenu: [
            {
                id: '210',
                name: '',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '221',
                        name: 'Global Financial Advisory',
                        icon: 'fa-credit-card',
                        route: '/services/global-financial-advisory',
                    },
                    {
                        id: '211',
                        name: 'Asset Management',
                        icon: 'fa-credit-card',
                        route: '/services/asset-management',
                    },
                    {
                        id: '212',
                        name: 'Investment',
                        icon: 'fa-credit-card',
                        route: '/services/investment',
                    },
                    {
                        id: '213',
                        name: 'Funds Administration',
                        icon: 'fa-credit-card',
                        route: '/services/funds-administration',
                    }
                ]
            },
        ]
    },
    /**********************************************************************/
    /** Trading */
    {
        id: '301',
        name: 'Trading',
        icon: 'fa-wrench',
        route: '/about',
        subMenu: [
            {
                id: '310',
                name: 'Instruments',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '311',
                        name: 'Forex',
                        icon: 'fa-credit-card',
                        route: '/trading/instruments/forex',

                    },
                    {
                        id: '312',
                        name: 'Precious Metals',
                        icon: 'fa-credit-card',
                        route: '/trading/instruments/precious-metals',
                    },
                    {
                        id: '313',
                        name: 'Energies',
                        icon: 'fa-credit-card',
                        route: '/trading/instruments/energies',
                    },
                    {
                        id: '314',
                        name: 'Indices',
                        icon: 'fa-credit-card',
                        route: '/trading/instruments/indices',
                    },
                    {
                        id: '315',
                        name: 'Shares CFDs',
                        icon: 'fa-credit-card',
                        route: '/trading/instruments/shares-cfds',
                    }
                ]
            },
            {
                id: '330',
                name: 'Metatrader 4 Platform',
                icon: 'fa-credit-card',
                route: '/trading-platforms/metatrader4',
                subMenu: [
                    {
                        id: '331',
                        name: 'Open Live Account',
                        icon: 'fa-credit-card',
                        route: '/trading-platforms/mt4-open-forex-live',

                    },
                    {
                        id: '332',
                        name: 'Open Demo Account',
                        icon: 'fa-credit-card',
                        route: '/trading-platforms/mt4-open-forex-demo',
                    },
                    {
                        id: '333',
                        name: 'Metatrader 4 Mobile',
                        icon: 'fa-credit-card',
                        route: '/trading-platforms/metatrader4/mt4-mobile',
                    },
                    {
                        id: '334',
                        name: 'Metatrader 4 Desktop',
                        icon: 'fa-credit-card',
                        route: '/trading-platforms/metatrader4/mt4-desktop',
                    },
                    {
                        id: '335',
                        name: 'Metatrader 4 Mac',
                        icon: 'fa-credit-card',
                        route: '/trading-platforms/metatrader4/mt4-mac',
                    },
                    {
                        id: '336',
                        name: 'Metatrader 4 Webtrader',
                        icon: 'fa-credit-card',
                        route: '/trading-platforms/metatrader4/mt4-web-trader',
                    }
                ]
            },
            {
                id: '340',
                name: 'NoorTrader Platform',
                icon: 'fa-credit-card',
                route: '/physical-trading-platforms',
                subMenu: [
                    {
                        id: '341',
                        name: 'Open Live Account',
                        icon: 'fa-credit-card',
                        route: '/physical-trading-platforms/open-noor-trader-live',

                    },
                    {
                        id: '342',
                        name: 'Open Demo Account',
                        icon: 'fa-credit-card',
                        route: '/physical-trading-platforms/open-noor-trader-demo',
                    },
                    {
                        id: '343',
                        name: 'NoorTrader Mobile',
                        icon: 'fa-credit-card',
                        route: '/physical-trading-platforms/noor-trader-mobile',
                    },
                    {
                        id: '344',
                        name: 'NoorTrader Webtrader',
                        icon: 'fa-credit-card',
                        route: '/physical-trading-platforms/noor-trader-web',
                    }
                ]
            },
            {
                id: '350',
                name: 'Global Stocks (GTN) Platform',
                icon: 'fa-credit-card',
                route: '/stocks-trading-platforms',
                subMenu: [
                    {
                        id: '351',
                        name: 'Open Live Account',
                        icon: 'fa-credit-card',
                        route: '/stocks-trading-platforms/open-gtn-live',

                    },
                    {
                        id: '352',
                        name: 'GTN 4 Mobile',
                        icon: 'fa-credit-card',
                        route: '/stocks-trading-platforms/gtn-mobile',
                    },
                    {
                        id: '353',
                        name: 'GTN Webtrader',
                        icon: 'fa-credit-card',
                        route: '/stocks-trading-platforms/gtn-web',
                    }
                ]
            },
            {
                id: '320',
                name: 'Accounts',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '321',
                        name: 'Account Funding',
                        icon: 'fa-credit-card',
                        route: '/trading/accounts/account-funding',

                    },
                    {
                        id: '322',
                        name: 'Account Opening Forms',
                        icon: 'fa-credit-card',
                        route: '/trading/accounts/account-forms',
                    },
                    {
                        id: '323',
                        name: 'Trading Conditions',
                        icon: 'fa-credit-card',
                        route: '/trading/accounts/trading-conditions',
                    }
                ]
            }
        ]
    },

    /**********************************************************************/
    /** Partnership */
    {
        id: '401',
        name: 'Partnership',
        icon: 'fa-wrench',
        route: '#',
        subMenu: [
            {
                id: '410',
                name: 'Institutional',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '411',
                        name: 'White Label Solutions',
                        icon: 'fa-credit-card',
                        route: '/partnership/white-label-solutions',
                    },
                    {
                        id: '412',
                        name: 'Institutional Clients',
                        icon: 'fa-credit-card',
                        route: '/partnership/institutional-clients',
                    },
                    {
                        id: '413',
                        name: 'Asset Managers (MAM/PAMM)',
                        icon: 'fa-credit-card',
                        route: '/partnership/asset-managers',
                    }
                ]
            },
            {
                id: '420',
                name: 'IB Program',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '431',
                        name: 'IB & Affiliate',
                        icon: 'fa-credit-card',
                        route: '/partnership/ib-program',
                    }
                ]
            }
        ]
    },

    /**********************************************************************/
    /** Media Center  */
    {
        id: '501',
        name: 'Media Center',
        icon: 'fa-wrench',
        route: '#',
        subMenu: [

            {
                id: '510',
                name: '',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '511',
                        name: 'Press Releases',
                        icon: 'fa-credit-card',
                        route: '#',

                    },
                    {
                        id: '512',
                        name: 'Awards',
                        icon: 'fa-credit-card',
                        route: '#',
                    },
                    {
                        id: '513',
                        name: 'Activites',
                        icon: 'fa-credit-card',
                        route: '#',
                    }
                ]
            },

        ]
    },
    /** Noor Acadmey  */
    /**********************************************************************/

    {
        id: '601',
        name: 'Noor Acadmey',
        icon: 'fa-wrench',
        route: '/education/noor-academy',
        subMenu: []
    },

    /** Trading Tools  */
    /**********************************************************************/
    {
        id: '701',
        name: 'Trading Tools',
        icon: 'fa-wrench',
        route: '#',
        subMenu: [
            {
                id: '710',
                name: 'Noor Trends',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '711',
                        name: 'Online Webinar',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/noor-trends-online-webinar',
                    },
                    {
                        id: '712',
                        name: 'Market Update',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/noor-trends-market-update',
                    },
                    {
                        id: '713',
                        name: 'Technical Analysis',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/noor-trends-technical-analysis',
                    },
                    {
                        id: '714',
                        name: 'Economic Report',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/noor-trends-economic-reports',
                    },
                    {
                        id: '715',
                        name: 'Daily Broadcasting',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/noor-trends-daily-broadcasting',
                    }
                ]
            },
            {    
                id: '720',
                name: 'Tools',
                icon: 'fa-credit-card',
                route: '#',
                subMenu: [
                    {
                        id: '721',
                        name: 'Economic Calendar',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/economic-calendar',
                    },
                    {
                        id: '722',
                        name: 'Trading Signals',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/trading-signals',
                    },
                    {
                        id: '723',
                        name: 'Traders Glossary',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/traders-glossary',
                    },
                    {
                        id: '724',
                        name: 'Video Tutorials',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/video-tutorials',
                    },
                    {
                        id: '725',
                        name: 'Risk Disclosure',
                        icon: 'fa-credit-card',
                        route: '/trading-tools/risk-disclosure',
                    }
                ]
            }
        ]
    },

    {
        id: '801',
        name: 'Blog',
        icon: 'fa-wrench',
        route: '#',
        subMenu: []
    }

    /**********************************************************************/

];
