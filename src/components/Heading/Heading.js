import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({small}) => small ? '19px' : '24px'};
  margin-bottom: 32px;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

export default Heading;