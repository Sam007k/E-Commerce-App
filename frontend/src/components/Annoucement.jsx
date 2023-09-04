import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`

const Annoucement = () => {
  return <Container>Super Deal! Free Shippng on Orders above $50</Container>;
};
export default Annoucement;
