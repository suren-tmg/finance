import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    let date = new Date();
    let currentYear = date.getFullYear()
    return <footer className="site-footer p-1">
        <div className="container pt-5 pb-5">
            <div id="footer-widgets">
                <div className="row">
                    <div className="col-md-4 col-sm-6 widget-container">
                        <div id="text-2" className="widget widget_text">
                            <h3 className="footer-widget-title"><span>About Us</span></h3>
                            <span className="underline left" />
                            <div className="textwidget">
                                झापा जिल्लाको पश्चिम दक्षिणको ग्रामिण भेगमा स्थित साविक महारानीझोडा गा.वि.स. हाल गौरादह नगरपालिका ४ र ५ मा २०५५ साल कार्तिक १०
                                मा साना किसान विकास आयोजनाको स्थापना गरी साना किसान परिवारका महिलाहरु लाई समुहमा आवद्ध गराई प्रारम्भ गरेको कार्यक्रम समय र विकासक्रम
                                तथा सदस्यहरुको चाहाना अनुसार २०५९ पौष १७ मा डिभिजन सहकारी कार्यलयमा विधिवत् रुपमा साना किसान सहकारी संस्था लि. दर्ता गरि उक्त
                                आयोजनाको सम्पूर्ण कारोवार २०६० वैशाख ३ बाट हस्तान्तरण गरि महिलाहरुकै नेत्तृत्वमा संचालित छ ।
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 widget-container">
                        <div id="nav_menu-2" className="widget widget_nav_menu">
                            <h3 className="footer-widget-title"><span>Quick Links</span></h3>
                            <span className="underline left" />
                            <div className="menu-quick-links-container">
                                <ul id="menu-quick-links" className="menu">
                                    <li><Link style={{ textDecoration: 'none' }} to=''>गृहपृष्ठ</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/हाम्रोबारे'>हाम्रोबारे</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/हाम्रो कामहरु'>हाम्रो कामहरु</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/समाचार कक्ष'>समाचार कक्ष</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/घोषणाहरु'>घोषणाहरु</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/डाउनलोड'>डाउनलोड</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/दाता साझेदार'>दाता साझेदार</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 widget-container">
                        <div id="nav_menu-2" className="widget widget_nav_menu">
                            <h3 className="footer-widget-title"><span>Contact Us</span></h3>
                            <span className="underline left" />
                            <address>
                                <div className="info">
                                    <i className="fa fa-location-arrow" />
                                    <span>गौरादह-5,झापा ,नेपाल</span>
                                </div>
                                <div className="info">
                                    <i className="fa fa-envelope" />
                                    <span>info@maharanijhoda.com</span>
                                </div>
                                <div className="info">
                                    <i className="fa fa-phone" />
                                    <span>+977-2345678678</span>
                                </div>
                            </address>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 widget-container">
                        <div className="widget twitter-widget">
                            <h3 className="footer-widget-title"><span>Our Loaction</span></h3>
                            <span className="underline left" />
                            <a href="https://www.google.com/maps/place/Maharani+Jhoda+saving+%26+credit+co.ltd./@26.5673603,87.6835141,18.1z/data=!4m5!3m4!1s0x39e585ef59c3614d:0x227440656a3a933!8m2!3d26.5676315!4d87.6842498"
                                target='_blank' rel="noreferrer">
                                <img src='./images/loct.png' className='w-100 ps-3 pe-3' alt="location" /></a>
                        </div>
                    </div>
                    <div className="clearfix hidden-lg hidden-md hidden-xs tablet-margin-bottom" />
                </div>
            </div>
        </div>
        <hr style={{ width: '90%', margin: 'auto', color: '#fff' }} />
        <div className="powered pt-3">
            <p>&copy;{currentYear} महारानीझोडा बचत तथा ऋण सहकारी संस्था लिमिटेड</p>
            <p>Powered by smart innovation</p>
        </div>
    </footer>
};

export default Footer;
