import React from 'react'
import '../Styles/Teachings.css';
import NCSU from '../assets/NCSU.png';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function Teachings() {
    return (
        <div>
            <div className='pb-intro-wrapper' name="Teachings">
                <div className='ed-intro'>
                    <div className='school-logo-container'>
                        <LocalLibraryIcon className='school-logo' fontSize='20px' style={{ color: "white" }} />
                    </div>
                    <div className='section-title'>
                        Teaching Experience
                    </div>
                </div>
                <div className='ed-line'>
                    A few of my teaching experience till date...
                </div>
            </div>
            <div className='teaching-container'>
                <img className='teaching-image' src={NCSU} />
                <div className='teaching-center-wrapper'>
                    <div className='teaching-wrapper'>
                        <div className='teaching-header-wrapper'>
                            <div className='paper-title'>North Carolina State University <span className='location'>(Raleigh, North Carolina, USA)</span></div>
                            <div className='paper-skills'>Teaching Assistant</div>
                            <div className='teach-time'>September 2023 - April 2025</div>
                        </div>
                        <div>
                            <div className='paper-author-list'>• Teaching Assistant for the BUS (Business Management) 440 (Database Management), and MBA 552 (Data Engineering).</div>
                            <br></br>
                            <div className='paper-author-list'>• Mentored and guided 50+ students per semester in advanced database principles, clarifying complex topics like SQL query optimization, database normalization, and ETL processes for data warehousing.</div>
                            <br></br>
                            <div className='paper-author-list'>• Evaluated and provided detailed, constructive feedback on over 200 student projects and assignments, ensuring a high standard of code quality, efficiency, and adherence to data modeling best practices.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teachings