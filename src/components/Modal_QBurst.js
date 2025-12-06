import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_QBurst({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>Fathom Science, Inc</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>May 2024 - August 2024</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Raleigh, North Carolina, USA</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Software Engineer Intern</div>
                </div>
                <ul>
                    <li className='modal-div'>Spearheaded backend development of Java Spring Boot REST APIs serving marine data, reducing manual data retrieval time by 50% and improving response time through Redis caching.</li>
                    <li className='modal-div'>Developed a React.js dashboard consuming these APIs with dynamic filters and interactive maps, cutting load times by 60%.</li>
                    <li className='modal-div'>Deployed containerized services using Docker + Kubernetes manifests, improving reliability, environment parity, and rollout testing for the engineering team.</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_QBurst