import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from 'components/About/About';
import Nav from 'components/Nav/Nav';
import HowView from 'views/HowView';
import ConditionsView from 'views/ConditionsView';
import ForecastView from 'views/ForecastView';
import SaveModal from 'components/SaveModal/SaveModal';
import Form from 'components/Form/Form';
import { connect } from 'react-redux';
import { loadValues } from 'actions';

import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

class MainView extends Component {

  componentDidMount() {
    this.props.loadValues();
  }

  render() {
    return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <Nav />
          <Switch>
            <Route exact path="/meteoclothes-react/" component={About} />
            <Route path="/meteoclothes-react/how" component={HowView} />
            <Route path="/meteoclothes-react/conditions" component={ConditionsView} />
            <Route path="/meteoclothes-react/forecast" component={ForecastView} />
          </Switch>
          <SaveModal />
          <Form />
        </ScrollToTop>
      </ThemeProvider>
    </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadValues: () => dispatch(loadValues())
})

export default connect(null, mapDispatchToProps)(MainView);