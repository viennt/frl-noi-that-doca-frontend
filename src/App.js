import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import SingleCategory from 'Pages/SingleCategory';
import AboutUs from 'Pages/AboutUs';
import ContactUs from 'Pages/ContactUs';

import SectionHeader from 'Components/Sections/SectionHeader';

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <SectionHeader />
        <Switch>
          <Route path="/lien-he">
            <ContactUs />
          </Route>
          <Route path="/gioi-thieu">
            <AboutUs />
          </Route>
          <Route path="/san-pham/:slug">
            <SingleCategory />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App
