import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import About from 'components/About/About';
import Nav from 'components/Nav/Nav';
import HowView from 'views/HowView/HowView';
import ConditionsView from 'views/ConditionsView/ConditionsView';
import SaveModal from 'components/SaveModal/SaveModal';
import Form from 'components/Form/Form';

class Root extends Component {
  state={
    isNavOpen: true,
  }

  closeNav = (e) => {
    !e.target.closest("nav") &&
    this.setState({isNavOpen: false});
  }

  render() {
    return (
      <div onClick={(e) => this.closeNav(e)}>
        <Provider store={store}>
          <BrowserRouter>
            <Nav closeNavFn={this.closeNav} />
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/how" component={HowView} />
              <Route path="/conditions" component={ConditionsView} />
            </Switch>
            <SaveModal />
            <Form />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default Root;
