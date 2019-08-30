import styled from 'styled-components';

const Logo = styled.img`
  width: 40%;
  height: auto;
  margin-left: 3rem;
  display: none;

  @media screen and (min-width: 850px) {
    display: block;
    width: 40%;
    margin-left: 3rem;
  }
`;

export default Logo;