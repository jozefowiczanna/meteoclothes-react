import React from 'react';
import { Link } from 'react-router-dom';

const LinkItem = ({ href, classes, buttonFn, children, nr }) => (
    <li className={buttonFn ? "li-flex" : ""}>
        <Link to={href} className={classes}>{children}</Link>
        {buttonFn ? (
            <button
                onClick={() => {buttonFn.toggleSubmenu(nr)}}
                className="show-btn"
            >
                <i className={"fas fa-chevron-down" + buttonFn.toggleActiveClass(`isSubmenu${nr}Open`)}></i>
            </button>
        ) : (null)}
    </li>
);

export default LinkItem;