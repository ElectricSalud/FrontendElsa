import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container= styled.div`
`;

const Wrapper= styled.div`
    paddinng: 50px;
    display: flex;
`;

const ImgContainer= styled.div`
    flex: 1;
`;

const Image= styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    padding: 20px;
`;

const InfoContainer= styled.div`
    flex: 1;
    padding: 30px 50px;
`;

const Title= styled.h1`
    font-weight:200;
`;

const Descrip= styled.p`
    margin: 20px 0px;
`;

const Price= styled.span`
    font-weight: 100px;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1.5px solid mediumblue;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    background-color: lemonchiffon;

`;

const Button = styled.button`
    padding: 7px;
    border: 2px solid mediumblue;
    background-color: lemonchiffon;
    cursor: pointer;
    font-weight: 850;
    

    &:hover{
        backgroun-color: #f8f4f4;
    }
`;


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
        </ImgContainer>
        
        <InfoContainer>
            <Title>
                Maqueta ocular
            </Title>
            <Descrip>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quod ut, id distinctio, nostrum architecto, error ducimus 
                qui officiis similique nisi tempora accusamus perferendis? 
                Beatae ullam dolor eos accusamus doloremque corrupti!
            </Descrip>
            <Price> S/. 249.99</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>

                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>

                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>AGREGAR AL CARRITO</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
