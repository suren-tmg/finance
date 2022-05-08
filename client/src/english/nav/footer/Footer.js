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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam excepturi doloremque porro 
                                modi veritatis odio illum nisi exercitationem natus optio incidunt
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam excepturi doloremque porro 
                                modi veritatis odio illum nisi exercitationem natus optio incidunt
                                 at eligendi minus recusandae, sed consequatur libero vero!
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 widget-container">
                        <div id="nav_menu-2" className="widget widget_nav_menu">
                            <h3 className="footer-widget-title"><span>Quick Links</span></h3>
                            <span className="underline left" />
                            <div className="menu-quick-links-container">
                                <ul id="menu-quick-links" className="menu">
                                    <li><Link style={{ textDecoration: 'none' }} to=''>Home Page</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/about-us'>About Us</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/our-works'>Our Works</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/news'>News</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/announcement'>Announcement</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/download'>Download</Link></li>
                                    <li><Link style={{ textDecoration: 'none' }} to='/partners'>Partners</Link></li>
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
                                    <span>Gauradaha-5,Jhapa ,Nepal</span>
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
            <p>Powered by <a href="https://www.sinepal.com/" target='_blank' style={{color:'yellow'}}> smart innovation</a> </p>
        </div>
    </footer>
};

export default Footer;
