import { Facebook, Instagram, MailOutline, Phone, Room, WhatsApp } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    padding: 20;
`;

const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List =  styled.ul`
    margin: 0;
    padding: 20;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20;
`;

const ContacItem = styled.div`

`;

const Payment = styled.img``;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ElectricSalud</Logo>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum et, 
                    suscipit placeat labore voluptatem corrupti magni illo assumenda, 
                    neque possimus cum nisi! Quo placeat impedit sit doloribus rem nemo beatae!
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="green">
                        <WhatsApp/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Secciones útiles</Title>
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>Salud</ListItem>
                    <ListItem>Ciencia</ListItem>
                    <ListItem>PetLovers</ListItem>
                    <ListItem>Servicios</ListItem>
                    <ListItem>Mi cuenta</ListItem>
                    <ListItem>Ofertas</ListItem>
                    <ListItem>Favoritos</ListItem>
                    <ListItem>Términos</ListItem>
                </List>
            </Center>
            <Right>

                <Title>Contacto</Title>
                <ContacItem> <Room style={{marginRight:"10px"}}/>
                    Distribuimos por delivery a todo el Perú.
                </ContacItem>
                <ContacItem> <Phone style={{marginRight:"10px"}}/>
                    +51 994 971 591
                </ContacItem>
                <ContacItem> <MailOutline style={{marginRight:"10px"}}/>
                    electricsalud.pe@gmail.com
                </ContacItem>
                <br/>
                <Payment src="/image/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
