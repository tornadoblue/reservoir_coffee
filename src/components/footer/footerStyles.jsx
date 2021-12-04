import styled from 'styled-components'

export const FooterContainer = styled.div`
    position: relative;
`

export const FooterInnerContainer = styled.div`
    position: relative;
    display: flex;
    align-content: center;
    width: 80%;
    height: 100%;
    margin: auto;
    padding-bottom: 3%;
    overflow: hidden;
    
    @media screen and (max-width: 800px) {
        flex-wrap: wrap;
    }
`

export const LinkContainer = styled.div`
    width: 100%;
    float: left;
    height: 100%;
`

export const LinkHeader = styled.h1`
    color: #2dccd3;
    font-size: 2rem;
    text-align: center;
    margin: 5% auto;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    
    @media screen and (max-width: 1100px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        border-bottom: 2px solid #E8AA14;
    }
`

export const HoursContainer = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100%;
`

export const FooterIcon = styled.img`
    float: left;
`

export const IconDescription = styled.div`
    padding-left: 5px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
`

export const FooterItemRow = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const FooterHoursTable = styled.table`
    font-family: 'Montserrat', sans-serif;
    margin: 5% auto;
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
    color: #fff;
`

export const FooterItem = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 8px;
    justify-content: center;
    text-decoration: none;
    
    &:hover {
        text-decoration: none;
        filter: brightness(0) saturate(100%) invert(85%) sepia(25%) saturate(5459%) hue-rotate(353deg) brightness(95%) contrast(91%);
    }
`