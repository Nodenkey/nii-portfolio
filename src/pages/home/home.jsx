import React, {useEffect, useRef} from 'react';
import {Cursor, HomeWrapper} from "./home.style";
import Landing from "../../components/landing/landing.component";
import NavBar from "../../components/navbar/navbar.component";
import Languages from "../../components/languages/languages.component";
import Resume from "../../components/resume/resume.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    let cursor = useRef(null);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            cursor.style.top = (e.pageY - 20) + 'px';
            cursor.style.left = (e.pageX - 20) + 'px';
        });
       window.addEventListener('mousemove', (e) => {
           const hover = document.querySelectorAll('.hover');
           hover.forEach((el) => {
               el.addEventListener('mouseover', () => {
                   cursor.style.transform = 'scale(1.7)'
               })
               el.addEventListener('mouseout', () => {
                   cursor.style.transform = 'scale(1)'
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
                <Languages/>
                <Resume/>
                <Footer/>
            </HomeWrapper>
        </>
    );
};

export default Home;
