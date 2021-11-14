import React from 'react';
import {
    ImageContainer,
    ImageHome,
    Introduction,
    IntroductionHeader,
    MainContainer,
    TopContainer,
    TopElementContainer
} from "../home/homeStyles";
import {
    AboutImageContainer, AboutIntroduction, AboutIntroductionHeader,
    IntroductionDescriptionAbout,
    TopAboutContainer,
    TopAboutElementContainer
} from "./aboutStyles";

function About(props) {
    return (
        <>
            <MainContainer style={backgroundImage}>
                <TopAboutContainer>
                    <TopAboutElementContainer>
                        <AboutIntroduction>
                            <AboutIntroductionHeader>
                                Our Story
                            </AboutIntroductionHeader>
                            <IntroductionDescriptionAbout>
                                Reservoir Coffee has been built with the collaborated efforts of Kristine Brynjolfson
                                and Paul Berry. Kristine has a strong passion for coffee and had always dreamed of
                                owning her own business.  She is a professional accountant and has a business degree
                                with many years of experience predominately in the food manufacturing industry working
                                as the Controller for Western Waffles, a manufacturer of frozen waffles.  Paul is a
                                long time Kamloops business owner of Spoke Bike and Ski and brings the creative side to
                                the coffee shop.  He is the designer and general contractor behind the coffee shop
                                which first opened in December of 2015.  We have experienced many coffee shops around
                                the world and saw an opportunity to bring something a little different to Kamloops.
                            </IntroductionDescriptionAbout>
                        </AboutIntroduction>
                        <AboutImageContainer>
                            <ImageHome src={process.env.PUBLIC_URL + "/images/coffee2.jpg"}/>
                        </AboutImageContainer>
                    </TopAboutElementContainer>
                </TopAboutContainer>
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

export default About;