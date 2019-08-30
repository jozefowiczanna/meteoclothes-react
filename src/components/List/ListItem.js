import React from 'react';

const ListItem = ({ item, children }) => (
	<li className="list-item">
		<div className="list-item-text">{item}</div>
    {children}
	</li>
);

export default ListItem;