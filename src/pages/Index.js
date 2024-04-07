import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionFeatures2 from '../components/features/IndexSectionFeatures2';
import IndexSectionNumbers6 from '../components/numbers/IndexSectionNumbers6';
import IndexSectionTestimonials5 from '../components/testimonials/IndexSectionTestimonials5';
import IndexSectionHowItWorks3 from '../components/how-it-works/IndexSectionHowItWorks3';
import IndexSectionFooters4 from '../components/footers/IndexSectionFooters4';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
      <IndexSectionFeatures2 />
      <IndexSectionNumbers6 />
      <IndexSectionTestimonials5 />
      <IndexSectionHowItWorks3 />
      <IndexSectionFooters4 />
    </React.Fragment>
  );
}

