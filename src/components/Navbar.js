import React, { useState } from 'react'
import icon from '../assets/icon-nav.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../Styles/Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="navbar">
            <div className='nav-left'>
                {/* <div className='nav-left-container'> */}
                <div className='img-nav'>
                    <img src={icon}></img>
                </div>
                <div className='name-nav'>
                    Mitesh Agarwal
                </div>
                {/* <div className='nav-right-icon' hidden onClick={() => setClicked(!clicked)}>
                    {console.log(clicked)}
                    <WidgetsIcon fontSize='large' />
                </div> */}
                {/* </div> */}
            </div>
            <div className='nav-mid'>
                <hr />
            </div>
            <div className='nav-right'>
                <Link to="About" smooth duration={800} className='link-navbar'>
                    <div className='section-links'>
                        About
                    </div>
                </Link>
                <Link to="Experience" smooth duration={800} className='link-navbar'>
                    <div className='section-links'>
                        Experience
                    </div>
                </Link>
                <a href="./Mitesh-SE-Resume.pdf" download="Mitesh_SE_Resume.pdf" className='a-resume link-navbar'>
                    <div className='section-links'>
                        Resume
                    </div>
                </a>
                <Link to="Publications" smooth duration={800} className='link-navbar'>
                    <div className='section-links'>
                        Publications
                    </div>
                </Link>
                <div className='nav-links'>
                    <a href="https://www.linkedin.com/in/mitesh-agarwal-ncsu/" target="_blank" rel="noreferrer" className='nav-icon-wrapper'>
                        <div>
                            <LinkedInIcon fontSize='large' />
                        </div>
                    </a>
                    <a href="https://www.github.com/mitesh24100" target="_blank" rel="noreferrer" className='nav-icon-wrapper'>
                        <div>
                            <GitHubIcon fontSize='large' />
                        </div>
                    </a>
                    <a href="mailto:magarwa3@ncsu.edu" rel="noreferrer" className='nav-icon-wrapper'>
                        <div>
                            <MailOutlineIcon fontSize='large' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar