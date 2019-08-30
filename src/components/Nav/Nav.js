import React from "react";
import LinkItem from "../LinkItem/LinkItem";
import $ from "jquery";
import { toggleModal as toggleModalAction } from "actions";
import { connect } from "react-redux";

class Nav extends React.Component {
  state = {
    isNavOpen: false,
    isSubmenu1Open: false,
    isSubmenu2Open: false
  };

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  closeNav = e => {
    e.target.tagName === "A" &&
      this.setState({
        isNavOpen: false
      });
  };

  toggleSubmenu = nr => {
    const stateItem = `isSubmenu${nr}Open`;
    const submenuClass = `.submenu${nr}`;
    this.setState({
      [stateItem]: !this.state[stateItem]
    });
    !this.state[stateItem]
      ? $(submenuClass).slideDown()
      : $(submenuClass).slideUp();
  };

  toggleNavCons = () => {
    this.setState({
      isNavConsOpen: !this.state.isNavConsOpen
    });
    !this.state.isNavConsOpen
      ? $(".slide-cons").slideDown()
      : $(".slide-cons").slideUp();
  };

  toggleNavDays = () => {
    this.setState({
      isSubmenu2Open: !this.state.isSubmenu2Open
    });
    !this.state.isSubmenu2Open
      ? $(".slide-days").slideDown()
      : $(".slide-days").slideUp();
  };

  toggleActiveClass = stateItem => (this.state[stateItem] ? " active" : "");

  generateNums = (from, to) => [...Array(to + 1).keys()].slice(from);

  render() {
    const { generateNums } = this;
    const { toggleNav, closeNav } = this;
    const buttonFunctions = {
      toggleSubmenu: this.toggleSubmenu,
      toggleActiveClass: this.toggleActiveClass
    };
    const { toggleModal } = this.props;
    return (
      <header>
        <nav className={"sidebar" + this.toggleActiveClass("isNavOpen")}>
          <div className="toggle-btn" onClick={toggleNav}>
            <div className="hamburger-icon">
              <div className="hamburger"></div>
            </div>
          </div>
          <ul onClick={closeNav}>
            <LinkItem href="/">O projekcie</LinkItem>
            <LinkItem href="/how">Jak to działa?</LinkItem>
            <LinkItem href="/conditions" buttonFn={buttonFunctions} nr={1}>
              Warunki
            </LinkItem>
            <div className="submenu1">
              <div className="submenu1-row">
                {generateNums(1, 3).map(nr => {
                  return (
                    <LinkItem
                      key={`section-con-${nr}`}
                      href={`/conditions#section-con-${nr}`}
                      classes="circle-link"
                    >
                      <span className={`nav-circle nav-circle${nr}`}></span>
                    </LinkItem>
                  );
                })}
              </div>
              <div className="submenu1-row">
                <LinkItem
                  href={"/conditions#section-con-4"}
                  classes="icon-link"
                >
                  <div className="nav-icon diw-wind"></div>
                </LinkItem>
                <LinkItem href="/conditions#section-con-5" classes="icon-link">
                  <div className="nav-icon diw-rain"></div>
                </LinkItem>
              </div>
            </div>
            <a
              href="#save"
              onClick={e => {
                e.preventDefault();
                toggleModal("isSaveModalOpen");
              }}
            >
              Zapisz/resetuj
            </a>
            <LinkItem href="/where">Dokąd pojedziesz?</LinkItem>
            <LinkItem href="/forecast" buttonFn={buttonFunctions} nr={2}>
              Prognoza
            </LinkItem>
            <div className="submenu2">
              <div className="submenu2-flex">
                {generateNums(1, 8).map(nr => {
                  return (
                    <LinkItem key={`day-${nr}`} href={`/forecast#day-${nr}`}>
                      {nr}
                    </LinkItem>
                  );
                })}
              </div>
            </div>
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

const mapDispatchToProps = dispatch => ({
  toggleModal: whichModal => dispatch(toggleModalAction(whichModal))
});

export default connect(
  null,
  mapDispatchToProps
)(Nav);
