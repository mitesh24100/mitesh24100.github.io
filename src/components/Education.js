import React from 'react'
import Card from './Card'
import '../Styles/Education.css'
import CardTemp from './CardTemp'
import SchoolIcon from '@mui/icons-material/School';
import UCI from '../assets/NCSU.png'
import DA from '../assets/MU.png'

function Education() {
    return (
        <div className='education-wrapper' name="Education">
            <div className='ed-intro'>
                <div className='school-logo-container'>
                    <SchoolIcon className='school-logo' fontSize='40px' style={{ color: "white" }} />
                </div>
                <div className='section-title'>
                    Education
                </div>
            </div>
            <div className='ed-line'>
                My formal educational journey till date...
            </div>
            <div className='education'>
                <CardTemp college_name="North Carolina State University (USA)" icon={UCI} degree="Master, Computer Science"/>
                <CardTemp college_name="University of Mumbai (India)" icon={DA} degree="Bachelor, Information Technology"/>
                {/* <Card college="University of California, Irvine (USA)"/>
                <Card college="Dhirubhai Ambani Institute of Information and Communication Technology (India)"/> */}
            </div>
        </div>
    )
}

export default Education