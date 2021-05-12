import React, { PureComponent } from 'react';

import SectionHeader from 'Components/Sections/SectionHeader';
import SectionBanner from 'Components/Sections/SectionBanner';
import Separator from 'Components/Sections/Separator';
import SectionFeatureProducts from 'Components/Sections/SectionFeatureProducts';
import SectionCategories from 'Components/Sections/SectionCategories';
import SectionContact from 'Components/Sections/SectionContact';
import SectionProjects from 'Components/Sections/SectionProjects';
import SectionFooter from 'Components/Sections/SectionFooter';

class App extends PureComponent {
  render () {
    return (
      <>
        <SectionHeader />
        <SectionBanner />
        <Separator />
        <SectionFeatureProducts />
        <SectionCategories />
        <SectionContact />
        <SectionProjects />
        <SectionFooter />
      </>
    );
  }
}
export default App
