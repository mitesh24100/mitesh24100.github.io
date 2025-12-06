import React from 'react'
import '../Styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Footer() {

    // style={1 == 1 ? {backgroundColor: 'red !important;'} : {color: 'blue;'}}

    // position: fixed;
    // display: inline;
    // background-color: #fd8976;
    // /* height: 40px; */
    // top: 35vh;
    // left: 0px;
    // z-index: 500000;
    // border-radius: 0 5px 5px 0;
    // margin-left: -1px;

    // style={clicked == true ? {backgroundColor: '#fd8976', position: 'fixed', display: 'inline', top: '35vh', left: '0px', zIndex: '100', borderRadius: '0 5px 5px 0', marginLeft: '-1px'} : {}}

    return (
        <div className='footer-container' id="footer-id">
            <div className='side-link-wrapper'>
                <a href="https://www.linkedin.com/in/mitesh-agarwal-ncsu/" target="_blank" rel="noreferrer">
                    <LinkedInIcon sx={{ fontSize: 40, color: 'white' }} />
                </a>
                <a href="https://github.com/mitesh24100" target="_blank" rel="noreferrer">
                    <GitHubIcon sx={{ fontSize: 40, color: 'white' }} />
                </a>
                <a href="mailto:magarwa3@ncsu.edu" rel="noreferrer">
                    <MailOutlineIcon sx={{ fontSize: 40, color: 'white' }} />
                </a>
                <a href="/Mitesh-Agarwal-Resume.pdf" download="Mitesh-Agarwal-Resume.pdf">
                    <ContactPageIcon sx={{ fontSize: 40, color: 'white' }} />
                </a>
            </div>
        </div>
    )
}

export default Footer