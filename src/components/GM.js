import React from 'react'
import '../Styles/GM.css'
import InfoIcon from '@mui/icons-material/Info';

function GM() {
    return (
        <div className='GM-container' name="About">
            <div className='ed-intro'>
                <div className='school-logo-container'>
                    <InfoIcon className='school-logo' fontSize='40px' style={{ color: "white" }} />
                </div>
                <div className='section-title'>
                    About Me!
                </div>
            </div>
            <div className='ed-line'>
                A peek into my life...
            </div>
            <div className='GM-card'>
                <div>
                    I am a software engineer passionate about building scalable systems, intelligent applications, and cloud-native platforms that deliver real impact. My journey spans across startups, research teams, and global enterprises, where I have worked on everything from distributed data pipelines to production-grade AI integrations. I hold a Master’s degree in Computer Science from North Carolina State University, where I focused on software engineering, distributed systems, and algorithms.
                    <br />
                    <br />
                    <br />
                    Professionally, I have had the opportunity to engineer high-performance backend systems, modernize large-scale architectures, and design secure APIs used by thousands of users. I have reduced multi-hour AWS pipelines to minutes, built HIPAA-compliant data platforms for clinics, created OpenAI-compatible on-prem LLM infrastructure, and even developed a custom load balancer in Go handling massive concurrency projects that pushed me to understand systems at a deeper level.
                    <br />
                    <br />
                    <br />
                    Across roles, I’ve collaborated with cross-functional teams, owned end-to-end product features, and contributed to cloud, backend, and AI-driven workflows. From marine data platforms to telecom microservices to healthcare intelligence, I’ve learned how to build solutions that are not only fast, but reliable and meaningful.
                    <br />
                    <br />
                    <br />
                    Outside of work, I enjoy exploring new technologies, contributing to personal engineering projects, and constantly leveling up my skills. Whether it’s optimizing infrastructure, designing distributed systems, or experimenting with AI integrations, I love solving hard problems and building things that matter.
                </div>
            </div>
        </div>
    )
}

export default GM