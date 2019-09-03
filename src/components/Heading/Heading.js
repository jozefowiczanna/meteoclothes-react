import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({small}) => small ? '19px' : '24px'};
  margin-bottom: 32px;
`;

export default Heading;