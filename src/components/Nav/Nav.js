import React from "react";
import LinkItem from "../LinkItem/LinkItem";
import {
  toggleModal as toggleModalAction,
} from "actions";
import { connect } from "react-redux";


class Nav extends React.Component {
  state = {
    isNavOpen: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen
    }))
  }

  closeNav = () => {
    this.setState({
      isNavOpen: false
    })
  }
  
  render() {
    const { toggleModal } = this.props;
    const isActive = this.state.isNavOpen ? "active" : null;

    return (
      <header>
        <nav className={"sidebar " + isActive}>
          <div className="toggle-btn" onClick={() => this.toggleNav()}>
            <div className="hamburger-icon">
              <div className="hamburger"></div>
            </div>
          </div>
          <ul onClick={this.closeNav}>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
