import React from 'react';
import {
    FooterForm,
    FooterHeader,
    FooterMainContainer,
    FooterSocial,
    FooterSub,
    FooterText,
    FooterWrapper
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
                <FooterForm
                    action="https://formspree.io/xbjzaewd"
                    method="POST"
                >
                    <input type="hidden" name="_next" value="//path//" />
                    <input type="text" name="_gotcha" style={{display:"none"}}/>
                    <label>
                        Email:
                        <input type="email" name="_replyto" required/>
                    </label>
                    <label>
                        Message:
                        <textarea name="message" rows="10" cols="50" required/>
                    </label>
                    <button type="submit" className="hover">Send</button>
                </FooterForm>
            </FooterMainContainer>
            <FooterSocial>
                <Social>
                    <i className="fab fa-facebook-f hover"/>
                    <i className="fab fa-twitter hover"/>
                    <i className="fab fa-instagram hover"/>
                    <i className="fab fa-linkedin hover"/>
                    <i className="fab fa-medium-m hover"/>
                    <i className="fab fa-github hover"/>
                </Social>
            </FooterSocial>
        </FooterWrapper>
    );
};

export default Footer;
