import React, {useEffect, useRef} from 'react';
import {
    Connector, Connector2, Description,
    ImageContainer, ImageUltimate, ImageUltimate2,
    Line,
    ProjectContainer, ProjectDescription, ProjectDescription2,
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
import {ConnectLine, ConnectLine2} from "../icons/icons.component";
import Button from "../button/button.component";

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
    let connectWevops = useRef(null);
    let connectFr = useRef(null);
    let connectEdanra = useRef(null);
    let connectDesign = useRef(null);
    let storyWevops = useRef(null);
    let storyFr = useRef(null);
    let storyEdanra = useRef(null);
    let storyDesign = useRef(null);


    const ImageAnimation = (el, title, connect, story) => {
        gsap.timeline({
            scrollTrigger: {trigger: el, start: 'top bottom'},
        }).from(el, {
            y: 300,
            opacity: 0, duration: 3, ease: "power3.out"
        })
            .from(title, {
                x: 200,
                opacity: 0, duration: 2, ease: "back.out(1.7)",
            }, '=-2')
            .from(connect, {scaleY: 0, duration: 1, ease: 'power3.out', transformOrigin: 'top left'}, '=-1')
            .from(story, {opacity: 0, duration: .5, ease: 'power3.out'})
    }
    const ImageAnimation2 = (el, title, connect, story) => {
        gsap.timeline({
            scrollTrigger: {trigger: el, start: 'top bottom'},
        }).from(el, {
            y: 300,
            opacity: 0, duration: 3, ease: "power3.out"
        })
            .from(title, {
                x: -200,
                opacity: 0, duration: 2, ease: "back.out(1.7)",
            }, '=-2')
            .from(connect, {scaleY: 0, duration: 1, ease: 'power3.out', transformOrigin: 'top right'}, '=-1')
            .from(story, {opacity: 0, duration: 1, ease: 'power3.out'})
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
        ImageAnimation(wevops, wevopsTitle, connectWevops, storyWevops);
        ImageAnimation2(edanra, edanraTitle, connectEdanra, storyEdanra);
        ImageAnimation(fr, frTitle, connectFr, storyFr);
        ImageAnimation2(portfolio, portfolioTitle, connectDesign, storyDesign);
    }, [])
    return (
        <ProjectsWrapper id='projects'>
            <ProjectHeader>Selected Projects
                <Line ref={el => line = el}/>
            </ProjectHeader>
            <ProjectContainer>
                <ImageUltimate>
                    <a href="https://wevops-portfolio.netlify.app/" target='_blank'
                       rel="noopener noreferrer">
                        <ImageContainer ref={el => wevops = el} className='hover'>
                            <ProjectImage src={Wevops} alt='wevops website'/>
                            <ProjectLabel>Portfolio</ProjectLabel>
                            <VisitContainer className='visitor'>
                                <i className="fas fa-external-link-square-alt"/>
                            </VisitContainer>
                        </ImageContainer>
                        <ProjectName ref={el => wevopsTitle = el}>Wevops</ProjectName>
                    </a>
                </ImageUltimate>
                <ProjectNumber>no.1</ProjectNumber>
                <ProjectDescription>
                    <Connector ref={el => connectWevops = el}><ConnectLine/></Connector>
                    <Description ref={el => storyWevops = el}>
                        <p>The website was developed for a startup that specialises in UI/UX
                            design and web development. It was
                            created using React js, styled components and gsap for animations.</p>
                        <Button/>
                    </Description>
                </ProjectDescription>
            </ProjectContainer>
            <ProjectContainer>
                <ImageUltimate2>
                    <a href="https://edanra.com/" target='_blank'
                       rel="noopener noreferrer">
                        <ImageContainer ref={el => edanra = el} className='hover'>
                            <ProjectImage src={Edanra} alt='edanra website'/>
                            <ProjectLabel2>E-housing</ProjectLabel2>
                            <VisitContainer2 className='visitor'>
                                <i className="fas fa-external-link-square-alt"/>
                            </VisitContainer2>
                        </ImageContainer>
                        <ProjectName2 ref={el => edanraTitle = el}>Edanra</ProjectName2>
                    </a>
                </ImageUltimate2>
                <ProjectNumber2>no.2</ProjectNumber2>
                <ProjectDescription2>
                    <Connector2><ConnectLine2/></Connector2>
                    <Description ref={el => connectEdanra = el}>
                        <p ref={el => storyEdanra = el}>This website was developed for Edanra, a startup that provides a
                            platform to link house owners to
                            those in need of housing especially National service personnel. It was designed using Adobe
                            XD,
                            and
                            developed with React js, css, redux and redux sagas. Its backend was hosted on firebase.</p>
                        <Button/>
                    </Description>
                </ProjectDescription2>
            </ProjectContainer>
            <ProjectContainer>
                <ImageUltimate>
                    <a href="https://frlogisticsltd.com/" target='_blank'
                       rel="noopener noreferrer">
                        <ImageContainer ref={el => fr = el} className='hover'>
                            <ProjectImage src={FrLogistics} alt='Frlogistics website'/>
                            <ProjectLabel>Logistics</ProjectLabel>
                            <VisitContainer className='visitor'>
                                <i className="fas fa-external-link-square-alt"/>
                            </VisitContainer>
                        </ImageContainer>
                        <ProjectName ref={el => frTitle = el}>Fr Logistics</ProjectName>
                    </a>
                </ImageUltimate>
                <ProjectNumber>no.3</ProjectNumber>
                <ProjectDescription>
                    <Connector ref={el => connectFr = el}><ConnectLine/></Connector>
                    <Description ref={el => storyFr = el}>
                        <p>This website was developed for FrLogistics, a logistics moving and
                            warehousing company in Ghana. It was designed with webflow and developed with HTML, CSS and
                            javascript. The backend was developed using Django.</p>
                        <Button/>
                    </Description>
                </ProjectDescription>
            </ProjectContainer>
            <ProjectContainer>
                <ImageUltimate2>
                    <a href="https://drvmroll-design-portfolio.netlify.app/" target='_blank'
                       rel="noopener noreferrer">
                        <ImageContainer ref={el => portfolio = el} className='hover'>
                            <ProjectImage src={Portfolio} alt='design portfolio website'/>
                            <ProjectLabel2>Portfolio</ProjectLabel2>
                            <VisitContainer2 className='visitor'>
                                <i className="fas fa-external-link-square-alt"/>
                            </VisitContainer2>
                        </ImageContainer>
                        <ProjectName2 style={{top: '30%'}}
                                      ref={el => portfolioTitle = el}>Design <br/> Porfolio</ProjectName2>
                    </a>
                </ImageUltimate2>
                <ProjectNumber2>no.4</ProjectNumber2>
                <ProjectDescription2>
                    <Connector2 ref={el => connectDesign = el}><ConnectLine2/></Connector2>
                    <Description ref={el => storyDesign = el}>
                        <p>Design portfolio is being developed for a design company
                            involved in
                            graphic design and
                            animations. It is being developed with React js and sass.</p>
                        <Button/>
                    </Description>
                </ProjectDescription2>
            </ProjectContainer>
        </ProjectsWrapper>
    );
};

export default Projects;
