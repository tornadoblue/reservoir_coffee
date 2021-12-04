import React from 'react';
import {LogoImg} from "../menu/menuStyles";
import {
    FooterContainer, FooterHoursTable,
    FooterIcon,
    FooterInnerContainer, FooterItem, FooterItemRow,
    HoursContainer, IconDescription,
    LinkContainer,
    LinkHeader
} from "./footerStyles";

function Footer(props) {
    return (
        <>
            <FooterContainer style={backgroundImage}>
                <FooterInnerContainer>
                    <LinkContainer>
                        <LinkHeader>Contact Us</LinkHeader>
                        <FooterItemRow>
                            <FooterItem href={"tel: 12503122069"}>
                                <FooterIcon src={process.env.PUBLIC_URL + "/images/phone.png"} style={{filter: "invert(1)"}}/>
                                <IconDescription>
                                    250-312-2069
                                </IconDescription>
                            </FooterItem>
                            <FooterItem href={"mailto: reservoircoffee@gmail.com"}>
                                <FooterIcon src={process.env.PUBLIC_URL + "/images/mail2.png"} style={{filter: "invert(1)"}}/>
                                <IconDescription>
                                    reservoircoffee@gmail.com
                                </IconDescription>
                            </FooterItem>
                        </FooterItemRow>
                        <LinkHeader>Follow Us</LinkHeader>
                        <FooterItemRow>
                            <FooterItem href={"https://www.instagram.com/reservoircoffee/"}>
                                <FooterIcon src={process.env.PUBLIC_URL + "/images/instagram.png"} style={{filter: "invert(1)"}}/>
                                <IconDescription>
                                    @reservoircoffee
                                </IconDescription>
                            </FooterItem>
                            <FooterItem href={"https://www.facebook.com/reservoircoffee/"}>
                                <FooterIcon src={process.env.PUBLIC_URL + "/images/facebook.png"} style={{filter: "invert(1)"}}/>
                                <IconDescription>
                                    /reservoircoffee
                                </IconDescription>
                            </FooterItem>
                        </FooterItemRow>
                    </LinkContainer>
                    <HoursContainer>
                        <LinkHeader>
                            Business Hours
                        </LinkHeader>
                        <FooterHoursTable>
                            <tr>
                                <th>Sunday</th>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <th>Monday</th>
                                <td>8:00 AM - 4:00 PM</td>
                            </tr>
                            <tr>
                                <th>Tuesday</th>
                                <td>8:00 AM - 4:00 PM</td>
                            </tr>
                            <tr>
                                <th>Wednesday</th>
                                <td>8:00 AM - 4:00 PM</td>
                            </tr>
                            <tr>
                                <th>Thursday</th>
                                <td>8:00 AM - 4:00 PM</td>
                            </tr>
                            <tr>
                                <th>Friday</th>
                                <td>8:00 AM - 4:00 PM</td>
                            </tr>
                            <tr>
                                <th>Saturday</th>
                                <td>9:00 AM - 4:00 PM</td>
                            </tr>
                        </FooterHoursTable>
                        <LogoImg src={process.env.PUBLIC_URL + "/images/Reservoir_Teal.png"}/>
                    </HoursContainer>
                </FooterInnerContainer>
            </FooterContainer>
        </>
    );
}

const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/beans4.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0,0,0,0.50)",
    backgroundBlendMode: "multiply",
}

export default Footer;