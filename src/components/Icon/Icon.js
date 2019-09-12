import styled, { css } from 'styled-components';

const Icon = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  background-image: url(${({icon}) => (icon)});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: ${({ secondary }) => secondary ? '85% 85%' : '100% 100%' };

  ${({big}) => 
    big && css`
      width: 68px;
      height: 68px;
    `
  }
`;

export default Icon;