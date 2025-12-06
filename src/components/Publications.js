import React from 'react'
import '../Styles/Publications.css'
import ScienceIcon from '@mui/icons-material/Science';

const customStyle = {
  backgroundColor: "#23252f",
  boxShadow: "0 4px 8px 0 rgb(255,0,0)",
  backdropFilter: "blur( 20px )",
  // webkit-backdrop-filter: "blur( 20px )",
  borderRadius: "4px",
  // border: "1px solid rgba( 255, 255, 255, 0.18 )"
}

function Publications() {
  return (
    <div>
      <div className='pb-intro-wrapper' name="Publications">
        <div className='ed-intro'>
          <div className='school-logo-container'>
            <ScienceIcon className='school-logo' fontSize='large' style={{ color: "white" }} />
          </div>
          <div className='section-title'>
            Publications
          </div>
        </div>
        <div className='ed-line'>
          A few of my research publications till date...
        </div>
      </div>
      <div className='publications-container'>
        <div className='margin-wrapper'>
          <div className='publication-wrapper'>
            <div className='publication-header-wrapper'>
              <div className='paper-title'></div>
              <div className='paper-skills'>Image Captioning using Deep Learning</div>
            </div>
            <div>
              <div className='paper-author-list'>Mitesh Agarwal, Mithilesh Bhutada, Dr Aditya Desai; “Image Captioning”, TCET Multicon-W Conference 2020  </div>
              <br />
              <div className='paper-author-list'>● Pioneered a Flask based Image Captioning application to predict captions of an image provided by the users using ML.</div>
              <div className='paper-author-list'>● Integrated transfer learning with pre-trained VGG-16 model, enhancing model efficiency, achieving an accuracy rate of 90%.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications