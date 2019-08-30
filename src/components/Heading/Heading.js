import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({small}) => small ? '1.2rem' : '1.5rem'};
  margin-bottom: 2rem;
`;

export default Heading;