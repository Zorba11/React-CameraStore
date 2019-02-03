import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4;
  background: transparent;
  border: 0.2rem solid var(--secondaryColor);
  color: var(--mainWhite);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
  &:hover {
    background: var(--secondaryColor);
    color: var(--primaryColor);
  }
  &:focus {
    outline: none;
  }
`;
