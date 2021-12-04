import styled from "styled-components";

export const GalleryWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding-bottom: 5%;
    background: #12130F;
`

export const GalleryContainer = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 3%;
    
    @media screen and (max-width: 900px) {
        width: 95%;
    }
`

export const GalleryHeader = styled.div`
    text-align: center;
    color: #fff;
    width: 60%;
    margin: auto;
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;
    text-shadow: 4px 4px 7px black;
    border-bottom: 3px solid #2dccd3;
    
    @media screen and (max-width: 900px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 587px) {
        width: 70%;
    }
`