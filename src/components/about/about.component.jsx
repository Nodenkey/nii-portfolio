import React from 'react';
import {AboutHeader, AboutWrapper, Myself, MyselfWrapper, Quote, QuoteName} from "./about.style";

const About = () => {
    return (
        <AboutWrapper>
            <AboutHeader>A little about me</AboutHeader>
            <Quote>"People ignore design that ignores people"</Quote>
            <QuoteName>Frank Chimero</QuoteName>
            <MyselfWrapper>
                <Myself>
                    Being very inquisitive and a person who liked to ask so many questions as a child,
                    I have always wanted to figure out how things worked and help make them better.
                    Learning web design has always been a very exciting journey for me; enabling me put myself in
                    users'
                    shoes and make sure those potential users, visit a website that works and leave the
                    websites with a great experience. <br/>
                    I am currently a freelance web developer based in Accra, Ghana. I have worked on projects in areas
                    of leasing, creative design, portfolios, logistics, E-commerce. Web design and development is my way of feeling
                    alive. And I make it my topmost priority to learn more about it each and every day.
                </Myself>
            </MyselfWrapper>
        </AboutWrapper>
    );
};

export default About;
