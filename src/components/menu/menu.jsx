import React from 'react';
import {
    BodyContainer,
    MainContainer, MenuCol,
    MenuContainer,
    MenuHeader,
    MenuItem,
    MenuTable,
} from "../home/homeStyles";
import {Row} from "react-bootstrap";
import {LatteImg, MenuInnerHeader} from "./menuStyles";

function Menu(props) {
    return (
        <>
            <MainContainer style={backgroundImage}>
                <BodyContainer>
                    <MenuHeader>
                        Menu
                    </MenuHeader>
                    <MenuContainer>
                        <MenuInnerHeader>
                            Drinks
                        </MenuInnerHeader>
                        <Row className={"mt-4 ml-0 mr-0"}>
                            <MenuCol>
                                <MenuItem>
                                    <MenuTable>
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
                                    </MenuTable>
                                </MenuItem>
                                <MenuItem>
                                    <MenuTable>
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
                                    </MenuTable>
                                </MenuItem>
                                <LatteImg src={process.env.PUBLIC_URL + "/images/latte.png"}/>
                            </MenuCol>
                            <MenuCol>
                                <MenuItem>
                                    <MenuTable>
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
                                    </MenuTable>
                                </MenuItem>
                                <MenuItem>
                                    <MenuTable>
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
                                        <tr>
                                            <td>Iced Matcha/Blue</td>
                                            <td>4.50</td>
                                            <td>5.00</td>
                                        </tr>
                                        <tr>
                                            <td>Iced Chai</td>
                                            <td>4.00</td>
                                            <td>4.50</td>
                                        </tr>
                                        <tr>
                                            <td>Lemonade</td>
                                            <td>3.25</td>
                                            <td>3.75</td>
                                        </tr>
                                        <tr>
                                            <td>Smoothie</td>
                                            <td>6.00</td>
                                            <td>7.00</td>
                                        </tr>
                                        <tr>
                                            <td>Tonic Espresso</td>
                                            <td>3.75</td>
                                            <td>4.25</td>
                                        </tr>
                                    </MenuTable>
                                </MenuItem>
                            </MenuCol>
                        </Row>
                        <MenuInnerHeader>
                            Food
                        </MenuInnerHeader>
                    </MenuContainer>
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
    color: "#2dccd3"
}

export default Menu;