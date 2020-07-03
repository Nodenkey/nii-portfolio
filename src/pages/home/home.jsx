import React, {useEffect, useRef} from 'react';
import {Cursor, HomeWrapper} from "./home.style";
import Landing from "../../components/landing/landing.component";
import NavBar from "../../components/navbar/navbar.component";
import Languages from "../../components/languages/languages.component";
import Footer from "../../components/footer/footer.component";
import Projects from "../../components/projects/projects.component";
import About from "../../components/about/about.component";
import gsap from "gsap";
import Resume from "../../components/resume/resume.component";

const Home = () => {
    let cursor = useRef(null);
    const tl = gsap.timeline();


    useEffect(() => {
        tl.to(cursor, {scale: 1, duration: .3});
        window.addEventListener('mousemove', (e) => {
            cursor.style.top = (e.pageY - 10) + 'px';
            cursor.style.left = (e.pageX -10 ) + 'px';
        });
       window.addEventListener('mousemove', (e) => {
           const hover = document.querySelectorAll('.hover');
           cursor.classList.add('reverse-cursor');
           hover.forEach((el) => {
               el.addEventListener('mouseover', () => {
                   tl.reverse()
               })
               el.addEventListener('mouseout', () => {
                   tl.play();
               })
           })
       })
    })

    return (
        <>
            <Cursor ref={el => cursor = el}/>
            <HomeWrapper>
                <NavBar/>
                <Landing/>
                <About/>
                <Languages/>
                <Projects/>
                <Resume/>
                <Footer/>
            </HomeWrapper>
        </>
    );
};

export default Home;
