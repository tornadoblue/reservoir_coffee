import React from 'react';
import {
    AboutBtn,
    BodyContainer, GalleryBtn,
    ImageContainer,
    ImageHome, InnerDescriptionParagraph,
    Introduction,
    IntroductionDescription,
    IntroductionHeader, LeftLocationContainer, LocationContainer,
    LocationDescription, LocationHeader,
    LocationSlogan, LocationTitle, LocationWrapper, LowerElementContainer, LowerElementHeader,
    MainContainer,
    MapContainer,
    MenuBtn,
    MenuContainer,
    MenuHeader,
    MenuItem, PhotoContainer, PhotosContainer, RightLocationContainer, SpacingContainer,
    TopContainer,
    TopElementContainer,
} from './homeStyles';
import {Col, Row} from "react-bootstrap";
import {MenuItemHeader} from "../menu/menuStyles";


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
                                Reservoir is a specialty coffee shop which is locally owned and operated in Kamloops, BC since 2015.
                                We proudly serve 49 th Parallel coffee and our baristas are highly trained and are working with the best
                                equipment to provide the highest quality in our coffee, teas, pastries and other breakfast and lunch
                                items. We have a warm and inviting atmosphere with a friendly and passionate team and hope you
                                come experience our café.
                            </IntroductionDescription>
                            <AboutBtn to={"/about"}>
                                Learn More About Us
                            </AboutBtn>
                        </Introduction>
                        <ImageContainer>
                            <ImageHome src={process.env.PUBLIC_URL + "/images/coffee_shop1.png"}/>
                        </ImageContainer>
                    </TopElementContainer>
                    <LowerElementContainer>
                        <LowerElementHeader>
                            Eat, Drink, Relax
                        </LowerElementHeader>
                        <PhotosContainer>
                            <PhotoContainer>
                                <ImageHome src={process.env.PUBLIC_URL + "/images/coffee_shop22.png"}/>
                            </PhotoContainer>
                            <PhotoContainer>
                                <ImageHome src={process.env.PUBLIC_URL + "/images/coffee_shop26.png"}/>
                            </PhotoContainer>
                            <PhotoContainer>
                                <ImageHome src={process.env.PUBLIC_URL + "/images/coffee_shop4.png"}/>
                            </PhotoContainer>
                        </PhotosContainer>
                        <GalleryBtn to={"/gallery"}>
                            View Our Gallery
                        </GalleryBtn>
                    </LowerElementContainer>
                </TopContainer>
                <BodyContainer>
                    <MenuHeader>
                        Menu
                    </MenuHeader>
                    <MenuContainer>
                        <Row>
                            <Col>
                                <MenuItemHeader>
                                    Coffee
                                </MenuItemHeader>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <MenuItem>
                                    Brew
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Latte
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Americano
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Mocha
                                </MenuItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <MenuItemHeader>
                                    Traditional
                                </MenuItemHeader>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <MenuItem>
                                    Cappuccino
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Macchiato
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Espresso
                                </MenuItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <MenuItemHeader>
                                    Summer
                                </MenuItemHeader>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <MenuItem>
                                    Cold Brew
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Nitro Cold Brew
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Iced Americano
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Iced Latte
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    49th Milkshake
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Nitro Float
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Affogato
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Iced Tea
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Iced Matcha/Blue
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Iced Chai
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Lemonade
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Smoothie
                                </MenuItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <MenuItemHeader>
                                    Not Coffee
                                </MenuItemHeader>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <MenuItem>
                                    Loose Leaf Tea
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    London Fog
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Matcha Latte
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Blueberry Matcha
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Chai Tea Latte
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Hot Chocolate
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Steamed Milk
                                </MenuItem>
                            </Col>
                        </Row>
                        <MenuBtn to={"/menu"}>
                            View Our Full Menu
                        </MenuBtn>
                    </MenuContainer>
                    <SpacingContainer>
                        <LocationWrapper>
                            <LocationContainer>
                                <LocationTitle>
                                    Come Visit Us
                                </LocationTitle>
                                <LeftLocationContainer>
                                    <MapContainer>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.7654930180843!2d-120.36024964866681!3d50.66861447940136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e2c5ec2eaa95d%3A0xc9b10305ce243b14!2sReservoir%20Coffee!5e0!3m2!1sen!2sca!4v1636344072150!5m2!1sen!2sca"
                                            width="600"
                                            height="450"
                                            style={{border: "0"}}
                                            allowFullScreen="yes"
                                            loading="lazy"
                                            title={"map"}/>
                                    </MapContainer>
                                </LeftLocationContainer>
                                <RightLocationContainer>
                                    <LocationHeader>
                                        Located In The <span style={{color: "#E8AA14"}}>Heart</span> Of Kamloops
                                    </LocationHeader>
                                    <LocationDescription>
                                        Directly across the street from TRU, overlooking the beautiful Kamloops landscape
                                        is Reservoir Coffee. We can't wait to serve you the best coffee in Kamloops.
                                        Come study, enjoy your lunch break, or just catch up with an old friend with us
                                        here at Reservoir Coffee.
                                    </LocationDescription>
                                    <InnerDescriptionParagraph>
                                            No detail overlooked, it all matters.
                                    </InnerDescriptionParagraph>
                                    <LocationSlogan>
                                        <span style={{color: "#F9F7F3"}}>Location</span>,
                                        <span style={{color: "#E8AA14"}}> Atmosphere</span>,
                                        <span style={{color: "#2dccd3"}}> Coffee</span>
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
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/wood3.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundBlendMode: "multiply",
}

const tableHeaderStyles = {
    color: "#2dccd3",
    fontSize: "2.5rem"
}

export default Home;