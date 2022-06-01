import styled from "styled-components"

const Container = styled.div`
    height: 40px;
    background-color: mediumblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15.5px;
    font-weight: 580;
    font-style: italic;
    letter-spacing: 1px;
`


const Announcement = () => {
  return (
    <Container>
      ¡Super Promoción! Delivery gratis por compras a partir de s/50
    </Container>
  )
}

export default Announcement
