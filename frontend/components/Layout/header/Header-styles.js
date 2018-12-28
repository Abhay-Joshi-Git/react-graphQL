import Styled from "styled-components";

export const Logo = Styled.h1`
    margin: 10px;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem 1rem;
        background: red;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }
    @media (max-width: 1300px) {
        text-align: center;
    }
`;

export const StyledHeader = Styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }
`;