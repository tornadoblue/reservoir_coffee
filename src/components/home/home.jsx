import React from 'react';
import {
    AboutBtn,
    BodyContainer,
    ImageContainer, ImageDescription,
    ImageHome,
    Introduction,
    IntroductionDescription,
    IntroductionHeader, LeftLocationContainer, LocationContainer,
    LocationDescription, LocationHeader,
    LocationSlogan, LocationWrapper, LowerElementContainer, LowerElementHeader,
    MainContainer,
    MapContainer,
    MenuBtn,
    MenuContainer,
    MenuHeader,
    MenuItem, PhotoContainer, PhotosContainer, RightLocationContainer, SpacingContainer,
    TopContainer,
    TopElementContainer,
} from './homeStyles';


function Home(props) {
    return (
        <>
            <MainContainer style={backgroundImage}>
                <TopContainer>
                    <TopElementContainer>
                        <Introduction>
                            <IntroductionHeader>
                                Reservoir Coffee
                            </IntroductionHeader>
                            <IntroductionDescription>
                                Locally owned and operated, Reservoir Coffee is here to supply you with
                                unbelievably great coffee at remarkable prices. We pride ourselves on our
                                use of ethically sourced beans that produce a remarkable flavour.
                                Reservoir Coffee remains the number one choice for all of your coffee needs.
                            </IntroductionDescription>
                            <AboutBtn to={"/about"}>
                                Learn More About Us
                            </AboutBtn>
                        </Introduction>
                        <ImageContainer>
                            <ImageHome src={"/images/espresso1.jpg"}/>
                        </ImageContainer>
                    </TopElementContainer>
                    <LowerElementContainer>
                        <LowerElementHeader>
                            Eat, Drink, Laugh
                        </LowerElementHeader>
                        <PhotosContainer>
                            <PhotoContainer>
                                <ImageHome src={"/images/grilled_cheese.jpg"}/>
                            </PhotoContainer>
                            <PhotoContainer>
                                <ImageHome src={"/images/coffee_home.jpg"}/>
                            </PhotoContainer>
                            <PhotoContainer>
                                <ImageHome src={"/images/iced_tea.jpg"}/>
                            </PhotoContainer>
                        </PhotosContainer>
                    </LowerElementContainer>
                </TopContainer>
                <BodyContainer>
                    <MenuHeader>
                        Menu
                    </MenuHeader>
                    <MenuContainer>
                        <MenuItem>
                            <table style={tableStyles}>
                                <tr>
                                    <th style={tableHeaderStyles}>Coffee</th>
                                    <th style={tableHeaderStyles}>12 oz.</th>
                                    <th style={tableHeaderStyles}>16 oz.</th>
                                </tr>
                                <tr>
                                    <td>Brew</td>
                                    <td>2.75</td>
                                    <td>3.00</td>
                                </tr>
                                <tr>
                                    <td>Latte</td>
                                    <td>4.00</td>
                                    <td>4.50</td>
                                </tr>
                                <tr>
                                    <td>Americano</td>
                                    <td>3.00</td>
                                    <td>3.25</td>
                                </tr>
                                <tr>
                                    <td>Mocha</td>
                                    <td>4.75</td>
                                    <td>5.25</td>
                                </tr>
                            </table>
                        </MenuItem>
                        <MenuItem>
                            <table style={tableStyles}>
                                <tr>
                                    <th style={tableHeaderStyles}>Traditional</th>
                                    <th style={tableHeaderStyles}>12 oz.</th>
                                    <th style={tableHeaderStyles}>16 oz.</th>
                                </tr>
                                <tr>
                                    <td>Cappuccino</td>
                                    <td>3.75</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Macchiato</td>
                                    <td>3.25</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Espresso</td>
                                    <td>2.75</td>
                                    <td>-</td>
                                </tr>
                            </table>
                        </MenuItem>
                        <MenuItem>
                            <table style={tableStyles}>
                                <tr>
                                    <th style={tableHeaderStyles}>Not Coffee</th>
                                    <th style={tableHeaderStyles}>12 oz.</th>
                                    <th style={tableHeaderStyles}>16 oz.</th>
                                </tr>
                                <tr>
                                    <td>Loose Leaf Tea</td>
                                    <td>-</td>
                                    <td>3.00</td>
                                </tr>
                                <tr>
                                    <td>London Fog</td>
                                    <td>4.25</td>
                                    <td>4.50</td>
                                </tr>
                                <tr>
                                    <td>Matcha Latte</td>
                                    <td>4.50</td>
                                    <td>5.00</td>
                                </tr>
                                <tr>
                                    <td>Blueberry Matcha</td>
                                    <td>4.50</td>
                                    <td>5.00</td>
                                </tr>
                                <tr>
                                    <td>Chai Tea Latte</td>
                                    <td>4.00</td>
                                    <td>4.50</td>
                                </tr>
                                <tr>
                                    <td>Hot Chocolate</td>
                                    <td>3.75</td>
                                    <td>4.25</td>
                                </tr>
                                <tr>
                                    <td>Steamed Milk</td>
                                    <td>3.25</td>
                                    <td>3.50</td>
                                </tr>
                            </table>
                        </MenuItem>
                        <MenuItem>
                            <table style={tableStyles}>
                                <tr>
                                    <th style={tableHeaderStyles}>Summer</th>
                                    <th style={tableHeaderStyles}>12 oz.</th>
                                    <th style={tableHeaderStyles}>16 oz.</th>
                                </tr>
                                <tr>
                                    <td>Cold Brew</td>
                                    <td>3.75</td>
                                    <td>4.25</td>
                                </tr>
                                <tr>
                                    <td>Nitro Cold Brew</td>
                                    <td>4.50</td>
                                    <td>5.00</td>
                                </tr>
                                <tr>
                                    <td>Iced Americano</td>
                                    <td>3.25</td>
                                    <td>3.50</td>
                                </tr>
                                <tr>
                                    <td>Iced Latte</td>
                                    <td>4.00</td>
                                    <td>4.50</td>
                                </tr>
                                <tr>
                                    <td>49th Milkshake</td>
                                    <td>6.00</td>
                                    <td>7.00</td>
                                </tr>
                                <tr>
                                    <td>Nitro Float</td>
                                    <td>4.75</td>
                                    <td>5.25</td>
                                </tr>
                                <tr>
                                    <td>Affogato</td>
                                    <td>4.50</td>
                                    <td>5.00</td>
                                </tr>
                                <tr>
                                    <td>Iced Tea</td>
                                    <td>3.00</td>
                                    <td>3.25</td>
                                </tr>
                                {/*<tr>*/}
                                {/*    <td>Iced Matcha/Blue</td>*/}
                                {/*    <td>4.50</td>*/}
                                {/*    <td>5.00</td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td>Iced Chai</td>*/}
                                {/*    <td>4.00</td>*/}
                                {/*    <td>4.50</td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td>Lemonade</td>*/}
                                {/*    <td>3.25</td>*/}
                                {/*    <td>3.75</td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td>Smoothie</td>*/}
                                {/*    <td>6.00</td>*/}
                                {/*    <td>7.00</td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td>Tonic Espresso</td>*/}
                                {/*    <td>3.75</td>*/}
                                {/*    <td>4.25</td>*/}
                                {/*</tr>*/}
                            </table>
                        </MenuItem>
                        <MenuBtn to={"/menu"}>
                            View Our Full Menu
                        </MenuBtn>
                    </MenuContainer>
                    <SpacingContainer>
                        <LocationWrapper>
                            <LocationContainer>
                                <LeftLocationContainer>
                                    <MapContainer>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.7654930180843!2d-120.36024964866681!3d50.66861447940136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2c5ec2eaa95d%3A0xc9b10305ce243b14!2sReservoir%20Coffee!5e0!3m2!1sen!2sca!4v1636344072150!5m2!1sen!2sca"
                                            width="600" height="450" style={{border: "0"}} allowFullScreen="yes" loading="lazy"/>
                                    </MapContainer>
                                </LeftLocationContainer>
                                <RightLocationContainer>
                                    <LocationHeader>
                                        Located In The <span style={{color: "#0FA3B1"}}>Heart</span> Of Kamloops
                                    </LocationHeader>
                                    <LocationDescription>
                                        Directly across the street from TRU, overlooking the beautiful Kamloops landscape
                                        is Reservoir Coffee. We can't wait to serve you the best coffee in Kamloops.
                                        Come study, enjoy your lunch break, or just catch up with an old friend with us
                                        here at Reservoir Coffee.
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        No detail overlooked, it all matters.
                                    </LocationDescription>
                                    <LocationSlogan>
                                        <span style={{color: "#F9F7F3"}}>Location</span>,
                                        <span style={{color: "#E8AA14"}}> Atmosphere</span>,
                                        <span style={{color: "#0FA3B1"}}> Coffee</span>
                                    </LocationSlogan>
                                </RightLocationContainer>
                            </LocationContainer>
                        </LocationWrapper>
                    </SpacingContainer>
                </BodyContainer>
            </MainContainer>
        </>
    );
}

const backgroundImage = {
    backgroundImage: 'url(/public/images/wood3.jpg)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundBlendMode: "multiply",
}

const tableStyles = {
    width: "100%",
    fontSize: "1.3rem",
    tableLayout: "fixed",
    fontFamily: "Staatliches"
}

const tableHeaderStyles = {
    color: "#0FA3B1"
}

export default Home;