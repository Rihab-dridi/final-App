import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";

import {FooterContainer, FooterSubscription, FooterSubheading, FooterSubtext, Form, FormInput, Button,
FooterLinksContainer,FooterLinkWraper, FooterLinkItems, FooterLinkTitles, FooterLink,Con,SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLinks, SocialIcons, SocialIcon
} from './style'

import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { getEmail } from "../../../Redux/Actions/emails/emails";
function Footer() {

const dispatch=useDispatch()
const [email,setEmail]=useState()

const addEmailHandeler =(e)=>{
    setEmail(e.target.value)
 }


 const onClick = (e) =>{
      e.preventDefault()
     dispatch(getEmail({email}))
     setEmail('')
 }

    

    return (
        <FooterContainer>
            <Con >
            <FooterSubscription>
                <FooterSubheading>
                    if you have any inqueries, please leave your email 
                </FooterSubheading>
                <FooterSubtext>
                    we will contact you as soon as possible 
                </FooterSubtext>

                <Form>
                    <FormInput name='email' type="text" placeholder='enter your email' 
                    onChange={addEmailHandeler} 
                    value={email}/>
                    <Button 
                    onClick={onClick}
                 > Send </Button>
                </Form>
                
            </FooterSubscription>
          
            <FooterLinksContainer>
                <FooterLinkWraper>
                   <FooterLinkItems>
                       <FooterLinkTitles>
                           Contact us
                       </FooterLinkTitles>
                       <FooterLink to='/register'><i className="fas fa-phone-volume"> +216 XX XXX XXX</i></FooterLink>
                       <FooterLink to='/register'><i className="fas fa-phone-volume"> +216 XX XXX XXX</i></FooterLink>
                       <FooterLink to='#'><i className="fas fa-at"> email1@gmail.com </i></FooterLink>
                       <FooterLink to='#'><i className="fas fa-at"> email2@gmail.com </i></FooterLink>
                       <FooterLink to='#'><i class="fas fa-map-marker-alt"> city.street.code</i></FooterLink>
                       
                      
                   </FooterLinkItems>
                   <FooterLinkItems>
                       <FooterLinkTitles>
                           Videos
                       </FooterLinkTitles>
                       <FooterLink to='/register'>Register</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                   </FooterLinkItems>
                   <FooterLinkItems>
                       <FooterLinkTitles>
                           useful Links
                       </FooterLinkTitles>
                       <FooterLink to='/register'>Register</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                   </FooterLinkItems>
                   <FooterLinkItems>
                       <FooterLinkTitles>
                           Legacy
                       </FooterLinkTitles>
                       <FooterLink to='/register'>Register</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                       <FooterLink to='#'>Something</FooterLink>
                   </FooterLinkItems>
                </FooterLinkWraper>
            </FooterLinksContainer>
            </Con>
            <SocialMedia>
                <SocialMediaWrap>

                    <SocialLogo to='/' >
                        <SocialIcon>
                            POG
                        </SocialIcon>
                    </SocialLogo>
                    <WebsiteRights> &copy; {new Date().getFullYear()} <a href="#"> developed by : Dridi Rihab</a> </WebsiteRights>
                    <SocialIcons>
                    <SocialIconLinks href='/' target='_blank' 
                    aria-label="Facebook">
                        <FaFacebook/>
                    </SocialIconLinks>
                    <SocialIconLinks href='/' target='_blank' 
                    aria-label="Instagram">
                        <FaInstagram/>
                    </SocialIconLinks>
                    <SocialIconLinks href='/' target='_blank' 
                    aria-label="Linkedin">
                        <FaLinkedin/>
                    </SocialIconLinks>
                    <SocialIconLinks href='/' target='_blank' 
                    aria-label="Twitter">
                        <FaTwitter/>
                    </SocialIconLinks>
                    </SocialIcons>

                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer

