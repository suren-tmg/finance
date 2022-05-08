import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header1 = () => {
    return (
        <div className="first-header">
            <div className="location">
                <li><i className="fas fa-map-marker-alt" id='icon'></i> <span>गौरादह-5,झापा ,नेपाल</span></li>
                <li><i className="far fa-clock" id='icon'></i> <span>Sun – Fri: 10:00am–5:00pm. Saturday CLOSED</span></li>
            </div>
            <div className="contact">
                <li><i className="fas fa-envelope" id='icon'></i> <span>info@maharanijhoda.com</span></li>
                <li><i className="fas fa-phone-alt" id='icon'></i> <span>+977-1234567890</span></li>
                <li onClick={() => window.location.reload('/english')}><Link to='/english' style={{
                    color:'#fc8803',
                    textDecoration:'none',
                    fontWeight:'700',
                   marginLeft:'40px',
                    backgroundColor:'#fff',
                    padding:'0px 5px'
                }}><span>English</span></Link></li>
            </div>
        </div>
    )
}

export default Header1