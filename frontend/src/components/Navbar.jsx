import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import {mobile} from '../../src/responsive'

const Container = styled.div`
  height: 60px;
  ${mobile({height: '50px'})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: '10px 0'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({dispaly: 'none'})}

`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({width: '50px'})}

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: 800;
  ${mobile({fontSize: '24px'})}

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: 'center'})}

`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
  ${mobile({fontSize: '12px', marginLeft: '10px',})}

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='search'/>
            <SearchIcon style={{color:'gray',fontSize:'16px'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
