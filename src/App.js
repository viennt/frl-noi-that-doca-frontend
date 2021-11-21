import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import SingleCategory from 'Pages/SingleCategory';
import AboutUs from 'Pages/AboutUs';
import ContactUs from 'Pages/ContactUs';

import SectionHeader from 'Components/Sections/SectionHeader';
import SectionFooter from './Components/Sections/SectionFooter';

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <SectionHeader />
        <Switch>
          <Route path="/lien-he" children={<ContactUs />} />
          <Route path="/gioi-thieu" children={<AboutUs />} />
          <Route path="/san-pham/:slug" children={<SingleCategory />} />
          <Route path="/" children={<Home />} />
        </Switch>
        <SectionFooter />
      </BrowserRouter>
    );
  }
}
export default App
