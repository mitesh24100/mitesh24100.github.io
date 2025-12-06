import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Modal.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';

function Modal_Synaptics({ modal, setModal }) {
    return (
        <div className='modal-test' style={modal == true ? { display: 'flex' } : { display: 'none' }}>
            <div className='modal-close-div' onClick={() => setModal(false)}><CloseIcon /></div>
            <div className='modal-test-content'>
                <div className='modal-header-container'>
                    <div>Capgemini</div>
                </div>
                <div className='modal-location-container'>
                    <TimelineIcon />
                    <div style={{ color: 'rgb(65 203 0 / 76%)' }}>June 2021 - July 2023</div>
                </div>
                <div className='modal-location-container'>
                    <LocationOnIcon />
                    <div>Mumbai, Maharashtra, India</div>
                </div>
                <div className='modal-role-container'>
                    <WorkIcon />
                    <div>Software Engineer</div>
                </div>
                <ul>
                    <li className='modal-div'>Modernized legacy monolith into a high-performance microservices architecture, slashing API latency by 40%, by implementing inter-service communication using Spring Boot and gRPC.</li>
                    <li className='modal-div'>Automated legacy batch-processing workflows by building AWS Glue and EMR pipelines, enabling near real-time reportingfor 1M+ subscriber records and cutting data availability delays from 24 hours to under 2 hours.</li>
                    <li className='modal-div'>Optimized data layer performance, reducing query execution time by 50%, by refactoring inefficient SQL queries and implementing composite indexing.</li>
                    <li className='modal-div'>Implemented consolidated AWS CloudWatch Dashboards with custom metrics, integrated alarms, and Splunk logging, enhancing monitoring and observability across 12+ services.</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal_Synaptics