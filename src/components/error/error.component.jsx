import React, {useEffect} from 'react';
import {ErrorHeader, ErrorImageContainer, ErrorSubText, ErrorText, ErrorWrapper} from "./error.style";
import {ErrorImage} from "../icons/icons.component";
import { HashLink as Link } from 'react-router-hash-link';
import {gsap} from "gsap/all";
import {MailBox} from "../footer/footer.style";

const Error = () => {
    useEffect(() => {
       gsap.to('#boy-torso', {rotate : -10, transformOrigin : 'bottom right', duration : 1, yoyo : true, repeat : -1});
       gsap.to('#woman-torso', {rotate : -10, transformOrigin : 'bottom', duration : 1, yoyo : true, repeat : -1, delay: 1});
       gsap.to('#right-lens', {rotate : -4, transformOrigin : 'bottom 50%', duration : 1, yoyo : true, repeat : -1, delay: 2});
    })
    return (
        <ErrorWrapper>
            <ErrorText>
                <ErrorHeader>We searched everywhere</ErrorHeader>
                <ErrorSubText>The page you are looking for is missing. It might have been removed or you entered an
                    incorrect address. <br/>
                You can return home by clicking the button below</ErrorSubText>
                <Link to='/'><MailBox style={{display: 'inline'}} className='hover'>Take me home</MailBox></Link>
            </ErrorText>
            <ErrorImageContainer>
                <ErrorImage/>
            </ErrorImageContainer>
        </ErrorWrapper>
    );
};

export default Error;
