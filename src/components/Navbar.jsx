import { ShoppingCartRounded } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Badge, MenuItem } from '@material-ui/core';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    background-color: #FFFBDA;
    ${mobile({ height: "50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px"})}
`;

const Logo = styled.span`
    font-size: 14px;
    cursor: pointer;
    display: flex;
    flex:  1;
    align-items: center;
`;

// const SearchContainer = styled.div`
//     border: none;
//     align-items: center;
//     margin-right: -20px;
//     padding: 5px;
//     display: flex;
//     flex:  1;
//     align-items: center;
// `;

const Categorys = styled.div`
    font-size: 18px;
    cursor: pointer;
    display: flex;
    flex:  1;
    align-items: center;
    margin-right: 25px;
    font-family: helvetica;
    font-weight: bolder;
    letter-spacing: 1.2px;
`;

// const Input = styled.input`
//     border: none;
// `;

const Center = styled.div`
    font-size: 18px;
    cursor: pointer;
    display: flex;
    flex:  1;
    align-items: center;
    margin-right: -45px;
    font-family: helvetica;
    font-weight: bolder;
    letter-spacing: 1.2px;
`;

const Right = styled.div`
    font-size: 18px;
    cursor: pointer;
    display: flex;
    flex:  0.8;
    align-items: center;
    margin-left: 25px;
    font-family: helvetica;
    font-weight: bold;
    letter-spacing: 1.2px;
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    {/* <img src="/public/logo.png"/> */}
                </Logo>

                <Categorys>
                    CATEGORÍAS
                </Categorys>

                <Center>
                    PROMOCIONES
                </Center>

                {/* <SearchContainer>
                    <Input/>
                    <Search Style={{color: "gray", fontSize:16}}/>
                </SearchContainer> */}

                <Right>
                    <MenuItem><bold>REGISTRARSE</bold></MenuItem>
                    <MenuItem><bold>INICIAR SESIÓN</bold></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="blue">
                            <ShoppingCartRounded />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
