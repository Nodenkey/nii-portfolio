import React, {useEffect, useRef} from 'react';
import {
    ImageContainer, ImageContainer2,
    Line,
    ProjectContainer,
    ProjectHeader,
    ProjectImage, ProjectLabel, ProjectLabel2,
    ProjectName, ProjectName2, ProjectNumber, ProjectNumber2,
    ProjectsWrapper, VisitContainer, VisitContainer2,
} from "./projects.style";
import {gsap, ScrollTrigger} from "gsap/all";
import Edanra from "../../assets/images/edanra.jpg";
import Wevops from "../../assets/images/wevops.jpg";
import FrLogistics from "../../assets/images/frlogistics.jpg";
import Portfolio from "../../assets/images/design-portfolio.jpg";

const Projects = () => {
    let line = useRef(null);
    let edanra = useRef(null);
    let wevops = useRef(null);
    let portfolio = useRef(null);
    let fr = useRef(null);
    let edanraTitle = useRef(null);
    let wevopsTitle = useRef(null);
    let portfolioTitle = useRef(null);
    let frTitle = useRef(null);


    const ImageAnimation = (el) => {
        gsap.from(el, {
            scrollTrigger: {trigger: el, start: 'top bottom'}, y: 300,
            opacity: 0, duration: 3, ease: "power3.out"
        });
    }
    const TitleAnimation = (el, trigger) => {
        gsap.from(el, {
            scrollTrigger: {trigger: trigger,  start: 'top bottom'}, x: 200,
            opacity: 0, duration: 2, ease: "back.out(1.7)", delay: 1
        });
    }
    const TitleAnimationRev = (el, trigger) => {
        gsap.from(el, {
            scrollTrigger: {trigger: trigger,  start: 'top bottom'}, x: -200,
            opacity: 0, duration: 2, ease: "back.out(1.7)", delay: 1
        });
    }
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(line, {
            scrollTrigger: {
                trigger: line,
                start: 'bottom center',
                toggleActions: 'restart reset restart none',
            }, scale: 0, transformOrigin: 'left', duration: 1
        })
        ImageAnimation(wevops);
        TitleAnimation(wevopsTitle, wevops);
        ImageAnimation(edanra);
        TitleAnimationRev(edanraTitle, edanra);
        ImageAnimation(portfolio);
        TitleAnimation(frTitle, fr);
        ImageAnimation(fr);
        TitleAnimationRev(portfolioTitle, portfolio);
    }, [])
    return (
        <ProjectsWrapper id='projects'>
            <ProjectHeader>Selected Projects
                <Line ref={el => line = el}/>
            </ProjectHeader>
            <ProjectContainer>
                <a href="https://wevops-portfolio.netlify.app/" target='_blank'
                   rel="noopener noreferrer"><ImageContainer ref={el => wevops = el} className='hover'>
                    <ProjectImage src={Wevops} alt='wevops website'/>
                    <ProjectLabel>Portfolio</ProjectLabel>
                    <VisitContainer className='visitor'>
                        <i className="fas fa-external-link-square-alt"/>
                    </VisitContainer>
                </ImageContainer></a>
                <ProjectName ref={el => wevopsTitle = el}>Wevops</ProjectName>
                <ProjectNumber>no.1</ProjectNumber>
            </ProjectContainer>
            <ProjectContainer>
                <a href="https://edanra.com/" target='_blank'
                   rel="noopener noreferrer"><ImageContainer2 ref={el => edanra = el} className='hover'>
                    <ProjectImage src={Edanra} alt='edanra website'/>
                    <ProjectLabel2>E-housing</ProjectLabel2>
                    <VisitContainer2 className='visitor'>
                        <i className="fas fa-external-link-square-alt"/>
                    </VisitContainer2>
                </ImageContainer2></a>
                <ProjectName2 ref={el => edanraTitle = el}>Edanra</ProjectName2>
                <ProjectNumber2>no.2</ProjectNumber2>
            </ProjectContainer>
            <ProjectContainer>
                <a href="https://frlogisticsltd.com/" target='_blank'
                   rel="noopener noreferrer"><ImageContainer ref={el => fr = el} className='hover'>
                    <ProjectImage src={FrLogistics} alt='Frlogistics website'/>
                    <ProjectLabel>Logistics</ProjectLabel>
                    <VisitContainer className='visitor'>
                        <i className="fas fa-external-link-square-alt"/>
                    </VisitContainer>
                </ImageContainer></a>
                <ProjectName ref={el => frTitle = el}>Fr Logistics</ProjectName>
                <ProjectNumber>no.3</ProjectNumber>
            </ProjectContainer>
            <ProjectContainer>
                <a href="https://drvmroll-design-portfolio.netlify.app/" target='_blank'
                   rel="noopener noreferrer"><ImageContainer2 ref={el => portfolio = el} className='hover'>
                    <ProjectImage src={Portfolio} alt='design portfolio website'/>
                    <ProjectLabel2>Portfolio</ProjectLabel2>
                    <VisitContainer2 className='visitor'>
                        <i className="fas fa-external-link-square-alt"/>
                    </VisitContainer2>
                </ImageContainer2></a>
                <ProjectName2 style={{top: '40%'}} ref={el => portfolioTitle = el}>Design <br/> Porfolio</ProjectName2>
                <ProjectNumber2>no.4</ProjectNumber2>
            </ProjectContainer>
        </ProjectsWrapper>
    );
};

export default Projects;
