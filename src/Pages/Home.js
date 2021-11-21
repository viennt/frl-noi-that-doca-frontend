import React, { PureComponent } from 'react';

import SectionBanner from 'Components/Sections/SectionBanner';
import Separator from 'Components/Sections/Separator';
import SectionFeatureProducts from 'Components/Sections/SectionFeatureProducts';
import SectionCategories from 'Components/Sections/SectionCategories';
import SectionContact from 'Components/Sections/SectionContact';
import SectionProjects from 'Components/Sections/SectionProjects';

class Home extends PureComponent {
  render () {
    return (
      <>
        <SectionBanner />
        <Separator />
        <SectionCategories />
        <SectionFeatureProducts />
        <SectionContact />
        <SectionProjects />
      </>
    );
  }
}
export default Home
