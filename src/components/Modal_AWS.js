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
                    <div>North Carolina State University</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>May 2025 - October 2025</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Raleigh, North Carolina, USA</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Software Engineer</div>
                </div>
                <ul>
                    <li className='modal-div'>Restructured AWS cloud architecture by leveraging Redis, Celery and AWS S3 to increase scalability and reduce document processing time in Python service from 240 minutes to 5 minutes.</li>
                    <li className='modal-div'>Improved data consistency by 30% by implementing a centralized Redux-based global state store to replace local state store.</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_AWS