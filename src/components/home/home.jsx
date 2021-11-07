import React from 'react';
import {
    BodyContainer,
    CompanyName,
    Header,
    MainContainer,
    MenuBtn, MenuContainer, MenuHeader, MenuItem, MenuItemHeader,
    Review, ReviewBody,
    ReviewContainer,
    ReviewHeader,
} from './homeStyles';


function Home(props) {
    return (
        <>
            <MainContainer style={backgroundImage}>
                {/*<Header>*/}
                {/*    Experience<br/>*/}
                {/*    Coffee<br/>*/}
                {/*    <span style={{color: "#db0028", fontSize: "5vw"}}>Perfection</span>*/}
                {/*</Header>*/}
                <CompanyName>
                    Reservoir Coffee
                </CompanyName>
            </MainContainer>
            <ReviewBody>
                <ReviewHeader>
                    Reviews
                </ReviewHeader>
                <ReviewContainer>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftiger.powers.18%2Fposts%2F2166366126963612&show_text=true&width=500"
                        width="500"
                        height="263"
                        style={{border: 'none', overflow: 'hidden', margin: "25px"}}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={"embed review"}/>

                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrish.stathers%2Fposts%2F10103539767359841&show_text=true&width=500"
                        width="500"
                        height="187"
                        style={{border: 'none', overflow: 'hidden', margin: "25px"}}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={"embed review"}/>

                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Finnerfirenikki%2Fposts%2F10164123735280065&show_text=true&width=500"
                        width="500"
                        height="187"
                        style={{border: 'none', overflow: 'hidden', margin: "25px"}}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={"embed review"}/>

                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Famcleod00%2Fposts%2F10158687328407866&show_text=true&width=500"
                        width="500"
                        height="187"
                        style={{border: 'none', overflow: 'hidden', margin: "25px"}}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={"embed review"}/>

                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMichelle.Daviees%2Fposts%2F10164335609155437&show_text=true&width=500"
                        width="500"
                        height="244"
                        style={{border: 'none', overflow: 'hidden', margin: "25px"}}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={"embed review"}/>
                </ReviewContainer>
            </ReviewBody>
            <BodyContainer style={bodyBackgroundImage}>
                <MenuHeader>
                    Menu
                </MenuHeader>
                <MenuContainer>
                    <MenuItem>
                        <table style={tableStyles}>
                            <tr>
                                <th>Coffee</th>
                                <th>12 oz.</th>
                                <th>16 oz.</th>
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
                                <th>Traditional</th>
                                <th>12 oz.</th>
                                <th>16 oz.</th>
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
                                <th>Not Coffee</th>
                                <th>12 oz.</th>
                                <th>16 oz.</th>
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
                                <th>Summer</th>
                                <th>12 oz.</th>
                                <th>16 oz.</th>
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
            </BodyContainer>
        </>
    );
}

const backgroundImage = {
    backgroundImage: 'url(/images/espresso1.jpg)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}

const bodyBackgroundImage = {
    backgroundImage: 'url(/images/wood2.jpg)',
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat"
}

const footerStyles = {
    margin: "0",
    textAlign: "right",
    fontSize: "1em",
    fontStyle: "italic",
}

const tableStyles = {
    width: "100%",
    fontSize: "1.3rem",
    tableLayout: "fixed",
    fontFamily: "Staatliches"
}

export default Home;