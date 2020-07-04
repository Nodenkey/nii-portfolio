import React, {useEffect, useRef} from 'react';
import {gsap, ScrollTrigger} from "gsap/all";
import ResumeImage from "../../assets/images/resume.jpg";
import ResumeFile from "../../assets/pdf/resume.pdf";
import {Downloader, Image, ResumeWrapper} from "./resume.style";


const Resume = () => {
    let resumeImage = useRef(null);
    let downloader = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(resumeImage, {scrollTrigger : {trigger: resumeImage, start: 'top center'},
            duration : 1.5, scale : .7, filter : 'blur(2px)', delay: .5, x : '-40%' });
        gsap.from(downloader, {scrollTrigger: {trigger : downloader, start: 'top center'},
            duration : 1, opacity : 0, delay : 1.5, x : 200
        })
    }, [])
    return (
        <ResumeWrapper id='cv'>
            <Image src={ResumeImage} alt='resume' ref={el => resumeImage = el}/>
            <a href={ResumeFile} download="Nii_Resume.pdf"><Downloader ref={el => downloader = el} className='hover'>Download resume</Downloader></a>
        </ResumeWrapper>
    )
};

export default Resume;
