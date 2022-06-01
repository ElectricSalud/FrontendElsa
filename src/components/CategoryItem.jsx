import styled from "styled-components"


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height:70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0px;
    widht: 100%;
    height: 100%;
    flex-direction:column;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: mediumblue;
    text-shadow: -1px -1px 1px #ccc,
    0px 4px 1px rgba(0,0,0,-90),
    4px 4px 5px rgba(0,0,0,-70),
    0px 0px 7px rgba(0,0,0,60);
    margin-bottom: 20px;
    font-family: sans-serif;
    font-weight: bolder;
    font-size: 36px;
`;
const Button = styled.button`
    border: 1px solid #ffffff;
    border-radius: 40px;
    padding: 17px;
    text-shadow: -1px -1px 1px #aaa,
    // 0px 4px 1px rgba(0,0,0,0.5),
    // 4px 4px 5px rgba(0,0,200,50.7),
    0px 0px 7px rgba(0,0,200,50.4);
    background-color: mediumblue;
    font-family: helvetica;
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 1.2px;
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <center><Info>
            <Title>{item.title}</Title> 
            <Button>COMPRAR <br/> AHORA</Button>
        </Info>
        </center>
    </Container>
    )
}

export default CategoryItem