import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_HuddleUp({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>Sahu Technologies</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>December 2020 - January 2021</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Mumbai, Maharashtra, India</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Software Engineer Intern</div>
                </div>
                <ul>
                    <li className='modal-div'>Pulled off a 30% reduction in runtime errors by refactoring React code to TypeScript, enhancing code quality and maintainability through static typing and improved project structure.</li>
                    <li className='modal-div'>Resolved 10+ bugs and improved code quality by conducting thorough code reviews and debugging.</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_HuddleUp
