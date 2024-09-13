import styled from "styled-components";
import { colors } from "../colors";
import { Link } from "react-router-dom";

// export const Card = styled.div`
export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 38.4rem;
  border: 1px solid ${colors.light_grey};
  border-radius: 14px;
  overflow: hidden;

  img {
    width: 100%;
    height: 30.7rem;
  }
`;

export const PropertyDetails = styled.div`
  padding: 2.2rem 2.5rem;

  p {
    margin: 0.6rem;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.36rem;
    text-align: left;
    color: ${colors.black};
  }
`;

export const Details = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.92rem;
  text-align: left;
  color: ${colors.navy};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  gap: 3.2rem;
`;
