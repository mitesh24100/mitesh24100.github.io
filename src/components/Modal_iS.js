import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_AWS({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>iSimcha Health, LLC</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>October 2025 - Present</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>San Jose, California, USA</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Software Engineer Intern</div>
                </div>
                <ul>
                    <li className='modal-div'>Built 10+ HIPAA-compliant RESTful APIs using FastAPI securing 35,000+ patient records across 20+ clinics by implementing JWT.</li>
                    <li className='modal-div'>Designed drop-in OpenAI API replacements to harness open-source LLMs within local Kubernetes clusters, reducing operational AI costs by 40%.</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_AWS