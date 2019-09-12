import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  color: rgba(230, 230, 230, 0.9);
  text-decoration: none;
  padding: 15px 30px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.4);
  transition: all 0.2s;
`;

const LinkItem = ({ href, children }) => (
    <li>
        <StyledLink to={href}>{children}</StyledLink>
    </li>
);

export default LinkItem;