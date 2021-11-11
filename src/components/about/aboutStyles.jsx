import styled from 'styled-components';

export const IntroductionDescriptionAbout = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 40px;
    
    @media screen and (max-width: 1100px) {
        padding-top: 20px;
        font-size: 0.92rem;
        
    }
    @media screen and (max-width: 900px) {
        padding-top: 20px;
        padding-right: 0;
        text-align: center;
        margin: auto;
    }
`