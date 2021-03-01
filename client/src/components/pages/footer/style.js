import styled  from 'styled-components'
import {Link } from 'react-router-dom'

export const FooterContainer= styled.div`
background-color: #101522;
padding: 4rem 0 0 0;
dipslay: flex;
flex-direction: row;
justify-content: center;
text-align: center
`
export const Con = styled.div`
display:flex;
justify-content:space-around;


@media screen and (max-width:820px){
    flex-direction:column;
    width: 80%;
   margin:auto

}

`
export const FooterSubscription= styled.section`
dipslay: flex;
flex-direction: colum;
justify-content: space-between;
align-items:center;
text-align: start;
margin-bottom:24px;
padding: 24px 15% 24px 3%;
color:#fff;
@media screen and (max-width:820px){
    
    margin:auto;
    text-align:center;
  
}

`
export const FooterSubheading= styled.p`
margin-bottom:4px;
font-size:26px;
`
export const FooterSubtext= styled.div`
margin-bottom:24px;
font-size:15px;
`
export const Form= styled.form`
display:flex;
justify-content: center;
align-items: center;
margin-bottom:24px;
font-size:24px;

@media screen and (max-width:820px){
    
    width: 80%:
  
}
`
export const FormInput= styled.input`
padding:10px 20px;
border-radius:2px;
margin-right:10px;
outline:none;
border:none;
font-size:16px;
border:1px solid #fff;

&::placeholder{
    color:#242424;
}
@media screen and (max-width:820px){
    width:100%
    margin 0 0 16px 0;
}
`
export const Button= styled.button`
padding:10px 20px;
border-radius:2px;
margin-right:10px;
outline:none;
border:none;
font-size:16px;
border:1px solid #fff;
&:hover{
    background-color:#0467fb;
    border:none
}
@media screen and (max-width:820px){
    width:100%
    margin 0 0 16px 0;
}
`
export const FooterLinksContainer= styled.div`
width:100%;
max-width:1000px;
display:flex;
justify-content:center;
text-align:center;
margin:auto;


@media screen (max-width:820px){
    paddin-top:32px
}
`
export const FooterLinkWraper= styled.div`
display:flex;

@media screen and (max-width:820px){
    flex-direction:column
}
`
export const FooterLinkItems= styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:16px;
text-align:left;
width:160px;
box-sizing:border-box;
color:#fff;

@media screen (max-width:820px){
    margin:0
    paddin:10px;
    width:100%;
   
}
`
export const FooterLink= styled(Link)`
color: #fff;
text-decoration:none;
margin-bottom:0.5rem;

&:hover{
    color:#0467fb;
    transition:0.3 ease-out;
}
`
export const FooterLinkTitles= styled.div`
margin-bottom:16px;
font-size:24px;
font-weight:bold

`
export const SocialMedia= styled.section`
max-width:1000px;
width:100%;
margin:auto;
`
export const SocialMediaWrap= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:90%;
max-width:1000px;
margin:40px auto 0 auto;
@media screen and (max-width:820px){
    flex-direction:column
}
`
export const SocialLogo= styled(Link)`
color: #fff ;
justify-self:start;
cursor:pointer;
text-decoration:none;
font-size:2rem;
display:flex;
align-items:center;
margin-bottom:16px
`
export const SocialIcon= styled.h4`
margin-right:10px;
margin-top:30px

`
export const WebsiteRights= styled.small`
color: #fff;
margin-top:10px

`
export const SocialIcons = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:240px
`
export const SocialIconLinks = styled.a`
color:#fff;
font-size:24px;
`

