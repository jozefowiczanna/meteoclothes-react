import React from 'react';
import { Link } from 'react-router-dom';

const LinkItem = ({ href, classes, children }) => (
    <li className>
        <Link to={href} className={classes}>{children}</Link>
    </li>
);

export default LinkItem;