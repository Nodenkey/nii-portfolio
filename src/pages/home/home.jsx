import React, {useEffect, useRef} from 'react';
import {Cursor, HomeWrapper} from "./home.style";
import Landing from "../../components/landing/landing.component";
import NavBar from "../../components/navbar/navbar.component";
import Languages from "../../components/languages/languages.component";

const Home = () => {
    let cursor = useRef(null);

    useEffect(() => {
        const hover = document.querySelectorAll('.hover');
        window.addEventListener('mousemove', (e) => {
            cursor.style.top = (e.pageY - 20) + 'px';
            cursor.style.left = (e.pageX - 20) + 'px';
        });
        hover.forEach((el) => {
            el.addEventListener('mouseover', () => {
                cursor.style.transform = 'scale(1.7)'
            })
            el.addEventListener('mouseout', () => {
                cursor.style.transform = 'scale(1)'
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
            </HomeWrapper>
        </>
    );
};

export default Home;
