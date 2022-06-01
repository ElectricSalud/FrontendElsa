import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex; 
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;


const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrar por:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>

            {/* sizes if is clothes */}
                {/* <Select>
                    <Option disabled selected>
                        Tallas
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select> */}

                {/* <Select>
                    <Option disabled selected>
                        Price
                    </Option>
                    <Option>s/.1 - s/.49</Option>
                    <Option>s/.50 - s/.99</Option>
                    <Option>s/.100 - s/.199</Option>
                    <Option>s/.200 - s/.299</Option>
                    <Option>Más de s/.300</Option>
                </Select> */}
            </Filter>

            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Recientes</Option>
                    <Option>Precio (asc)</Option>
                    <Option>Precio (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
