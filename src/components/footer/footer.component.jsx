import React from 'react';
import {
    Copyright,
    FooterHeader,
    FooterMainContainer, FooterRight,
    FooterSocial,
    FooterSub,
    FooterText,
    FooterWrapper, MailBox, MailText
} from "./footer.style";
import {Social} from "../menu/menu.style";

const Footer = () => {

    return (
        <FooterWrapper>
            <FooterMainContainer>
                <FooterText>
                    <FooterHeader>Reach out</FooterHeader>
                    <FooterSub>Don't hesitate to reach me via any of my social media handles or by official mail. I am
                        always
                        available for a dialogue.</FooterSub>
                </FooterText>
                <FooterRight>
                    <MailText>Mail me</MailText>
                    <a href="mailto:abbeyniiodenkey@gmail.com" target='_blank' rel="noopener noreferrer"><MailBox
                        className='hover'>abbeyniiodenkey@gmail.com</MailBox></a>
                    <Copyright>&copy; 2020 Nii Odenkey Abbey</Copyright>
                </FooterRight>
            </FooterMainContainer>
            <FooterSocial>
                <Social>
                    <a href="https://web.facebook.com/nii.o.abbey" rel='noopener noreferrer' target='_blank'><i
                        className="fab fa-facebook-f hover"/></a>
                    <a href="https://twitter.com/nii_odenkey_" target='_blank' rel='noopener noreferrer'>
                        <i className="fab fa-twitter hover"/></a>
                    <a href="https://www.instagram.com/n_odenkey/" target='_blank' rel='noopener noreferrer'><i
                        className="fab fa-instagram hover"/></a>
                    <a href="https://www.linkedin.com/in/samuel-abbey-618957168/" target='_blank'
                       rel='noopener noreferrer'><i
                        className="fab fa-linkedin hover"/></a>
                    {/*<i className="fab fa-medium-m hover"/>*/}
                    <a href="https://github.com/Nodenkey" target='_blank'
                       rel='noopener noreferrer'><i className="fab fa-github hover"/></a>
                </Social>
            </FooterSocial>
        </FooterWrapper>
);
};

export default Footer;
