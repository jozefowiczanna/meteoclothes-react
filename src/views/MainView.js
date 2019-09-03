import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "components/About/About";
import Nav from "components/Nav/Nav";
import HowView from "views/HowView";
import ConditionsView from "views/ConditionsView";
import ForecastView from "views/ForecastView";
import SaveModal from "components/SaveModal/SaveModal";
import Form from "components/Form/Form";
import { connect } from 'react-redux';
import { closeNav as closeNavAction } from 'actions';

const MainView = ({ isNavOpen, closeNav }) => (
    <div onClick={(e) => {
      if (isNavOpen && !e.target.closest('nav')) {
        closeNav();
      }
    }}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/how" component={HowView} />
          <Route path="/conditions" component={ConditionsView} />
          <Route path="/forecast" component={ForecastView} />
        </Switch>
        <SaveModal />
        <Form />
      </BrowserRouter>
    </div>
);

const mapStateToProps = ({ isNavOpen }) => ({ isNavOpen});

const mapDispatchToProps = dispatch => ({
  closeNav: () => dispatch(closeNavAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
