import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledListItem = styled.li`
  list-style: none;
  margin: 0.4rem 0;
  position: relative;

  &:before {
		display: block;
		content: "-";
		font-weight: bold;
		position: absolute;
		left: -12px;
	}
`;

const ListTakeItem = ({ item }) => (
  <StyledListItem>{item}</StyledListItem>
);

ListTakeItem.propTypes = {
  item: PropTypes.string,
}

export default ListTakeItem;