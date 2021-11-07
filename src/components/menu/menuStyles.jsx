import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: #00B4DB;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

export const MainMenuContainer = styled.div`
    color: #fff;
    background: #fff;
    display: flex;
    width: 85%;
    height: 1000px;
    justify-content: center;
    margin: auto;
    border-radius: 3px;
    box-shadow: 12px 0 15px -4px rgba(31, 73, 125, 0.8), -12px 0 8px -4px rgba(31, 73, 125, 0.8);    
`