import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px
`

const h3 = styled.h3`
background-color: 'green';
color: white;
`

const Success =() =>{
    return (
        <Container>
        <img src='https://avatars.githubusercontent.com/u/58684781?v=4'/>
        <h3>Successfull</h3>
        <p>Your order us being prepared.Thanks for choosing Serene Shop</p>
        </Container>
    )
    }

export default Success