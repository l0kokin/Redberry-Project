import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../colors";
import Logo from "../images/logo-redberry.png";

function Header() {
  return (
    <HeaderContainer to="/">
      <img src={Logo} alt="redberry logo" />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 2.4rem;
  padding: 4.8rem 0rem 4.8rem 16.2rem;
  border-bottom: 1px solid ${colors.light_grey};
  margin-bottom: 7.7rem;
  margin-left: -16.2rem !important;
`;
