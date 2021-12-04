import React from 'react';
import {
    MainContainer,
    MenuContainer,
    MenuHeader,
    MenuItem,
} from "../home/homeStyles";
import {Col, Row} from "react-bootstrap";
import {MenuBodyContainer, MenuItemHeader} from "./menuStyles";

function Menu(props) {
    return (
        <>
            <MainContainer style={backgroundImage}>
                <MenuBodyContainer>
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
                        <Row>
                            <Col sm={12}>
                                <MenuItemHeader>
                                    Food & Snacks
                                </MenuItemHeader>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <MenuItem>
                                    Reservoir Egger
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Sausage Egger
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Spinach & Feta Quiche
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Aussie Meat Pie
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Grilled Cheese
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Assorted Pastries
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Assorted Cookies & Muffins
                                </MenuItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <MenuItemHeader>
                                    Wraps
                                </MenuItemHeader>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <MenuItem>
                                    Vegan
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Southwest
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Thai Chicken
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Butter Chicken
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Teriyaki Chicken
                                </MenuItem>
                            </Col>
                            <Col sm={3}>
                                <MenuItem>
                                    Carnivore
                                </MenuItem>
                            </Col>
                        </Row>
                    </MenuContainer>
                </MenuBodyContainer>
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