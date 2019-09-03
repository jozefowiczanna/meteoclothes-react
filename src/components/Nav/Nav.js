import React from "react";
import LinkItem from "../LinkItem/LinkItem";
import {
  toggleModal as toggleModalAction,
  toggleNav as toggleNavAction,
  closeNav as closeNavAction,
} from "actions";
import { connect } from "react-redux";

class Nav extends React.Component {
  
  render() {
    const { toggleModal, toggleNav, isNavOpen, closeNav } = this.props;
    const isActive = isNavOpen ? "active" : null;

    return (
      <header>
        <nav className={"sidebar " + isActive}>
          <div className="toggle-btn" onClick={(e) => toggleNav(e.target)}>
            <div className="hamburger-icon">
              <div className="hamburger"></div>
            </div>
          </div>
          <ul onClick={closeNav}>
            <LinkItem href="/">O projekcie</LinkItem>
            <LinkItem href="/how">Jak to działa?</LinkItem>
            <LinkItem href="/conditions">
              Warunki
            </LinkItem>
            <a
              href="#save"
              onClick={e => {
                toggleModal("isSaveModalOpen");
              }}
            >
              Zapisz/resetuj
            </a>
            <LinkItem href="/where">Dokąd pojedziesz?</LinkItem>
            <LinkItem href="/forecast">Prognoza</LinkItem>
            <li>
              <a
                href="https://jozefowiczanna.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                O mnie
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = ({ isNavOpen }) => ({ isNavOpen });

const mapDispatchToProps = dispatch => ({
  toggleModal: modalState => dispatch(toggleModalAction(modalState)),
  toggleNav: e => dispatch(toggleNavAction(e)),
  closeNav: () => dispatch(closeNavAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
