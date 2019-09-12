import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "components/About/About";
import Nav from "components/Nav/Nav";
import HowView from "views/HowView";
import ConditionsView from "views/ConditionsView";
import ForecastView from "views/ForecastView";
import SaveModal from "components/SaveModal/SaveModal";
import Form from "components/Form/Form";

import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';


const MainView = () => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <Nav />
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/how" component={HowView} />
              <Route path="/conditions" component={ConditionsView} />
              <Route path="/forecast" component={ForecastView} />
            </Switch>
            <SaveModal />
            <Form />
          </>
        </ThemeProvider>
      </BrowserRouter>
);

export default MainView;
