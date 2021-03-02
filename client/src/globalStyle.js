import styled,{createGlobalStyle} from 'styled-components';

export const GlobalStyle= createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'Source Sans Pro', sans-serif;
}
`

export const Container =styled.div`
z-index:1;
width:100%;
margin-left:auto;
margin-right:auto;
padding-right:50px;
padding-left:50px;

@media screen and (max-width:991px)
padding-right:30px;
padding-left:30px;
`
export const Button= styled.button`
border-radius:4px;
background: ${({primary})=>(primary? '#4B59F7': '#0467FB')};
white-space:nowrap;
padding:${({big})=>( big? '12px 64px': '3px 10px') };
font-size:${({fontBig})=>( fontBig? '20px': '16px') };
margin-top:13px;
outline:none;
border:none;
cursor:pointer;
margin-left:0px;
margin-right:0px;
color:#fff;

&:hover{
    transition: all 0.3s ease-out;
    border-color: #4B59F7;
    background:#fff;
    background:${({primary})=>(primary? '#242424': '#4B59F7')};
    text-decoration:none;
    
    outline:none;
}

    @media screen and (max-width:920px){
        width:100%;
        margin-left:0px;
    margin-right:0px;
    margin-top:0px;
    
}

`
