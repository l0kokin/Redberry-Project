import Logo from "../images/logo-redberry.png";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="redberry logo" />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 2.4rem;
  margin: 3.8rem 0rem 11rem;
`;
