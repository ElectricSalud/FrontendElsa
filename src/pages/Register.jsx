import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/4252661/pexels-photo-4252661.jpeg?cs=srgb&dl=pexels-edward-jenner-4252661.jpg&fm=jpg")
    center;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    font-weight: 700;
    background-color: mediumblue;
    color: white;
    cursor: pointer;
    border-radius: 10px;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREAR CUENTA</Title>
            <Form>
                <Input placeholder="Nombres"/>
                <Input placeholder="Apellidos"/>
                <Input placeholder="Usuario"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Contraseña"/>
                <Input placeholder="Confirmar contraseña"/>
                <Agreement>
                    Los datos personales recolectados en esta plataforma son de uso privado.
                    De acuerdo a la <b> Política de privacidad </b> . 
                </Agreement>
                <Button>CREAR CUENTA</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register;
