import React from 'react';
import Gallery from "react-photo-gallery";
import {GalleryContainer, GalleryHeader, GalleryWrapper} from "./gallerStyles";

function GalleryPage(props) {

    const photos = [
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop1.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop2.png",
            width: 1,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop3.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop4.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop8.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop6.png",
            width: 1,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop7.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop5.png",
            width: 1,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop9.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop10.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop11.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop12.png",
            width: 5,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop13.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop14.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop15.png",
            width: 5,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop16.png",
            width: 2,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop17.png",
            width: 1,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop21.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop19.png",
            width: 2,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop20.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop18.png",
            width: 1,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop22.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop23.png",
            width: 1,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop25.png",
            width: 2,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop26.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop27.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop28.png",
            width: 1,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop29.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop30.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop31.png",
            width: 1,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop32.png",
            width: 2,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop33.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop34.png",
            width: 2,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop35.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop36.png",
            width: 2,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop37.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop38.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop39.png",
            width: 2,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop40.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop41.png",
            width: 1,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop42.png",
            width: 4,
            height: 3
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop43.png",
            width: 2,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop44.png",
            width: 3,
            height: 2
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop45.png",
            width: 2,
            height: 1
        },
        {
            src: process.env.PUBLIC_URL + "/images/coffee_shop46.png",
            width: 4,
            height: 3
        },
    ];

    return (
        <>
            <GalleryWrapper>
                <GalleryHeader>
                    Gallery
                </GalleryHeader>
                <GalleryContainer>
                    <Gallery photos={photos}/>
                </GalleryContainer>
            </GalleryWrapper>
        </>
    );
}

export default GalleryPage;