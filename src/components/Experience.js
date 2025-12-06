import React, { useState } from 'react'
import '../Styles/Experience.css'
import synaptics_bg from '../assets/CG.png'
import iSimcha_Health_Logo from '../assets/iSimcha_Health_Logo.jpeg'
import AWS_Bedrock_Dark from '../assets/AWS_Bedrock_Dark.png'
import LMS_bg from '../assets/LMS.png'
import GO_bg from '../assets/FS.jpeg'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Modal_Synaptics from './Modal_Synaptics';
import Modal_HuddleUp from './Modal_HuddleUp';
import Modal_iS from './Modal_iS';
import $ from 'jquery';
import { Power3 } from 'gsap'
import Modal_QBurst from './Modal_QBurst'
import Modal_AWS from './Modal_AWS'

function Experience() {
    const [modaliS, setmodaliS] = useState(false);
    const [modalNCSU, setmodalNCSU] = useState(false);
    const [modalFS, setmodalFS] = useState(false);
    const [modalCapg, setmodalCapg] = useState(false);
    const [modalST, setmodalST] = useState(false);

    var slideshowDuration = 4000;

    // try {
    var slideshow = $('.main-content .slideshow');

    function slideshowSwitch(slideshow, index, auto) {
        if (slideshow.data('wait')) return;

        var slides = slideshow.find('.slide');
        var pages = slideshow.find('.pagination');
        var activeSlide = slides.filter('.is-active');
        var activeSlideImage = activeSlide.find('.image-container');
        var newSlide = slides.eq(index);
        var newSlideImage = newSlide.find('.image-container');
        var newSlideContent = newSlide.find('.slide-content');
        var newSlideElements = newSlide.find('.caption > *');
        if (newSlide.is(activeSlide)) return;

        newSlide.addClass('is-new');
        var timeout = slideshow.data('timeout');
        clearTimeout(timeout);
        slideshow.data('wait', true);
        var transition = slideshow.attr('data-transition');
        if (transition == 'fade') {
            newSlide.css({
                display: 'block',
                zIndex: 2
            });
            newSlideImage.css({
                opacity: 0
            });

            window.TweenMax.to(newSlideImage, 1, {
                alpha: 1,
                onComplete: function () {
                    newSlide.addClass('is-active').removeClass('is-new');
                    activeSlide.removeClass('is-active');
                    newSlide.css({ display: '', zIndex: '' });
                    newSlideImage.css({ opacity: '' });
                    slideshow.find('.pagination').trigger('check');
                    slideshow.data('wait', false);
                    if (auto) {
                        timeout = setTimeout(function () {
                            slideshowNext(slideshow, false, true);
                        }, slideshowDuration);
                        slideshow.data('timeout', timeout);
                    }
                }
            });
        } else {
            if (newSlide.index() > activeSlide.index()) {
                var newSlideRight = 0;
                var newSlideLeft = 'auto';
                var newSlideImageRight = -slideshow.width() / 8;
                var newSlideImageLeft = 'auto';
                var newSlideImageToRight = 0;
                var newSlideImageToLeft = 'auto';
                var newSlideContentLeft = 'auto';
                var newSlideContentRight = 0;
                var activeSlideImageLeft = -slideshow.width() / 4;
            } else {
                var newSlideRight = '';
                var newSlideLeft = 0;
                var newSlideImageRight = 'auto';
                var newSlideImageLeft = -slideshow.width() / 8;
                var newSlideImageToRight = '';
                var newSlideImageToLeft = 0;
                var newSlideContentLeft = 0;
                var newSlideContentRight = 'auto';
                var activeSlideImageLeft = slideshow.width() / 4;
            }

            newSlide.css({
                display: 'block',
                width: 0,
                right: newSlideRight,
                left: newSlideLeft
                , zIndex: 2
            });

            newSlideImage.css({
                width: slideshow.width(),
                right: newSlideImageRight,
                left: newSlideImageLeft
            });

            newSlideContent.css({
                width: slideshow.width(),
                left: newSlideContentLeft,
                right: newSlideContentRight
            });

            activeSlideImage.css({
                left: 0
            });

            window.TweenMax.set(newSlideElements, { y: 20, force3D: true });
            window.TweenMax.to(activeSlideImage, 1, {
                left: activeSlideImageLeft,
                ease: Power3.easeInOut
            });

            window.TweenMax.to(newSlide, 1, {
                width: slideshow.width(),
                ease: Power3.easeInOut
            });

            window.TweenMax.to(newSlideImage, 1, {
                right: newSlideImageToRight,
                left: newSlideImageToLeft,
                ease: Power3.easeInOut
            });

            window.TweenMax.staggerFromTo(newSlideElements, 0.8, { alpha: 0, y: 60 }, { alpha: 1, y: 0, ease: Power3.easeOut, force3D: true, delay: 0.6 }, 0.1, function () {
                newSlide.addClass('is-active').removeClass('is-new');
                activeSlide.removeClass('is-active');
                newSlide.css({
                    display: '',
                    width: '',
                    left: '',
                    zIndex: ''
                });

                newSlideImage.css({
                    width: '',
                    right: '',
                    left: ''
                });

                newSlideContent.css({
                    width: '',
                    left: ''
                });

                newSlideElements.css({
                    opacity: '',
                    transform: ''
                });

                activeSlideImage.css({
                    left: ''
                });

                slideshow.find('.pagination').trigger('check');
                slideshow.data('wait', false);
                if (auto) {
                    timeout = setTimeout(function () {
                        slideshowNext(slideshow, false, true);
                    }, slideshowDuration);
                    slideshow.data('timeout', timeout);
                }
            });
        }
    }

    function slideshowNext(slideshow, previous, auto) {
        var slides = slideshow.find('.slide');
        var activeSlide = slides.filter('.is-active');
        var newSlide = null;
        if (previous) {
            newSlide = activeSlide.prev('.slide');
            if (newSlide.length === 0) {
                newSlide = slides.last();
            }
        } else {
            newSlide = activeSlide.next('.slide');
            if (newSlide.length == 0)
                newSlide = slides.filter('.slide').first();
        }

        slideshowSwitch(slideshow, newSlide.index(), auto);
    }

    function homeSlideshowParallax() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > window.innerHeight) return;
        var inner = slideshow.find('.slideshow-inner');
        var newHeight = window.innerHeight - (scrollTop / 2);
        var newTop = scrollTop * 0.8;

        inner.css({
            transform: 'translateY(' + newTop + 'px)', height: newHeight
        });
    }

    $(document).ready(function () {
        $('.slide').addClass('is-loaded');

        $('.slideshow .arrows .arrow').on('click', function () {
            slideshowNext($(this).closest('.slideshow'), $(this).hasClass('prev'));
        });

        $('.slideshow .pagination .item').on('click', function () {
            slideshowSwitch($(this).closest('.slideshow'), $(this).index());
        });

        $('.slideshow .pagination').on('check', function () {
            var slideshow = $(this).closest('.slideshow');
            var pages = $(this).find('.item');
            var index = slideshow.find('.slides .is-active').index();
            pages.removeClass('is-active');
            pages.eq(index).addClass('is-active');
        });

        /* Lazyloading
        $('.slideshow').each(function(){
          var slideshow=$(this);
          var images=slideshow.find('.image').not('.is-loaded');
          images.on('loaded',function(){
            var image=$(this);
            var slide=image.closest('.slide');
            slide.addClass('is-loaded');
          });
        */

        var timeout = setTimeout(function () {
            slideshowNext(slideshow, false, true);
        }, slideshowDuration);

        slideshow.data('timeout', timeout);
    });

    if ($('.main-content .slideshow').length > 1) {
        $(window).on('scroll', homeSlideshowParallax);
    }
    // }
    // catch { console.log('Error') }

    return (
        <div className='experience-outer-container' name="Experience">
            <Modal_iS modal={modaliS} setModal={setmodaliS} />
            <Modal_AWS modal={modalNCSU} setModal={setmodalNCSU} />
            <Modal_QBurst modal={modalFS} setModal={setmodalFS} />
            <Modal_Synaptics modal={modalCapg} setModal={setmodalCapg} />
            <Modal_HuddleUp modal={modalST} setModal={setmodalST} />

            <div className='ed-intro'>
                <div className='school-logo-container'>
                    <WorkHistoryIcon className='school-logo' fontSize='large' style={{ color: "white" }} />
                </div>
                <div className='section-title'>
                    Work Experience
                </div>
            </div>
            <div className='ed-line' style={{ marginBottom: '30px' }}>
                My formal work experience till date...
            </div>
            <div className='exp-container'>
                <main class="main-content">
                    {/* <div className='ed-intro'>
                    <div className='school-logo-container'>
                        <SchoolIcon className='school-logo' fontSize='40px' />
                    </div>
                    <div>
                        Education
                    </div>
                </div> */}
                    <section class="slideshow">
                        <div class="slideshow-inner">
                            <div class="slides">
                                <div class="slide is-active ">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">iSimcha Health</div>
                                            <div class="text">
                                                <p>Software Engineer Intern</p>
                                            </div>
                                            {/* <div class="text">
                                                <p>June 2023 - September 2023</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setmodaliS(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img src={iSimcha_Health_Logo} alt="" class="image" />
                                    </div>
                                </div>
                                <div class="slide">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">North Carolina State University</div>
                                            <div class="text">
                                                <p>Software Engineer</p>
                                            </div>
                                            {/* <div class="text">
                                                <p>June 2023 - September 2023</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setmodalNCSU(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img src={AWS_Bedrock_Dark} alt="" class="image" />
                                    </div>
                                </div>
                                <div class="slide">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">Fathom Science</div>
                                            <div class="text">
                                                <p>Software Engineer Intern</p>
                                            </div>
                                            {/* <div class="text">
                                                <p>June 2023 - September 2023</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setmodalFS(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img src={GO_bg} alt="" class="image" />
                                    </div>
                                </div>
                                <div class="slide">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">Capgemini</div>
                                            <div class="text">
                                                <p>Software Engineer</p>
                                            </div>
                                            {/* <div class="text">
                                                <p>June 2023 - September 2023</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setmodalCapg(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img src={synaptics_bg} alt="" class="image" />
                                    </div>
                                </div>
                                <div class="slide">
                                    <div class="slide-content">
                                        <div class="caption">
                                            <div class="title">Sahu Technologies</div>
                                            <div class="text">
                                                <p>Software Engineer Intern</p>
                                            </div>
                                            {/* <div class="text">
                                                <p>March 2022 - June 2022</p>
                                            </div> */}
                                            <a style={{ cursor: 'pointer' }} onClick={() => setmodalST(true)} class="btn">
                                                <span class="btn-inner">Learn More</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="image-container">
                                        <img style={{ objectPosition: '50% 0%' }} src={LMS_bg} alt="" class="image" />
                                    </div>
                                </div>
                            </div>
                            <div class="pagination">
                                <div class="item is-active">
                                    <span class="icon">1</span>
                                </div>
                                <div class="item">
                                    <span class="icon">2</span>
                                </div>
                                <div class="item">
                                    <span class="icon">3</span>
                                </div>
                                <div class="item">
                                    <span class="icon">4</span>
                                </div>
                            </div>
                            <div class="arrows">
                                <div class="arrow prev">
                                    <span class="svg svg-arrow-left">
                                        <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xmlSpace="preserve"> <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" /> </svg>
                                        <span class="alt sr-only"></span>
                                    </span>
                                </div>
                                <div class="arrow next">
                                    <span class="svg svg-arrow-right">
                                        <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enable-background="new 0 0 14 26" xmlSpace="preserve"> <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" /> </svg>
                                        <span class="alt sr-only"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Experience