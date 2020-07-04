import React from 'react';
import {HomeWrapper} from "./home.style";
import Landing from "../../components/landing/landing.component";
import NavBar from "../../components/navbar/navbar.component";
import Languages from "../../components/languages/languages.component";
import Footer from "../../components/footer/footer.component";
import Projects from "../../components/projects/projects.component";
import About from "../../components/about/about.component";
import Resume from "../../components/resume/resume.component";

const Home = () => {


    return (
        <>
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
