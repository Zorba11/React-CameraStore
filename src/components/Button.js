import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4;
  font-weight: bold;
  background: transparent;
  border: 0.2rem solid var(--secondaryColor);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--secondaryColor)"};

  color: ${props =>
    props.prodBut
      ? "var(--mainGreen)"
      : props.cart
      ? "var(--mainYellow)"
      : "var(--mainWhite)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--secondaryColor)"};
    color: var(--mainDark);
  }
  &:focus {
    outline: none;
  }
`;
