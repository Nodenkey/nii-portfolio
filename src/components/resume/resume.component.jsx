import React, {useEffect, useRef} from 'react';
import {ResumeImage, ResumePiece, ResumeWrapper} from "./resume.style";
import Resume1 from "../../assets/images/resume1.jpg";
import Resume2 from "../../assets/images/resume2.jpg";
import Resume3 from "../../assets/images/resume3.jpg";
import {gsap, ScrollTrigger} from "gsap/all";


const Resume = () => {
    let resume2 = useRef(null);
    let resume3 = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(resume2, {
            scrollTrigger: {trigger: resume2, toggleActions: 'restart pause reverse pause',
                start: 'top 90%',scrub: true}, duration: .7,
            opacity: 0, rotateX: -90, transformOrigin: 'top',
        });
        tl.from(resume3, {
            scrollTrigger: {trigger: resume3, toggleActions: 'restart pause reverse pause',
                start: 'top 90%', scrub: true}, duration: .7, delay: 10,
            opacity: 0, rotateX: -90, transformOrigin: 'top',
        });
    })
    return (
        <ResumeWrapper >
            <ResumePiece>
                <ResumeImage src={Resume1} alt="part of resume"/>
            </ResumePiece>
            <ResumePiece>
                <ResumeImage src={Resume2} alt="part of resume" ref={el => resume2 = el}/>
            </ResumePiece>
            <ResumePiece>
                <ResumeImage src={Resume3} alt="part of resume" ref={el => resume3 = el}/>
            </ResumePiece>
        </ResumeWrapper>
    );
};

export default Resume;
